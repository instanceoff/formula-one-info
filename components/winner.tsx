import Image from 'next/image';
import { IRaceDriver, IRace, TeamsColors } from '../pages/api/formulaModels';

interface LastWinnerProps {
  driver: IRaceDriver;
  race: IRace;
}

const LastWinner: React.FC<LastWinnerProps> = ({ driver, race }) => {
  const background = {
    backgroundImage: `url(${race.circuit.image})`,
  };
  const backStyle = {
    opacity: 1,
    backgroundImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 2px, transparent 2px, transparent 6px )',
    borderImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.4), rgba(255,255,255, 0.4) 2px, transparent 2px, transparent 6px ) 8 round ',
  };
  const backStyle2 = {
    backgroundImage:
      'linear-gradient(180deg, rgba(255, 255, 255, 0) 10%,  rgba(255, 255, 255, 1))',
  };
  const teamColor = {
    color: TeamsColors.get(driver.team.id),
  };

  return (
    <>
      <div className='w-full max-w-7xl h-1/5 max-h-[20%] mx-auto my-4'>
        <div className='rounded-2xl overflow-clip'>
          <div
            className='flex w-full items-center justify-center rounded-2xl p-2 border-8'
            style={backStyle}
          >
            <span className='absolute self-center justify-self-center text-8xl font-bold text-[#F8D31E]'>
              WINNER
            </span>
            <div className='flex flex-row rounded-2xl justify-between w-full bg-center bg-no-repeat'>
              <div className='flex flex-col justify-between'>
                <div className='flex items-center'>
                  <span className='text-5xl font-semibold border-4 rounded-2xl p-3 mr-2'>
                    {race.competition.name}
                  </span>
                </div>

                <span className='text-6xl font-semibold'>
                  {driver.driver.name.split(' ')[0]}
                  <br />
                  <span className='text-8xl' style={teamColor}>
                    {driver.driver.name.split(' ')[1]}
                  </span>
                </span>
              </div>
              <div>
                <Image
                  src={
                    'https://www.f1fantasytracker.com/Images//Drivers/2021/RussellFull.png'
                  }
                  alt={''}
                  width={270}
                  height={270}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastWinner;
