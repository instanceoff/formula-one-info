import { supabase } from '../utils/supabaseClient';
import { getDriversOfTheSeason } from './formulaRequests';

// export const setNewData = async (from: string, data: Object) => {
//   const { error } = await supabase.from(from).insert(data);

//   if (error) console.log('Spabase create error: ', error);
// };

export const updateDrivers = async () => {
  const drivers = await getDriversOfTheSeason();
  const { error } = await supabase.from('drivers').insert(drivers);
  if (error) console.log('Spabase create error: ', error);
};
