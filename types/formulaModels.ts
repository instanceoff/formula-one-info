export interface IRankingDriver {
  position: number;
  driver: Partial<IDriver>;
  team: Partial<ITeam>;
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

export interface IRaceDriver {
  race: { id: number };
  driver: Partial<IDriver>;
  team: Partial<ITeam>;
  position: number;
  time: string;
  laps: number;
  grid: string;
  pits: number;
  gap?: number;
}

export interface IRace {
  id: number;
  competition: ICompetition;
  circuit: ICircuit;
  season: number;
  type: string;
  laps: ILaps;
  fastest_lap: IFastestLap;
  distance: string;
  timezone: string;
  date: string;
  weather: string;
  status: string;
}

export interface IFastestLap {
  driver?: IDriver;
  time?: string;
}

export interface ILaps {
  current?: number;
  total: number;
}

export interface ICompetition {
  id: number;
  name: string;
  location: string;
}

export interface ILocation {
  country: string;
  city: string;
}

export interface ICircuit {
  id: number;
  name: string;
  image: string;
}

export interface IDriver {
  id: number;
  name: string;
  abbr: string;
  image: string;
  nationality: string;
  country: any;
  birthdate: string;
  birthplace: string;
  number: number;
  grands_prix_entered: string;
  world_championships: string;
  podiums: number;
  highest_race_finish: any;
  highest_grid_position: number;
  career_points: string;
  teams: any[];
}

export interface IRespond<ResponseType> {
  errors: any[];
  get: 'rankings';
  parameters: Object;
  response: ResponseType[];
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
