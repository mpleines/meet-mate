import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import CreateForm from './CreateForm';
import { cookies } from 'next/headers';

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <CreateForm userId={user!.id} />;
}
