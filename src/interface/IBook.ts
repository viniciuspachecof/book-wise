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
  ratings: {
    id: string;
    rate: number;
    description: string;
    created_at: Date;
    user: {
      id: string;
      name: string;
      avatar_url: string;
    };
  }[];
  mediaRate: number;
}
