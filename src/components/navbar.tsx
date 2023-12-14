import Link from "next/link";
export default function NavBar() {
  return(
    <ul>
      <li>
        <Link href={"/gallery"}>Gallery</Link>
      </li>
    </ul>
  );
}
