import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="outline-dashed outline-1">
      <div className="container flex justify-between py-3">
        <Link
          href="/"
          className="inline-block"
        >
          <Image
            src="/upria-logo.svg"
            alt="Upria logo"
            width={71.09}
            height={37}
          />
        </Link>
        <div className="inline-flex gap-1">
          <Button variant="link">Sign Up</Button>
          <Button variant="default">Login</Button>
        </div>
      </div>
    </header>
  );
}
