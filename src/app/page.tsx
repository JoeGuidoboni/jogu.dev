import NavBar from "@/components/navbar"
export default function Home() {
  return (

    <main className="bg-zinc-950">
      <NavBar></NavBar>
      <div className="flex min-h-screen z-10 max-w-5xl max-h-screen w-full font-mono text-sm lg:flex items-center justify-center p-24 ">
        <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
          hey, i&apos;m jogu
          <br></br>
          this is my portfolio
        </h1>
      </div>
    </main>
  )
}
