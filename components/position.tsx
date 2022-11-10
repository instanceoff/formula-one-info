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
      <div className='flex w-full h-full items-center justify-center'>
        <div
          className={`flex  justify-between items-center w-[1280px] rounded-bl-[550px] rounded-tr-[999px] -z-20`}
          style={lineColorStyle}
        >
          <div className='flex'>
            <div
              className='flex w-32 mr-4 justify-between rounded-r-[999px] rounded-bl-[800px]'
              style={pointsColorStyle}
            >
              <div className='flex justify-center items-center w-16 h-16 rounded-full rounded-tl-none  outline outline-[#060616] outline-3'>
                <span className='text-black text-2xl'>{driver.points}</span>
              </div>
              <div className='flex mr-3 w-14 rounded-r-full items-center justify-center h-16 text-4xl'>
                <span className='mx-auto text-black font-b'>
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
