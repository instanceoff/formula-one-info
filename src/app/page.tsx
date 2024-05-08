import { Suspense } from 'react';
import Standings from '@components/standings';
import LastWinner from '@components/winner';
import { getRankingBySeason, getLastWin } from '@utils/formulaRequests';
import Loading from './loading';
import Head from 'next/head';

const Page = async () => {
  const driversRes = getRankingBySeason();
  const lastWinRes = getLastWin();

  const responses = await Promise.all([driversRes, lastWinRes]);

  const [drivers, { driver, race }] = responses;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <LastWinner driver={driver} race={race} />
        {(responses && <Standings drivers={drivers} />) || (
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
