export interface Article {
  id: string;
  image: {
    url: string;
    alt: string;
    source: string;
  };
  title: string;
  subTitle: string;
  content: string;
  pubDate: Date;
  author: string;
  category: string;
}
