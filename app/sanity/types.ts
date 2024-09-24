import type { PortableTextBlock } from "@portabletext/types";

export type Article = {
  _type: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
}

export type TextBlock = {
  _type: string;
  content: PortableTextBlock[];
}

export type TextBlocks = {
  _type: string;
  items: TextBlock[];
}
