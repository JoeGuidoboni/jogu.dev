import Link from "next/link";

//const navItems = { 'Gallery' };

export default function NavBar() {
  return (
    <div className="flex max-h-fit min-w-screen justify-end p-8">
      <ul className="column font-mono">
        <li className="w-full">
          <Link href={"/"}>About</Link>
        </li>
        <li className="w-full">
          <Link href={"/gallery"}>Gallery</Link>
        </li>
      </ul>
    </div>
  );
}
