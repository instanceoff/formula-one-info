import Header from '../components/header';
import Standings from '../components/standings';
import LastWinner from '../components/winner';
import { getRankingBySeason, getLastWin } from '../utils/formulaRequests';
import { connectMongo } from '../utils/mongodb';

const Page = async () => {
  connectMongo();

  const drivers = null;
  const winner = null;
  const race = null;

  // const drivers = await getRankingBySeason();
  // const {winner, race} = await getLastWin();
  return (
    <>
      <Header />

      {(drivers && winner && race && (
        <>
          <LastWinner driver={winner} race={race} />
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
