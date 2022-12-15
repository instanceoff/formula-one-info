import { IDriver, TeamsColors } from '../types/formulaModels';
import Image from 'next/image';
import * as Icons from '@utils/iconsLIb';
import { Suspense, use } from 'react';
import { getDriver } from '@utils/formulaRequests';

interface DriverDropdownProps {
  driverID: number;
}

/* @ts-expect-error Server Component */
const DriverDropdown: React.FC<DriverDropdownProps> = async ({ driverID }) => {
  const driver = await getDriver(driverID);

  const backStyle = {
    backgroundImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 2px, transparent 2px, transparent 6px )',
  };

  const lineColorStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, ${
      TeamsColors.get(driver.teams[0].team.id) || 'rgba(255, 255, 255, 0)'
    } )`,
  };

  const borderStyle = {
    borderImage:
      'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.4), rgba(255,255,255, 0.4) 2px, transparent 2px, transparent 6px ) 8 repeat ',
  };

  return (
    <>
      <div className='max-w-7xl max-h-72 mx-auto' style={backStyle}>
        <div className='' style={lineColorStyle}>
          <div className='flex flex-row px-5'>
            <div className='mr-14'>
              <Image
                className=''
                src={`https://www.f1fantasytracker.com/Images//Drivers/2021/${
                  driver.name.split(' ')[1] || 'Sainz'
                }Full.png`}
                alt={''}
                width={200}
                height={288}
              />
            </div>
            <div className='flex flex-col w-full'>
              <div className='my-auto h-fit '>
                <div className='flex flex-row items-center'>
                  <div className='flex flex-row '>
                    <div
                      className='flex flex-col justify-between rounded-2xl border-8 p-4 mr-4 font-semibold text-xl'
                      style={borderStyle}
                    >
                      <p className='flex flex-row whitespace-nowrap'>
                        <span className='mr-2'>{Icons.trophy}</span>{' '}
                        {driver.world_championships || 0 + ' '}
                        Championships
                      </p>
                      <p className='flex flex-row'>
                        <span className='mr-2'>{Icons.circle}</span>{' '}
                        {driver.grands_prix_entered || 0 + ' '} Grand Prixes
                      </p>
                      <p className='flex flex-row'>
                        <span className='mr-2'>{Icons.finishFlag}</span>{' '}
                        {driver.podiums || 0 + ' '}
                        Podiums
                      </p>
                    </div>

                    <div
                      className='flex flex-col rounded-2xl border-8 p-4 mr-4 font-semibold text-xl'
                      style={borderStyle}
                    >
                      <p className='flex flex-row'>
                        <span className='mr-2'>{Icons.birthDate}</span>
                        {driver.birthdate || 0}
                      </p>
                      <p className='flex flex-row '>
                        <span className='mr-2'>{Icons.location}</span>{' '}
                        {driver.birthplace || 0}
                      </p>
                      <p className='flex flex-row '>
                        <span className='mr-2'>{Icons.flag}</span>{' '}
                        {driver.nationality || 0}
                      </p>
                    </div>
                  </div>
                  <div className='mx-auto'>
                    <p className='font-bold text-9xl'>{driver.abbr}</p>
                  </div>
                </div>
                {/* <div
                  className='flex flex-row rounded-2xl border-8 p-4'
                  style={borderStyle}
                >
                  <div className='flex  mr-4'>
                    <p className='w-fit h-fit text-lg -rotate-90'>2022</p>
                    <p className='text-yellow-400  text-3xl font-semibold'>
                      Alpine F1 Team
                    </p>
                  </div>
                  <div className='flex  mr-4'>
                    <p className='w-fit h-fit text-lg -rotate-90'>2022</p>
                    <p className='text-yellow-400  text-3xl font-semibold'>
                      Alpine F1 Team
                    </p>
                  </div>
                  <div className='flex  mr-4'>
                    <p className='w-fit h-fit text-lg -rotate-90'>2022</p>
                    <p className='text-yellow-400  text-3xl font-semibold'>
                      Alpine F1 Team
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverDropdown;
