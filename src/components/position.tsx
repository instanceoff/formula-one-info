import Image from 'next/image';
import { IRankingDriver, TeamNamesForImage } from '../types/formulaModels';
import { getDriverHelmetImage, getTeamCarImage } from '@utils/formulaRequests';
import { use } from 'react';
import plainHelmet from '../../public/plain-helmet.svg';
interface PositionProps {
  driver: IRankingDriver;
}

const Position = ({
  driver: { driver, team, points, position },
}: PositionProps) => {
  const teamColor = team.id;

  const DriverResults = () => {
    const pointsColors = new Map([
      [1, 'bg-firstPlace'],
      [2, 'bg-secondPlace'],
      [3, 'bg-thirdPlace'],
    ]);
    const pointsColor = pointsColors.get(position) || 'bg-place';
    return (
      <div
        className={`flex w-36 mr-4 md:mr-0 rounded-r-full rounded-bl-full ${pointsColor}`}
      >
        <div className='relative w-1/2 pb-1/2 text-mainAccent rounded-full rounded-tl-none outline outline-mainAccent outline-3'>
          <div className='absolute flex px-0.5 w-full h-full'>
            <span className='absolute text-xs font-bold'>PTS</span>
            <span className='m-auto text-2xl font-semibold'>{points || 0}</span>
          </div>
        </div>
        <span className='m-auto text-white text-5xl font-bold text-stroke-2'>
          {position}
        </span>
      </div>
    );
  };

  const DriverInfo = () => {
    const lastName = driver.name.split(' ')[1];
    const helmetImage = use(getDriverHelmetImage(lastName));
    const helmetImageProperties = helmetImage
      ? {
          src: helmetImage,
          width: 92,
          height: 90,
        }
      : { src: plainHelmet, width: 62, height: 60 };

    return (
      <div className='flex items-center'>
        <Image
          className={`hidden md:inline ${
            helmetImage || 'mr-2'
          } lg:max-h-full max-h-8`}
          alt={'Driver Image'}
          {...helmetImageProperties}
        />
        <span className='text-4xl font-semibold'>{driver.name}</span>
      </div>
    );
  };

  const DriverTeamInfo = () => {
    const teamName = TeamNamesForImage.get(team.id);
    const image = teamName ? use(getTeamCarImage(teamName)) : team.logo;

    return (
      <>
        <div className='flex items-center mr-4'>
          <span className='text-2xl hidden xl:inline'>{team.name}</span>
          {image && (
            <Image
              className='hidden md:inline'
              src={image}
              alt={''}
              width='170'
              height='0'
            />
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={`text-gray-200 bg-diagonalLines rounded-bl-full rounded-tr-full`}
      >
        <div
          className={`flex w-full rounded-tr-full bg-gradient-to-r from-transparent to-formula-${teamColor}`}
        >
          <DriverResults />
          <div className='flex w-full justify-between'>
            <DriverInfo />
            <DriverTeamInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
