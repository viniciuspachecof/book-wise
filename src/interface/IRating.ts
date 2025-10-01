export interface IRating {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book: {
    id: string;
    name: string;
    cover_url: string;
  };
  user: {
    id: string;
    name: string;
    avatar_url: string;
  };
}
