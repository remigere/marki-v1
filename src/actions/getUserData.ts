import { Users } from '../libs/supabase/app';
import { createClient } from '../../utils/supabase/server';

const getUserData = async (): Promise<Users | null> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('NO USER', user);
    return null;
  }

  let { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id);

  console.log(users);
  console.log("auth user", user.id);

  if (error) {
    console.log(error);
    return null;
  }

  return users ? users[0] : null;
};

const updateUserData = async (updatedData: Users): Promise<Users | null> => {
  const supabase = await createClient();

  const { data: updatedUser, error } = await supabase
    .from('users')
    .update(updatedData)
    .eq('id', updatedData.id)
    .single();

  if (error) {
    console.log(error);
    return null;
  }

  return updatedUser;
};

export { getUserData, updateUserData };