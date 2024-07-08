export interface IRankingDriver {
  position: number;
  driver: {
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  wins?: number;
  behind?: number;
  season: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

export interface IRankingDriverInRace {
  race: { id: number };
  driver: {
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  team: ITeam;
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
  weather?: string;
  status: string;
}

export interface IFastestLap {
  driver: IDriver;
  time: string;
}

export interface ILaps {
  current?: number;
  total: number;
}

export interface ICompetition {
  id: number;
  name: string;
  location: { country: string; city: string };
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
  country: { name: string; code: string };
  birthdate: string;
  birthplace: string;
  number: number;
  grands_prix_entered: string;
  world_championships: string;
  podiums: number;
  highest_race_finish: { position: number; number: number };
  highest_grid_position: number;
  career_points: string;
  teams: { season: number; team: ITeam }[];
}

export interface IRespond<ResponseType> {
  errors: any[];
  get: string;
  parameters: Object;
  response: ResponseType[];
  results: number;
}
export interface IMongoDataType<ResponseType> {
  updated?: string;
  data: ResponseType[];
}

export const TeamIds = [1, 2, 3, 5, 13, 8, 12, 14, 7, 17];

export const TeamNamesForImage = new Map([
  [1, 'Red Bull Racing'],
  [2, 'McLaren'],
  [3, 'Ferrari'],
  [5, 'Mercedes'],
  [13, 'Alpine'],
  [8, 'Kick Sauber'],
  [12, 'Williams'],
  [14, 'Haas'],
  [7, 'RB'],
  [17, 'Aston Martin'],
]);
