export interface Client {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  role: string;
  image: {
    source: string | null;
    alt: string | null;
  };
}
