export interface Article {
  id: string;
  image: {
    url: string;
    source: string | null;
    alt: string | null;
  }[];
  title: string;
  subTitle: string;
  content: string;
  pubDate: Date;
  author: string;
  category: string;
}
