import Image from 'next/image';
import { CSSProperties } from 'react';
import { IRaceDriver, IRace, TeamsColors } from '../types/formulaModels';

interface LastWinnerProps {
  driver: IRaceDriver;
  race: IRace;
}

const LastWinner: React.FC<LastWinnerProps> = ({ driver, race }) => {
  const backStyle = {
    opacity: 1,
    backgroundImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 2px, transparent 2px, transparent 6px )',
    borderImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.4), rgba(255,255,255, 0.4) 2px, transparent 2px, transparent 6px ) 8 repeat ',
  };

  const backStyle2: CSSProperties = {
    backgroundImage: 'url("/images/brazil.svg")',
  };

  const teamColor = {
    color: TeamsColors.get(driver.team.id!),
  };

  return (
    <>
      <div className='w-full max-w-7xl h-1/5 max-h-[20%] mx-auto my-4'>
        <div className='rounded-2xl overflow-clip'>
          <div
            className='flex w-full items-center justify-center rounded-2xl p-2 border-8'
            style={backStyle}
          >
            <div className='flex flex-row items-center rounded-2xl w-full h-full bg-center'>
              <div className='flex w-fit flex-col justify-end'>
                <Image
                  className=''
                  src={`https://www.f1fantasytracker.com/Images//Drivers/2021/${
                    driver.driver.name!.split(' ')[1]
                  }Full.png`}
                  alt={''}
                  width={350}
                  height={385}
                />
                <span className='absolute text-5xl justify-self-end p-2 bg-[#060616] bg-opacity-80 rounded-2xl'>
                  {driver.driver.name!.split(' ')[0]}
                  <br />
                  <span className='text-7xl font-semibold' style={teamColor}>
                    {driver.driver.name!.split(' ')[1]}
                  </span>
                </span>
              </div>

              <span
                className='w-full h-full py-20 bg-contain bg-no-repeat bg-center flex m-auto flex-col items-center font-bold text-[#F8D31E] '
                style={backStyle2}
              >
                <span className='flex text-6xl font-semibold border-4 rounded-2xl p-3 text-white bg-[#060616]'>
                  {race.competition.name}
                </span>
                <span className='text-9xl'>WINNER</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastWinner;
