import { supabase } from "@/supabaseClient";
import Link from "next/link";
import { cookies } from 'next/headers';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../types/supabase";

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();


  const { data: events, error } = await supabase.from('events').select(); 

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Your Events</h1>
      <div className="pt-4 flex">
      {events?.map((event) => (
        <div key={event.id} className="border p-4">
          <h2 className="text-2xl">{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
      </div>
    </main>
  )
}
