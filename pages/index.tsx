import Standings from '../components/standings';
import { GetServerSideProps } from 'next';
import { IRankingDriver, IRespond } from '../pages/api/formulaModels';
import Header from '../components/header';
import { getRankingBySeason } from './api/formulaRequests';

export const getServerSideProps: GetServerSideProps = async () => {
  let loading = true;
  const drivers = await getRankingBySeason();
  loading = false;
  return {
    props: { drivers, loading }, // will be passed to the page component as props
  };
};

const Home = ({
  drivers,
  loading,
}: {
  drivers: IRankingDriver[];
  loading: boolean;
}) => {
  return (
    <>
      <Header />
      {!loading && <Standings drivers={drivers} />}
    </>
  );
};

export default Home;
