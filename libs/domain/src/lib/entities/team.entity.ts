export interface Team {
  name: string;
  role: string;
  image: {
    url: string;
    source: string | null;
    alt: string | null;
  };
  order: number;
  linkedin: string;
  instagram: string;
  description: string;
}
