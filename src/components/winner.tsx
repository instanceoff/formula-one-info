import Image from 'next/image';
import { CSSProperties } from 'react';
import { IRankingDriverInRace, IRace, TeamNames } from '../types/formulaModels';

interface LastWinnerProps {
  driver: IRankingDriverInRace;
  race: IRace;
}

const LastWinner: React.FC<LastWinnerProps> = ({
  driver: { driver, team },
  race,
}) => {
  const backStyle: CSSProperties = {
    backgroundImage: 'url("/images/brazil.svg")',
  };

  const textWithTeamColor = 'text-' + TeamNames.get(team.id);

  return (
    <>
      <div className='w-full max-w-7xl h-1/5 max-h-[20%] mx-auto my-4'>
        <div className='flex bg-diagonalLines rounded-2xl w-full items-center justify-center p-2 '>
          <div className='flex flex-row items-center rounded-2xl w-full '>
            <div className='flex -mb-2 w-fit flex-col justify-end'>
              <Image
                className=''
                src={`https://res.cloudinary.com/f1-tracker/image/upload/f_auto/v1618736029/FullBody/${
                  driver.name!.split(' ')[1]
                }Full.png`}
                alt={''}
                width={350}
                height={385}
              />
              <span className='absolute text-5xl justify-self-end p-2 mb-2 bg-[#060616] bg-opacity-80 rounded-2xl'>
                {driver.name!.split(' ')[0]}
                <br />
                <span className={`text-7xl font-semibold ${textWithTeamColor}`}>
                  {driver.name!.split(' ')[1]}
                </span>
              </span>
            </div>

            <span
              className='w-full h-full py-20 bg-contain bg-no-repeat bg-center flex m-auto flex-col items-center font-bold text-[#F8D31E] '
              style={backStyle}
            >
              <span className='flex text-6xl font-semibold border-4 rounded-2xl p-3 text-white bg-[#060616]'>
                {race.competition.name}
              </span>
              <span className='text-9xl'>WINNER</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastWinner;
