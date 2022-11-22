import {
  IRankingDriver,
  IRespond,
  IRace,
  IDriver,
  IRaceDriver,
} from '../types/formulaModels';

var myHeaders = new Headers();

myHeaders.append('x-rapidapi-key', process.env.NEXT_PUBLIC_RAPIDAPI_KEY);
myHeaders.append('x-rapidapi-host', 'v1.formula-1.api-sports.io');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const getRankingBySeason = async (year?: string) => {
  const date = new Date();
  const curYear = year ?? date.getFullYear();

  const res = await fetch(
    `https://v1.formula-1.api-sports.io/rankings/drivers?season=${curYear}`,
    requestOptions as RequestInit
  );

  const resp: IRespond<IRankingDriver> = await res.json();
  const drivers: IRankingDriver[] = resp.response;

  return drivers;
};

export const getLastRace = async () => {
  const res = await fetch(
    `https://v1.formula-1.api-sports.io/races?last=1&type=race`,
    requestOptions as RequestInit
  );

  const resp: IRespond<IRace> = await res.json();
  const race: IRace = resp.response[0];

  return race;
};

export const getLastWin = async () => {
  const race = await getLastRace();

  const raceID = race && race.id;

  const res = await fetch(
    `https://v1.formula-1.api-sports.io/rankings/races?race=${raceID}`,
    requestOptions as RequestInit
  );

  const resp: IRespond<IRaceDriver> = await res.json();
  const driver: IRaceDriver = resp.response[0];

  return { driver, race };
};

export const getDriver = async (id: number) => {
  const res = await fetch(
    `https://v1.formula-1.api-sports.io/drivers?id=${id}`,
    requestOptions as RequestInit
  );

  const resp: IRespond<IDriver> = await res.json();
  const driver: IDriver = resp.response[0];

  return driver;
};
