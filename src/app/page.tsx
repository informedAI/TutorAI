const Welcome = () => {
  return (
    <main className="min-h-full min-w-full flex items-center justify-center flex-col gap-4 text-center">
      {" "}
      <p className="text-5xl drop-shadow-sm font-londrinaShadow">
        Studying is important, right?
      </p>{" "}
      <p className="text-3xl font-londrinaSolid">
        You know what else is important? Sleep.{" "}
      </p>
      <p className="text-3xl font-londrinaSolid text-white">
        We made an app so you don&apos;t have to give up any of those two.
      </p>
      <p className="text-3xl font-londrinaSolid">
        Save time on creating materials instead of actually studying them.
      </p>
      <p className="text-3xl font-londrinaSolid text-white">
        Made by students for students. ❤️
      </p>
    </main>
  );
};

export default function Home() {
  return <Welcome />;
}
