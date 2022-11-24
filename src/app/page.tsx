import Header from '../components/header';
import Standings from '../components/standings';
import LastWinner from '../components/winner';
import { getRankingBySeason, getLastWin } from '../utils/formulaRequests';
// import { connectMongo } from '../utils/mongodb';
import {
  getLastRacePrisma,
  getLastWinnerPrisma,
  getRankingDriversPrisma,
  prisma,
} from '../utils/prisma';

const Page = async () => {
  // connectMongo();

  await prisma.$connect();

  // const drivers = null;
  // const winner = null;
  // const race = null;

  // const drivers = await getRankingBySeason();
  // const { driver, race } = await getLastWin();

  const drivers = await getRankingDriversPrisma();
  const driver = await getLastWinnerPrisma();
  const race = await getLastRacePrisma();
  return (
    <>
      <Header />

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
    </>
  );
};

export default Page;
