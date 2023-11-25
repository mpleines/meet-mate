'use server';

import { supabase } from '@/supabaseClient';
import { z } from 'zod';

const validationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  duration: z.number().min(1),
});

export async function create(formData: FormData) {
  const newEvent = validationSchema.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    duration: Number(formData.get('duration')),
  });

  try {
    await supabase.from('events').insert(newEvent);

    return {
      message: `Added Event: ${newEvent.title}`,
    };
  } catch (err) {
    return {
      message: 'Failed to add event',
    };
  }
}
