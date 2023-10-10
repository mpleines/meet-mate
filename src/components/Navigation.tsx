"use client";

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Database } from "../../types/supabase";
import { useRouter } from "next/navigation";

export default function Navigation({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.refresh();
  }
  
  return (
    <nav className="mx-auto max-w-screen-2xl px-8 py-4 flex justify-between align-middle">
      <div className="flex justify-center">
        <Link href="/" className="text-xl font-semibold text-primary-orange">
          MeetMate.
        </Link>
      </div>
      {session?.user != null && (
        <button
          className="px-4 py-2 text-primary-orange font-semibold rounded-md hover:bg-opacity-90 hover:outline"
          onClick={signOut}
        >Sign Out</button>
      )}
    </nav>
  );
}
