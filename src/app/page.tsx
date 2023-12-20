import NavBar from "@/components/navbar/navbar";
import LeftBar from "@/components/left-bar/left-bar";
import RightBar from "@/components/right-bar/right-bar";

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen font-mono selection:text-sky-500">
      <NavBar></NavBar>
      <div className="flex z-10 max-h-screen w-full justify-end p-8">
        <div className="basis-1/3">
          <LeftBar></LeftBar>
        </div>
        <div className="basis-1/3 p-5 text-base overflow-auto">
          <div className="pb-4">
            <h1 className="text-2xl text-right border-amber-400 border-r-2 border-b-2 p-2">about me</h1>
          </div>
          i&apos;m a software engineer with a passion for creating things that
          help people, and that they enjoy using them.
          <br></br>
          <br></br>i currently work at Fidelity Investments in Compensation Plan
          Management where my team configures compensation plans for
          Fidelity&apos;s 20,000+ financial reps.
          <br></br>
          <br></br>
          in my free time i like to build things that i hope people will enjoy
          interacting with, like this website, or a{" "}
          <a
            className="underline decoration-amber-400"
            href="https://github.com/JoeGuidoboni/umami"
          >
            sarcastic dicord bot
          </a>
          {"."}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="text-right border-amber-400 border-r-2 border-b-2 p-2">
            <h1 className="text-2xl text-right">experience</h1>
            <h2 className="text-lg text-right">Associate Software Engineer @ Fidelity Investments</h2>
            <ul>

            </ul>
          </div>
        </div>
        <div className="basis-1/3 p-4">
          <RightBar></RightBar>
        </div>
      </div>
    </main>
  );
}
