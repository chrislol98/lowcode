'use server';
import { User, Canvas } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from './db';
import { z } from 'zod';
import { v4 } from 'uuid';
export const createUser = async (
  user: Awaited<ReturnType<typeof currentUser>>
) => {
  if (user === null) {
    throw new Error('User is null');
  }
  const response = await db.user.create({
    data: { email: user.emailAddresses[0].emailAddress },
  });
  return response;
};

export const getUser = async () => {
  const user = await currentUser();
  if (!user) return redirect('/sign-in');

  let userData;
  try {
    userData = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
    });
  } catch (e) {}
  if (!userData) {
    createUser(user);
  }
  return userData;
};

export const upsertCanvas = async (
  userId: string,
  canvas: Pick<Canvas, 'name'>,
  canvasId?: string
) => {
  const response = await db.canvas.upsert({
    where: { id: canvasId || v4() },
    update: canvas,
    create: {
      ...canvas,
      userId: userId,
    },
  });
  return response;
};

export const getCanvasList = async () => {
  const canvases = await db.canvas.findMany();
  return canvases;
};
