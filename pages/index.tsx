import Standings from '../components/standings';
import { GetServerSideProps } from 'next';
import { IRankingDriver, IRespond } from '../pages/api/formulaModels';
import Header from '../components/header';
// import * as dotenv from 'dotenv';
// dotenv.config();

export const getServerSideProps: GetServerSideProps = async () => {
  let loading = true;
  var myHeaders = new Headers();

  myHeaders.append('x-rapidapi-key', process.env.RAPIDAPI_KEY);
  myHeaders.append('x-rapidapi-host', 'v1.formula-1.api-sports.io');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const res = await fetch(
    'https://v1.formula-1.api-sports.io/rankings/drivers?season=2022',
    requestOptions as RequestInit
  );
  const resp: IRespond = await res.json();
  const drivers: IRankingDriver[] = resp.response;
  loading = false;
  return {
    props: { drivers, loading }, // will be passed to the page component as props
  };
};

const Home = ({
  drivers = [],
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
