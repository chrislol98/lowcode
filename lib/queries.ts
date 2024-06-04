import { User } from '@prisma/client';
import { db } from './db';
export const createUser = async (id: string, user: User) => {
  const response = await db.user.create({ data: { ...user } });
  return response;
};
