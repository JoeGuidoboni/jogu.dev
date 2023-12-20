import NavBar from "@/components/navbar";
import { Email, GitHub, Headphones, LinkedIn } from "@mui/icons-material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen font-mono">
      <NavBar></NavBar>
      <div className="flex z-10 max-h-screen w-full justify-end p-8">
        <div className="basis-1/3">
          <div className="flex-1 font-medium text-4xl tracking-tighter text-right p-4">
            <div className="border-amber-400 border-r-2 border-b-2 p-2">
              hey,
              <br></br>
              i&apos;m jogu
            </div>

            <div className="flex justify-end py-4">
              <Image
                src="/img/me.jpg"
                width={300}
                height={300}
                alt="there's supposed to be a picture of me here"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/3 p-5 text-base">
          i&apos;m a software engineer with a passion for creating things that
          help people, and that they enjoy using them.
          <br></br>
          <br></br>i currently work at Fidelity Investments in Compensation Plan
          Management where my team configures compensation plans for
          Fidelity&apos;s 20,000+ financial reps.
          <br></br>
          <br></br>
          in my free time i like to build things that i hope people will enjoy
          interacting with, like a{" "}
          <a
            className="underline decoration-amber-400"
            href="https://github.com/JoeGuidoboni/umami"
          >
            sarcastic dicord bot
          </a>
          {"."}
        </div>
        <div className="basis-1/3 p-4">
          <div className="w-1/4 h-full border-amber-400 border-t-2 border-l-2 p-2">
            <div className="text-xl">contact</div>
            <ul>
              <li className="py-1">
                <a href="mailto:joe.guidoboni@gmail.com" className="underline decoration-amber-400">
                  <Email className="pr-2" />
                  email
                </a>
              </li>
              <li className="py-1">
                <a href="https://www.linkedin.com/in/joe-guidoboni/" className="underline decoration-amber-400">
                  <LinkedIn className="pr-2" />
                  linkedin
                </a>
              </li>
              <li className="py-1">
                <a href="https://github.com/JoeGuidoboni" className="underline decoration-amber-400">
                  <GitHub className="pr-2" />
                  github
                </a>
              </li>
              <li className="py-1">
                <a href="https://open.spotify.com/user/jofusgweedabownee" className="underline decoration-amber-400">
                  <Headphones className="pr-2" />
                  spotify
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
