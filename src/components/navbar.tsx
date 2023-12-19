import Link from "next/link";

//const navItems = { 'Gallery' };

export default function NavBar() {
  return (
    <div className="flex max-h-fit min-w-screen p-6">
      <ul className="flex grid-flow-col items-center">
        <li className="flex display: table-caption; justify-start text-balance text-right text-2xl p-2 max-w-min border-amber-400 border-r-2 border-b-2">
          joe (jogu) guidoboni
        </li>
        <li className="flex-none justify-end p-2 text-2xl">
          <Link href={"/"}>about</Link>
        </li>
        <li className="flex-none justify-end p-2 text-2xl">
          <Link href={"/gallery"}>gallery</Link>  
        </li>
      </ul>
    </div>
  );
}
