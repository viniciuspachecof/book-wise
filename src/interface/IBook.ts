export interface IBook {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  total_pages: number;
  categories: {
    id: string;
    name: string;
  }[];
}
