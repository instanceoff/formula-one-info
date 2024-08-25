import {
  IRankingDriver,
  IRespond,
  IRace,
  IDriver,
  IRankingDriverInRace,
} from '../types/formulaModels';

const formulaSiteUrl = `https://media.formula1.com/image/upload/content/dam/fom-website/`;
const helmetRequest = `${formulaSiteUrl}manual/Helmets${new Date().getFullYear()}`;
const carRequest = `${formulaSiteUrl}teams/${new Date().getFullYear()}`;
const requestBase = 'https://v1.formula-1.api-sports.io/';

const myHeaders = new Headers();
myHeaders.append('x-rapidapi-key', process.env.RAPIDAPI_KEY);
myHeaders.append('x-rapidapi-host', 'v1.formula-1.api-sports.io');

const requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  next: {
    revalidate: 86400, // Revalidates once a day
  },
};

const sendGetRequestToApi = async (
  request: string,
  additionalReuqestOptions?: Partial<RequestInit>
) => {
  return fetch(`${requestBase}${request}`, {
    ...requestOptions,
    ...additionalReuqestOptions,
  });
};

export const getRankingBySeason = async (year?: string) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const seasonYear = year ?? currentYear;
  const requestBody = `rankings/drivers?season=${seasonYear}`;
  const res = await sendGetRequestToApi(requestBody);

  const resp: IRespond<IRankingDriver> = await res.json();
  const drivers: IRankingDriver[] = resp.response;

  return drivers;
};

export const getSeasons = async () => {
  const requestBody = `seasons`;
  const res = await sendGetRequestToApi(requestBody);

  const resp: IRespond<number> = await res.json();
  const drivers: number[] = resp.response;

  return drivers;
};

export const getLastCompletedRace = async () => {
  const requestBody = `races?last=2&type=race`;
  const res = await sendGetRequestToApi(requestBody);

  const resp: IRespond<IRace> = await res.json();
  const races: IRace[] = resp.response;
  const isLastRaceCompleted = races[0].status === 'Completed';

  return isLastRaceCompleted ? races[0] : races[1];
};

export const getLastWin = async () => {
  const race = await getLastCompletedRace();
  const raceID = race && race.id;
  const requestBody = `rankings/races?race=${raceID}`;
  const res = await sendGetRequestToApi(requestBody);

  const resp: IRespond<IRankingDriverInRace> = await res.json();
  const driver: IRankingDriverInRace = resp.response[0];

  return { driver, race };
};

export const getDriverHelmetImage = async (driverLastName: string) => {
  const formattedLastName = driverLastName.toLocaleLowerCase();
  const reqUrl = `${helmetRequest}/${formattedLastName}`;

  const res = await fetch(reqUrl, requestOptions);

  return res.status !== 404 ? reqUrl : null;
};

export const getTeamCarImage = async (teamName: string) => {
  const formattedTeamName = teamName.toLocaleLowerCase().split(' ').join('-');
  const reqUrl = `${carRequest}/${formattedTeamName}`;

  const res = await fetch(reqUrl, requestOptions);

  return res.status !== 404 ? reqUrl : null;
};

export const getDriver = async (id: number) => {
  const requestBody = `drivers?id=${id}`;
  const res = await sendGetRequestToApi(requestBody);

  const resp: IRespond<IDriver> = await res.json();
  const driver: IDriver = resp.response[0];

  return driver;
};
