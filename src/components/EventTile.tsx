'use client';

import Link from 'next/link';
import { Database } from '../../types/supabase';

type Event = Database['public']['Tables']['events']['Row'];

type EventTileProps = {
  event: Event;
};

export default function EventTile({ event }: EventTileProps) {
  return (
    <div className="rounded-md px-6 py-4 bg-background outline outline-1 outline-muted hover:outline hover:outline-1 hover:bg-muted">
      <Link className="" href={`/events/${event.id}`}>
        <h2 className="text-l font-semibold">{event.title}</h2>
        <div className="mt-6">
          <p className="text-sm">{event.description}</p>
          <p className="text-sm text-gray-400">{event.duration} mins</p>
        </div>
      </Link>
    </div>
  );
}
