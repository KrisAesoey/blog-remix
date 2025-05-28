import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { PortableText } from '../../components/css/portableText/PortableText'
import { sanityClient } from '../../sanity/client.server'
import { Article } from '../../sanity/sanity.types'

import '../../components/css/tokens/index.css'
import './route.css'
import { Heading } from '../../components/css/Heading'

type SanityResponse = {
  article: Article
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const url = params['*']

  const result = await sanityClient.fetch<SanityResponse>(
    groq`*[_type == "article" && slug.current == $slug][0]{
      "article": {
        _type,
        title,
        content
      }
    }`,
    { slug: url }
  )

  if (!result?.article) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    })
  }

  return json({ article: result.article })
}

export default function ArticleRoute() {
  const { article } = useLoaderData<typeof loader>()

  return (
    <div className="article-container">
      <div className="article">
        <Heading as="h1" size="lg">
          {article.title}
        </Heading>
        {article.content && <PortableText value={article.content} />}
      </div>
    </div>
  )
}
