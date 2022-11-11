import Image from 'next/image';
import { IRankingDriver, TeamsColors } from '../pages/api/formulaModels';

interface PositionProps {
  driver: IRankingDriver;
}

const Position: React.FC<PositionProps> = ({ driver }) => {
  const lineColorStyle = {
    backgroundImage:
      'linear-gradient(90deg, rgba(255, 255, 255, 0) 10%,' +
      TeamsColors.get(driver.team.id) +
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

  return (
    <>
      <div className='flex text-[#F2F2F2] w-full h-full items-center justify-center'>
        <div
          className={`flex justify-between items-center w-full rounded-bl-[550px] rounded-tr-[999px] -z-20`}
          style={lineColorStyle}
        >
          <div className='flex'>
            <div
              className='flex w-36 mr-4 justify-between rounded-r-[999px] rounded-bl-[800px]'
              style={pointsColorStyle}
            >
              <div className='flex flex-col text-black  w-16 h-16 rounded-full rounded-tl-none  outline outline-[#060616] outline-3'>
                <span className='absolute z-10 px-[0.12rem] text-xs font-bold'>
                  PTS
                </span>
                <span className='m-auto text-2xl font-semibold'>
                  {driver.points}
                </span>
              </div>
              <div className='flex mx-auto rounded-r-full items-center justify-center h-16 text-4xl'>
                <span className='mx-auto pt-1 text-black text-5xl font-bold'>
                  {driver.position}
                </span>
              </div>
            </div>
            <div className='flex items-center'>
              <Image
                className='mr-4'
                src={`/images/helmet${driver.driver.id}.png`}
                alt={'Helmet'}
                width='62'
                height='60'
              />
              <span className='text-4xl font-semibold'>
                {driver.driver.name}
              </span>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='text-2xl'>{driver.team.name}</span>
            <Image
              src={`/images/car${driver.team.id}.png`}
              alt={''}
              width='250'
              height='0'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
