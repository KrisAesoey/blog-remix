import type { PortableTextBlock } from "@portabletext/types";

export type Article = {
  _type: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
}

export type CodeBlock = {
  _type: string;
  code: string;
  filename: string;
  highlightedLines: number[];
  language: string;
}

export type CodeBlocks = {
  _type: string;
  items: CodeBlock[];
}

export type TextBlock = {
  _type: string;
  content: PortableTextBlock[];
}

export type TextBlocks = {
  _type: string;
  items: TextBlock[];
}
