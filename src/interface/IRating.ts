export interface IRating {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  user: {
    id: string;
    name: string;
    avatar_url: string;
  };
}
