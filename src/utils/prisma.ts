import {
  lastRace,
  lastWinner,
  PrismaClient,
  RankingDriversPilots,
} from '@prisma/client';
import { getRankingBySeason } from './formulaRequests';

export const prisma = new PrismaClient();

export const getDatabaseRankingDriversPrisma = async () => {
  const result = await prisma.rankingDrivers.findFirst();

  return result?.pilots;
};

export const getDatabaseLastRacePrisma = async () => {
  const result = await prisma.lastRace.findFirst();

  return result;
};

export const getDatabaseLastWinnerPrisma = async () => {
  const result = await prisma.lastWinner.findFirst();

  return result;
};

export const updateDatabaseRankigDrivers = async (
  year?: number,
  newData?: RankingDriversPilots[]
) => {
  const response = await prisma.rankingDrivers.findFirst({
    where: { season: { equals: year } },
  });

  if (!response?.updated) return;

  const updateRes = updateCheck(response.updated);

  if (!updateRes) return;

  await prisma.rankingDrivers.update({
    where: { id: response.id },
    data: { pilots: newData },
  });

  // const res = await getRankingBySeason();

  // await prisma.rankingDrivers.create({
  //   data: { pilots: res, season: res[0].season, updated: new Date() },
  // });
};

export const updateDatabaseLastWinner = async (newData: lastWinner) => {
  const response = await prisma.lastWinner.findFirst();

  if (!response?.updated) return;

  const updateRes = updateCheck(response.updated);

  if (!updateRes) return;

  await prisma.lastWinner.update({ where: { id: response.id }, data: newData });
};

export const updateDatabaseLastRace = async (newData: lastRace) => {
  const response = await prisma.lastRace.findFirst();

  if (!response?.updated) return;

  const updateRes = updateCheck(response.updated);

  if (!updateRes) return;

  await prisma.lastRace.update({ where: { id: response.id }, data: newData });
};

const updateCheck = (date: Date) => {
  const { year, month, day } = getDate();
  const { year: dyear, month: dmonth, day: dday } = getDate(date);

  if (year > dyear || month > dmonth || day > dday) return true;

  return false;
};

const getDate = (date?: Date) => {
  const newDate = date ? date : new Date();

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  return { year, month, day };
};
