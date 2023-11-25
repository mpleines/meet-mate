import { supabase } from '@/supabaseClient';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../../types/supabase';
import EventTile from '@/components/EventTile';
import Searchbar from '@/components/Searchbar';
import Link from 'next/link';
import ButtonLink from '@/components/ButtonLink';

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const query = searchParams?.query;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: events, error } = query
    ? await supabase
        .from('events')
        .select()
        .ilike('title', '%' + query + '%')
    : await supabase.from('events').select();

  return (
    <main className="flex flex-col">
      <h1 className="text-3xl">Your Events</h1>
      <div className="mt-4 flex gap-4 flex-wrap">
        <div className="flex-1">
          <Searchbar />
        </div>
        <ButtonLink href="/events/create">Create Event</ButtonLink>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {events?.map((event) => (
          <EventTile key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
