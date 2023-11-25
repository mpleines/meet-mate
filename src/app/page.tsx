import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-2xl text-center mt-8">
        <h1 className="text-8xl font-semibold tracking-wide">
          Schedule Meetings the easiest way.
        </h1>
      </div>
      <p className="p-8 max-w-2xl text-center text-lg">
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
