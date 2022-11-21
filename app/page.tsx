import Header from '../components/header';
import Standings from '../components/standings';
import LastWinner from '../components/winner';
import {
  getRankingBySeason,
  getLastWinner,
  getLastRace,
} from '../utils/formulaRequests';

const Page = async () => {
  const drivers = null;
  const winner = null;
  const race = null;
  // const drivers = await getRankingBySeason();
  // const winner = await getLastWinner();
  // const race = await getLastRace();
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
