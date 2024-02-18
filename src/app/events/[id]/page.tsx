import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../../../types/supabase';
import { cookies } from 'next/headers';
import EventActions from '@/components/EventActions';
import { FormField } from '@/components/Form';
import { Input } from '@/components/ui/input';

export default async function Event({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: event } = await supabase
    .from('events')
    .select()
    .eq('id', params.id)
    .limit(1)
    .single();

  if (event == null) {
    return <span>Event not found</span>;
  }

  return (
    <div className="xl:w-2/3 mt-4">
      <FormField label="Title" name="title">
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter Title"
          required
          disabled
          value={event.title!}
        />
      </FormField>
      {/* TODO: display other attributes */}
      <span>{JSON.stringify(event)}</span>
      <EventActions event={event} />
    </div>
  );
}
