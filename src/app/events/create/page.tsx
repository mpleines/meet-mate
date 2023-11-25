'use client';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../../../types/supabase';
import Button from '@/components/Button';

export default function Event({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-3xl">Create new Event</h1>
      <form className="mt-4">
        <label htmlFor="title" className="block">
          <input
            id="title"
            type="text"
            placeholder="Enter Title"
            className="border rounded-md py-2 px-4 inline-flex focus:outline text-md ml-1 p-0 border-none text-white bg-background-color-lighter focus:border-none focus:outline-none"
          ></input>
        </label>
        <Button type="submit">Create Event</Button>
      </form>
    </div>
  );
}
