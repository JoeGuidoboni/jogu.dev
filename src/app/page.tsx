import NavBar from "@/components/navbar"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950">
      <div className="z-10 max-w-5xl max-h-screen w-full font-mono text-sm lg:flex">
        <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
          hey, i&apos;m jogu
          <br></br>
          this is my portfolio
        </h1>
        <NavBar></NavBar>
      </div>
    </main>
  )
}
