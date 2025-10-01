import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const ratings = await prisma.rating.findMany({
    select: {
      id: true,
      rate: true,
      description: true,
      created_at: true,
      book: {
        select: {
          id: true,
          name: true,
          cover_url: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 3,
  });

  return res.status(201).json(ratings);
}
