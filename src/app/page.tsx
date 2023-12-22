import NavBar from "@/components/navbar/navbar";
import LeftBar from "@/components/left-bar/left-bar";
import RightBar from "@/components/right-bar/right-bar";

export default function Home() {
  return (
    <main className="bg-zinc-900 font-mono selection:text-sky-500 md:overflow-hidden md:h-screen">
      <NavBar></NavBar>
      <div className="flex-row  z-10 w-full md:flex md:h-full">
        <div className="basis-1/4">
          <LeftBar></LeftBar>
        </div>
        <div className="basis-1/2 p-5 text-base md:pb-48 md:overflow-y-auto">
          <div className="pb-4">
            <h1 className="text-2xl text-right border-amber-400 border-r-2 border-b-2 p-2">
              <a className="text-amber-400">:</a>about me
            </h1>
          </div>
          i&apos;m a software engineer with a passion for creating things that
          help people, and that they enjoy using them.
          <br></br>
          <br></br>i currently work at Fidelity Investments in Compensation Plan
          Management where my team configures compensation plans for all of
          Fidelity&apos;s financial reps.
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
          <div className="pb-12">
            <div className="border-amber-400 border-r-2 border-b-2 p-2">
              <h1 className="text-2xl text-right">
                {" "}
                <a className="text-amber-400">:</a>experience
              </h1>
              <h2 className="text-lg text-right">
                Associate Software Engineer @ Fidelity Investments
              </h2>
              <h2 className="text-lg text-right">
                Fall 2021 <a className="text-amber-400">-</a> Present
              </h2>
            </div>
            <ul className="list-disc marker:text-amber-400 py-6">
              <li>
                Hired as part of Fidelity&apos;s LEAP Program, a selective
                18-week early career development program which prepares
                participants for a technical role at Fidelity
              </li>
              <li>
                Worked as part of Sales Support & Compensation, configuring and
                supporting compensation plans through SAP Commissions and
                Advanced Workflow for 20,000+ Fidelity representatives
              </li>
              <li>
                Developed a web scraper using Selenium to automatically retrieve
                1600+ legacy SAP support cases and their attachments, saving
                time by preventing the need to make redundant support cases in
                the future
              </li>
              <li>
                Improved maturity of Jenkins CI/CD pipeline by implementing
                automatic deployment of database objects, reducing database
                object deployment time from hours to seconds
              </li>
            </ul>
          </div>
          <div>
            <div className="border-amber-400 border-r-2 border-b-2 p-2">
              <h2 className="text-lg text-right">
                Cognitive Computing Platform Intern @ Fidelity Investments
              </h2>
              <h2 className="text-lg text-right">Summer 2020</h2>
            </div>
            <ul className="list-disc marker:text-amber-400 py-6">
              <li>
                Worked in an Agile setting to develop a Virtual Assistant for
                the Fidelity Jobs Team using the Cognitive Computing
                Platform&apos;s internal software
              </li>
              <li>
                Collaborated with a group of interns to develop and test an
                algorithm using NodeJS and GraphQL for matching internal
                Fidelity employees with career coaches based on professional
                interests, seniority, and other fields
              </li>
              <li>
                Met and coordinated with the Fidelity Jobs Team to establish and
                fulfill their needs as a customer and deliver an effective and
                expandable product
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/4 p-4">
          <RightBar></RightBar>
        </div>
      </div>
    </main>
  );
}
