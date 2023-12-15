import Link from "next/link";

//const navItems = { 'Gallery' };

export default function NavBar() {
  return (
    <div className="flex max-h-fit min-w-screen justify-end p-6">
      <ul className="flex columns-2 font-mono">
        <li className="w-full p-4">
          <Link href={"/"}>About</Link>
        </li>
        <li className="w-full p-4">
          <Link href={"/gallery"}>Gallery</Link>
        </li>
      </ul>
    </div>
  );
}
