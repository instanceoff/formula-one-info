import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const getRankingDriversPrisma = async () => {
  const result = await prisma.rankingDrivers.findMany({
    orderBy: {
      position: 'asc',
    },
  });

  return result;
};

export const getLastRacePrisma = async () => {
  const result = await prisma.lastRace.findFirst();

  return result;
};

export const getLastWinnerPrisma = async () => {
  const result = await prisma.lastWinner.findFirst();

  return result;
};
