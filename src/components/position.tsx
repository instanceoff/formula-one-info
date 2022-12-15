import Image from 'next/image';
import { CSSProperties } from 'react';
import { IRankingDriver, TeamsColors } from '../types/formulaModels';
interface PositionProps {
  driver: IRankingDriver;
}

const Position: React.FC<PositionProps> = ({ driver }) => {
  const lineColorStyle: CSSProperties = {
    backgroundImage:
      'linear-gradient(90deg, rgba(255, 255, 255, 0) 10%,' +
      TeamsColors.get(driver.team.id!) +
      ')',
  };

  const pointsColorStyle = {
    backgroundColor: `${
      (driver.position == 1 && '#F8D31E') ||
      (driver.position == 2 && '#d3d3d3') ||
      (driver.position == 3 && '#e88109') ||
      '#f2f2f2'
    }`,
  };

  const backStyle = {
    opacity: 1,
    backgroundImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 2px, transparent 2px, transparent 6px )',
  };

  const helmetImage = `/images/helmet${driver.driver.id}.png`;

  return (
    <>
      <div className='flex text-[#F2F2F2] w-full h-full items-center justify-center'>
        <div
          className={`flex justify-between items-center w-full rounded-bl-[550px] rounded-tr-[999px] -z-20`}
          style={backStyle}
        >
          <div
            style={lineColorStyle}
            className={`flex testik justify-between items-center w-full rounded-bl-[550px] rounded-tr-[999px] -z-20`}
          >
            <div className='flex'>
              <div
                className='flex w-36 mr-4 justify-between rounded-r-[999px] rounded-bl-[800px]'
                style={pointsColorStyle}
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
                    src={helmetImage}
                    alt={'Helmet'}
                    width='62'
                    height='60'
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
