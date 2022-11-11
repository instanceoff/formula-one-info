import { IRankingDriver, IRespond } from './formulaModels';

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

  const resp: IRespond = await res.json();
  const drivers: IRankingDriver[] = resp.response;

  return drivers;
};
