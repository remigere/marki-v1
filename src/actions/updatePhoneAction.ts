import updatePhone from '@/actions/updatePhone';
import { PostgrestError } from '@supabase/supabase-js';

export const updatePhoneAction = async (userId: string, phoneNumber: string): Promise<(PostgrestError | null | undefined)[]> => {
    return await updatePhone(userId, phoneNumber);
};