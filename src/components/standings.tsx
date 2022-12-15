import { Suspense } from 'react';
import { IRankingDriver } from '../types/formulaModels';
import DriverDropdown from './driverDropdown';
import DirverDropdown from './driverDropdown';
import Dropdown, { DropdownButton, DropdownContent } from './dropdown';
import Position from './position';

interface StandingsProps {
  drivers: IRankingDriver[];
}

const Standings: React.FC<StandingsProps> = ({ drivers }) => {
  return (
    <>
      <div className='flex max-w-7xl m-auto flex-col gap-3'>
        {drivers.map((driver, i) => {
          if (i >= 20) return;
          return <Position key={driver.driver.id} driver={driver} />;
        })}
      </div>
    </>
  );
};

export default Standings;

{
  /* <Dropdown key={driver.driver.id}>
<DropdownButton>
  <Position driver={driver} />
</DropdownButton>
<DropdownContent>
  <DriverDropdown
    driverID={driver.driver.id}
  />
</DropdownContent>
</Dropdown> */
}
