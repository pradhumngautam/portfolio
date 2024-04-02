import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "Home",
    src: "/",
  },
  {
    name: "Projects",
    src: "/projects",
  },
  {
    name: "Experience",
    src: "/experience",
  },
  {
    name: "Blogs",
    src: "/blogs",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-16 border-b bg-zinc-950 fixed w-full shadow-md">
      <div className="flex items-center justify-center gap-3">
        {navItems.map((item, index) => (
          <Button className="rounded-full" asChild key={index}>
            <Link href={item.src}>{item.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
