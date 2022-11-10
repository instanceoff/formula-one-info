export interface IRankingDriver {
  position: number;
  driver: IDriver;
  team: ITeam;
  points: number;
  wins: number;
  behind: number;
  season: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

export interface IDriver {
  id: number;
  name: string;
  abbr: string;
  number: number;
  image: string;
}

export interface IRespond {
  errors: any[];
  get: 'rankings';
  parameters: Object;
  response: IRankingDriver[];
  results: number;
}

export enum ETeamsColors {
  'f1' = '#3671C6',
  'f2' = '#F58020',
  'f3' = '#F91536',
  'f5' = '#6CD3BF',
  'f13' = '#6CD3BF',
  'f18' = '#C92D4B',
  'f12' = '#37BEDD',
  'f14' = '#B6BABD',
  'f7' = '#5E8FAA',
  'f17' = '#358C75',
}

export const TeamsColors = new Map([
  [1, '#3671C6'],
  [2, '#F58020'],
  [3, '#F91536'],
  [5, '#6CD3BF'],
  [13, '#6CD3BF'],
  [18, '#C92D4B'],
  [12, '#37BEDD'],
  [14, '#B6BABD'],
  [7, '#5E8FAA'],
  [17, '#358C75'],
]);
