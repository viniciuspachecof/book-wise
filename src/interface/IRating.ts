export interface IRating {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book: {
    id: string;
    name: string;
    author: string;
    summary: string;
    cover_url: string;
    total_pages: number;
    categories: {
      id: string;
      name: string;
    }[];
  };
  user: {
    id: string;
    name: string;
    avatar_url: string;
  };
}
