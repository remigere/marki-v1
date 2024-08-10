import { NextResponse } from 'next/server';
import { createClient } from '@/libs/supabase/server';

export async function GET() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('subscriptions')
    .select("customer_id")
    .eq('user_id', user.id)
    .single();
// console.log(data)
// console.log(user.id)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ customer_id: data.customer_id });
}
