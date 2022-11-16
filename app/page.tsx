import Header from '../components/header';
import Standings from '../components/standings';
import LastWinner from '../components/winner';
import {
  getRankingBySeason,
  getLastWinner,
  getLastRace,
} from '../api/formulaRequests';

const Page = async () => {
  const drivers = await getRankingBySeason();
  const winner = await getLastWinner();
  const race = await getLastRace();
  return (
    <>
      <Header />

      {drivers && winner && race && (
        <>
          <LastWinner driver={winner} race={race} />
          <Standings drivers={drivers} />
        </>
      )}
    </>
  );
};

export default Page;
