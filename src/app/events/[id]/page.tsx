import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../types/supabase";
import { cookies } from "next/headers";

export default async function Event({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: event } = await supabase
    .from("events")
    .select()
    .eq("id", params.id)
    .limit(1)
    .single();

  if (event == null) {
    return <span>Event not found</span>;
  }

  return <div>Hier ist event: {JSON.stringify(event)}</div>;
}
