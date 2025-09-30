import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { description, rate, userId, bookId } = req.body;

  const ratingUserBookExists = await prisma.rating.findFirst({
    where: {
      user_id: userId,
      book_id: bookId,
    },
  });

  if (ratingUserBookExists) {
    return res.status(400).json({
      message: 'Usuário já avaliou esse livro.',
    });
  }

  const rating = await prisma.rating.create({
    data: {
      description,
      rate,
      book_id: bookId,
      user_id: userId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar_url: true,
        },
      },
    },
  });

  return res.status(201).json(rating);
}
