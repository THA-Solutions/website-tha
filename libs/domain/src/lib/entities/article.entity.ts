export interface Article {
  id: string;
  image: {
    url: string;
    imageSrc: string;
  };
  title: string;
  subTitle: string;
  content: string;
  pubDate: Date;
  author: string;
  category: string;
}
