export interface Article {
  id: string;
  image: {
    url: string;
    source: string | null;
    alt: string | null;
    pos: number | 0;
  };
  title: string;
  subTitle: string;
  content: string;
  pubDate: Date;
  author: string;
  category: string;
}
