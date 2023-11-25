'use client';

import {
  Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { Database } from '../../types/supabase';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function Navigation({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <nav className="mx-auto max-w-screen-xl py-4 flex justify-between align-middle px-8">
      <div className="flex justify-center">
        <Link href="/" className="text-xl font-semibold">
          MeetMate.
        </Link>
      </div>
      {session?.user != null && <Button onClick={signOut}>Sign Out</Button>}
    </nav>
  );
}
