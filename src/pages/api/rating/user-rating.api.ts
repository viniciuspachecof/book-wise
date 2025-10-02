import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { buildNextAuthOptions } from '../auth/[...nextauth].api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

  const lastRatingUser = await prisma.rating.findFirst({
    where: {
      user_id: session?.user.id,
    },
    select: {
      id: true,
      rate: true,
      created_at: true,
      book: {
        select: {
          id: true,
          name: true,
          cover_url: true,
          summary: true,
          author: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  });

  return res.status(201).json({ ...lastRatingUser });
}
