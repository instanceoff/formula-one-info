import Standings from '../components/standings';
import { GetServerSideProps } from 'next';
import {
  IRaceDriver,
  IRankingDriver,
  IRespond,
  IRace,
} from '../pages/api/formulaModels';
import Header from '../components/header';
import {
  getLastRace,
  getLastWinner,
  getRankingBySeason,
} from './api/formulaRequests';
import LastWinner from '../components/winner';

export const getServerSideProps: GetServerSideProps = async () => {
  let loading = true;
  const drivers = await getRankingBySeason();
  const winner = await getLastWinner();
  const race = await getLastRace();
  loading = false;
  return {
    props: { winner, race, drivers, loading }, // will be passed to the page component as props
  };
};

const Home = ({
  winner,
  race,
  drivers,
  loading,
}: {
  winner: IRaceDriver;
  race: IRace;
  drivers: IRankingDriver[];
  loading: boolean;
}) => {
  return (
    <>
      <Header />

      {!loading && (
        <>
          <LastWinner driver={winner} race={race} />
          <Standings drivers={drivers} />
        </>
      )}
    </>
  );
};

export default Home;
