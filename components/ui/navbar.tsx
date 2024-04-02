import { Button } from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="space-x-4 justify-center flex p-2">
        <Button asChild>
          <Link href="/Home">Home</Link>
        </Button>
        <Button asChild>
          <Link href="/projects">Projects</Link>
        </Button>
        <Button asChild>
          <Link href="/Experience">Experience</Link>
        </Button>
        <Button asChild>
          <Link href="/Blogs">Blogs</Link>
        </Button>
      </div>
      <div className="border-b-2"></div>
    </div>
  );
};

export default Navbar;
