import { Email, GitHub, Headphones, LinkedIn } from "@mui/icons-material";

export default function RightBar() {
  return (
    <div className="w-1/3 h-full border-amber-400 border-t-2 border-l-2 p-2">
      <div className="text-xl">get in touch</div>
      <ul>
        <li className="py-1">
          <a
            href="mailto:joe.guidoboni@gmail.com"
            className="underline decoration-amber-400"
          >
            <Email className="pr-2" />
            email
          </a>
        </li>
        <li className="py-1">
          <a
            href="https://www.linkedin.com/in/joe-guidoboni/"
            className="underline decoration-amber-400"
          >
            <LinkedIn className="pr-2" />
            linkedin
          </a>
        </li>
        <li className="py-1">
          <a
            href="https://github.com/JoeGuidoboni"
            className="underline decoration-amber-400"
          >
            <GitHub className="pr-2" />
            github
          </a>
        </li>
        <li className="py-1">
          <a
            href="https://open.spotify.com/user/jofusgweedabownee"
            className="underline decoration-amber-400"
          >
            <Headphones className="pr-2" />
            spotify
          </a>
        </li>
      </ul>
    </div>
  );
}
