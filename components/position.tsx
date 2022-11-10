import Image from 'next/image';
import { IRankingDriver, TeamsColors } from '../pages/api/formulaModels';

interface PositionProps {
  driver: IRankingDriver;
}

const Position: React.FC<PositionProps> = ({ driver }) => {
  const lineColorStyle = {
    backgroundImage:
      'linear-gradient(90deg, rgba(255, 255, 255, 0),' +
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
          className={`flex justify-between items-center w-[1200px] rounded-bl-[550px] rounded-tr-[999px] -z-20`}
          style={lineColorStyle}
        >
          {/* <div className='flex'>
            <div
              className='flex justify-center items-center w-16 h-16 rounded-full rounded-tl-none  outline outline-[#060616] outline-3'
              style={pointsColorStyle}
            >
              <span className='text-black text-2xl'>{driver.points}</span>
            </div>
            <div
              className='flex -ml-6 -z-10 mr-4 rounded-r-full items-center justify-center h-16 text-5xl'
              style={pointsColorStyle}
            >
              <span className='mr-6 ml-9 text-white font-b'>
                {driver.position}
              </span>
            </div> */}
          <div className='flex'>
            <div
              className='flex  rounded-r-[999px] rounded-bl-[200px]'
              style={pointsColorStyle}
            >
              <div className='flex justify-center items-center w-16 h-16 rounded-full rounded-tl-none  outline outline-[#060616] outline-3'>
                <span className='text-black text-2xl'>{driver.points}</span>
              </div>
              <div className='flex mr-4 rounded-r-full items-center justify-center h-16 text-5xl'>
                <span className='mr-6 ml-9 text-white font-b'>
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
              <span className='text-4xl'>{driver.driver.name}</span>
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
