import { Suspense } from 'react';
import Standings from '@components/standings';
import { getRankingBySeason } from '@utils/formulaRequests';
import Loading from '../../../loading';

interface RankingsDriversProps {}

const RankingsDrivers = async ({ params }: { params: { season: string } }) => {
  const drivers = await getRankingBySeason(params.season);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {(drivers && <Standings drivers={drivers} />) || (
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

export default RankingsDrivers;
