import { Suspense } from 'react';
import Header from '../components/header';
import Standings from '../components/standings';
import LastWinner from '../components/winner';
import { getRankingBySeason, getLastWin } from '../utils/formulaRequests';
// import { connectMongo } from '../utils/mongodb';
import {
  getDatabaseLastRacePrisma,
  getDatabaseLastWinnerPrisma,
  getDatabaseRankingDriversPrisma,
  prisma,
  updateDatabaseRankigDrivers,
} from '../utils/prisma';
import Loading from './loading';

const Page = async () => {
  const driversRes = getRankingBySeason();
  const lastWinRes = getLastWin();

  const [drivers, { driver, race }] = await Promise.all([
    driversRes,
    lastWinRes,
  ]);

  return (
    <>
      <Header />

      <Suspense fallback={<Loading />}>
        {(drivers && driver && race && (
          <>
            <LastWinner driver={driver} race={race} />
            <Standings drivers={drivers} />
          </>
        )) || (
          <div className='m-auto w-full h-full'>
            <h1 className='w-fit m-auto text-6xl'>
              Sorry, site is out of requests amount ;)
            </h1>
          </div>
        )}
      </Suspense>
    </>
  );
};

export default Page;
