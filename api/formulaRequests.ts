import { IRankingDriver, IRespond, IRace, IRaceDriver } from './formulaModels';

var myHeaders = new Headers();

myHeaders.append('x-rapidapi-key', process.env.RAPIDAPI_KEY);
myHeaders.append('x-rapidapi-host', 'v1.formula-1.api-sports.io');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const getRankingBySeason = async (year?: string) => {
  const curYear = year ?? new Date().getFullYear();

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

export const getLastWinner = async () => {
  const lastRace = await getLastRace();

  const lastRaceID = lastRace && lastRace.id;

  const res = await fetch(
    `https://v1.formula-1.api-sports.io/rankings/races?race=${lastRaceID}`,
    requestOptions as RequestInit
  );

  const resp: IRespond<IRaceDriver> = await res.json();
  const driver: IRaceDriver = resp.response[0];

  return driver;
};
