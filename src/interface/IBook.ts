export interface IBook {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  categories: {
    id: string;
    name: string;
  }[];
}
