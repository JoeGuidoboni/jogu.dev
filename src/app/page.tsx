import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen font-mono">
      <NavBar></NavBar>
      <div className="flex z-10 max-h-screen w-full justify-end p-8">
        <div className="basis-1/3 font-medium text-4xl tracking-tighter text-right p-4">
          <div className="border-amber-400 border-r-2 border-b-2 p-2">
            hey, i&apos;m jogu
          </div>
          
          <div className="flex justify-end py-4">
            <Image
              src="/img/me.jpg"
              width={300}
              height={300}
              alt="there's supposed to be a picture of me here"
              objectPosition="right"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="basis-1/3 p-5 text-base">
          i&apos;m a software engineer with a passion for creating things that
          help people, and that they enjoy using doing it. 
          <br></br>
          <br></br>
          i currently work at Fidelity Investments in Compensation Plan Management where my team and i configure compensation plans for Fidelity&apos;s 20,000+ financial reps.
          <br></br>
          <br></br>
          in my free time i like to build things that i hope people will enjoy interacting with, like a{" "}
          <a
            className="underline decoration-amber-400"
            href="https://github.com/JoeGuidoboni/umami"
          >
            sarcastic dicord bot
          </a>{"."}
        </div>
        <div className="basis-1/3 p-4"></div>
      </div>
    </main>
  );
}
