import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-semibold">
          Schedule Meetings the easiest way.
        </h1>
      </div>
      <p className="p-8 max-w-l text-center">
        MeetMate is the best way to schedule Meetings with everybody around the
        globe without the struggle of sending email back and forth - You will
        love it for sure.
      </p>

      <p className="font-bold">Sign up or Log In by entering your Email below</p>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </main>
  );
}
