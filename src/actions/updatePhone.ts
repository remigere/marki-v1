'use server';

import { createClient } from '../../utils/supabase/server';
import { error } from 'console';


const updatePhone = async (userId: string, phoneNumber: string) => {
  const supabase = await createClient();

  // Update the user record
  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_phone_number',
    {
      user_id: userId,
      new_phone_number: phoneNumber,
    }
  );

  return [formResponse, formError];
};

export default updatePhone;