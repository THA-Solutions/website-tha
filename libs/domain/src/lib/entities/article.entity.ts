export interface Article {
  id: string;
  image: {
    url: string;
    source: string | null;
    alt: string | null;
<<<<<<< HEAD
    pos: number | 0;
  };
=======
  }[];
>>>>>>> 8da0f82b8e8cd42aa754a521185968c26fcb991f
  title: string;
  subTitle: string;
  content: string;
  pubDate: Date;
  author: string;
  category: string;
}
