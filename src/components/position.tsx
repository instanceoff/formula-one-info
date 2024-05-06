import Image from 'next/image';
import { CSSProperties } from 'react';
import { IRankingDriver, TeamsColors } from '../types/formulaModels';
import { getDriverHelmetImage } from '@utils/formulaRequests';
interface PositionProps {
  driver: IRankingDriver;
}

const Position = ({ driver }: PositionProps) => {
  const driverTeamColor = 'to-' + TeamsColors.get(driver.team.id);
  const helmetImageUrl = getDriverHelmetImage(driver.driver.name.split(' ')[1]);

  const pointsColors: { [position: number]: string } = {
    1: 'bg-firstPlace',
    2: 'bg-secondPlace',
    3: 'bg-thirdPlace',
  };

  return (
    <>
      <div className='flex text-[#F2F2F2] w-full h-full items-center justify-center'>
        <div
          className={`flex bg-diagonalLines justify-between items-center w-full rounded-bl-[550px] rounded-tr-[999px] -z-20`}
        >
          <div
            className={`flex justify-between items-center w-full rounded-bl-[550px] rounded-tr-[999px] -z-20 bg-gradient-to-r from-transparent ${driverTeamColor}`}
          >
            <div className='flex'>
              <div
                className={`flex w-36 mr-4 justify-between rounded-r-[999px] rounded-bl-[800px] ${
                  pointsColors[driver.position] || 'bg-[#f2f2f2]'
                }`}
              >
                <div className='flex flex-col text-black  w-16 h-16 rounded-full rounded-tl-none outline outline-[#060616] outline-3'>
                  <span className='absolute z-10 px-[0.12rem] text-xs font-bold'>
                    PTS
                  </span>
                  <span className='m-auto text-2xl font-semibold'>
                    {driver.points || 0}
                  </span>
                </div>
                <div className='flex mx-auto rounded-r-full items-center justify-center h-16 text-4xl'>
                  <span className='mx-auto pt-1 text-white text-5xl font-bold text-stroke-2'>
                    {driver.position}
                  </span>
                </div>
              </div>
              <div className='flex items-center'>
                {(
                  <Image
                    className='mr-4 overflow-hidden hidden md:inline '
                    src={helmetImageUrl}
                    alt={'Helmet'}
                    width='92'
                    height='90'
                  />
                ) || (
                  <Image
                    className='mr-4 overflow-hidden hidden md:inline '
                    src={driver.driver.image}
                    alt={'Helmet'}
                    width='62'
                    height='60'
                  />
                )}
                <span className='text-4xl font-semibold'>
                  {driver.driver.name}
                </span>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-2xl hidden xl:inline'>
                {driver.team.name}
              </span>
              <Image
                className='hidden md:inline'
                src={`/images/car${driver.team.id}.png`}
                alt={''}
                width='250'
                height='0'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
