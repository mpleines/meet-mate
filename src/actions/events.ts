'use server';

import { WEEK_DAYS } from '@/constants';
import { supabase } from '@/supabaseClient';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const validationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  duration: z.number().min(1),
  weekdays: z.string().array(),
  availableFrom: z.string().min(1),
  availableUntil: z.string().min(1),
  meetingType: z.string().min(1),
  videoLink: z.nullable(z.string()),
});

export async function createEvent(formData: FormData, userId: string) {
  const availableWeekdays = WEEK_DAYS.filter((weekday) =>
    formData.get(weekday),
  );

  try {
    const newEvent = validationSchema.parse({
      title: formData.get('title'),
      description: formData.get('description'),
      duration: Number(formData.get('duration')),
      weekdays: availableWeekdays,
      availableFrom: formData.get('availableFrom'),
      availableUntil: formData.get('availableUntil'),
      meetingType: formData.get('meetingType'),
      videoLink: formData.get('videoLink'),
    });

    const response = await supabase
      .from('events')
      .insert({ ...newEvent, userId });

    if (response.error) {
      throw response.error;
    }
  } catch (err) {
    console.log('failed to add event: ', err);
  }

  redirect('/dashboard');
}

export async function deleteEvent(id: number) {
  console.log(id);
  try {
    const response = await supabase.from('events').delete().eq('id', id);
    console.log(response);
  } catch (error) {
    console.error('Failed to delete event: ', error);
  }

  redirect('/dashboard');
}
