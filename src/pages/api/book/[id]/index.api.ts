import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const id = String(req.query.id);

  const book = await prisma.book.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      total_pages: true,
      categories: {
        select: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      ratings: {
        select: {
          id: true,
          rate: true,
          description: true,
          created_at: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar_url: true,
            },
          },
        },
      },
    },
  });

  if (!book) {
    return res.status(400).json({ message: 'Livro não existe.' });
  }

  const bookFormat = {
    ...book,
    mediaRate: book.ratings.reduce((acc, rating) => acc + rating.rate, 0) / book.ratings.length,
    categories: book.categories.map((c) => c.category),
  };

  return res.json({
    ...bookFormat,
  });
}
