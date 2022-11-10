import { IRankingDriver } from '../pages/api/formulaModels';
import Position from './position';

interface StandingsProps {
  drivers: IRankingDriver[];
}

const Standings: React.FC<StandingsProps> = ({ drivers }) => {
  return (
    <>
      <div className='flex flex-col gap-3'>
        {drivers.map((driver, i) => {
          if (i >= 20) return;
          return <Position key={driver.driver.id} driver={driver} />;
        })}
      </div>
    </>
  );
};

export default Standings;
