import {
  IRankingDriver,
  IRespond,
  IRace,
  IDriver,
  IRaceDriver,
} from '../types/formulaModels';
import { supabase } from './supabaseClient';

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

  const { data, error } = await supabase
    .from('saves')
    .select('savedData,created_at')
    .eq('id', 'rankings/drivers');

  const res =
    data ??
    (await fetch(
      `https://v1.formula-1.api-sports.io/rankings/drivers?season=${curYear}`,
      requestOptions as RequestInit
    ));

  if (res instanceof Response) {
  }

  // const res = await fetch(
  //   `https://v1.formula-1.api-sports.io/rankings/drivers?season=${curYear}`,
  //   requestOptions as RequestInit
  // );

  const resp: IRespond<IRankingDriver> =
    res == data
      ? await data[0].savedData.json()
      : res instanceof Response
      ? await res.json()
      : null;
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

export const getDriver = async (id: number) => {
  const res = await fetch(
    `https://v1.formula-1.api-sports.io/drivers?id=${id}`,
    requestOptions as RequestInit
  );

  const resp: IRespond<IDriver> = await res.json();
  const driver: IDriver = resp.response[0];

  return driver;
};

// export const getDriversOfTheSeason = async () => {
//   const drivers = await getRankingBySeason();

//   const fullDrivers: IDriver[] = [];

//   for (let driver of drivers) {
//     const res = await getDriver(driver.driver.id!);
//     fullDrivers.push(res);
//   }

//   return fullDrivers;
// };
