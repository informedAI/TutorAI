const Welcome = () => {
  return (
    <main className="min-h-screen min-w-full flex items-center justify-center flex-col gap-4 text-center text-xl md:text-3xl font-londrinaSolid p-8">
      {" "}
      <p className="text-3xl md:text-5xl drop-shadow-sm font-londrinaShadow">
        Studying is important, right?
      </p>{" "}
      <p className="">You know what else is important? Sleep. </p>
      <p className=" text-white">
        We made an app so you don&apos;t have to give up any of those two.
      </p>
      <p className="">
        Save time on creating materials instead of actually studying them.
      </p>
      <p className=" text-white">Made by students for students. ❤️</p>
    </main>
  );
};

export default function Home() {
  return <Welcome />;
}
