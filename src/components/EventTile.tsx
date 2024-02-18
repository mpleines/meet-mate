import Link from 'next/link';
import { Database } from '../../types/supabase';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type Event = Database['public']['Tables']['events']['Row'];

type EventTileProps = {
  event: Event;
};

export default function EventTile({ event }: EventTileProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Available days: {event.weekdays?.join(', ')}</p>
        </CardContent>
        <CardFooter>
          <p>{event.duration} mins</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
