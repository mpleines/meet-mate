'use server';

import { WEEK_DAYS } from '@/constants';
import { supabase } from '@/supabaseClient';
import { z } from 'zod';

const validationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  duration: z.number().min(1),
  weekdays: z.string().array(),
  availableFrom: z.string().min(1),
  availableUntil: z.string().min(1),
  meetingType: z.string().min(1),
  videoLink: z.string(),
});

export async function create(formData: FormData) {
  const availableWeekdays = WEEK_DAYS.filter((weekday) =>
    formData.get(weekday)
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

    await supabase.from('events').insert(newEvent);

    return {
      message: `Added Event: ${newEvent.title}`,
    };
  } catch (err) {
    console.log(err);
    return {
      message: 'Failed to add event',
    };
  }
}
