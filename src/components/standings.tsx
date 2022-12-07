import { IRankingDriver } from '../types/formulaModels';
import Position from './position';

interface StandingsProps {
  drivers: IRankingDriver[];
}

const Standings: React.FC<StandingsProps> = ({ drivers }) => {
  return (
    <>
      <div></div>
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
