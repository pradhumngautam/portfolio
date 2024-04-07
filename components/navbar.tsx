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
    <div className="flex  items-center h-16 border-b bg-zinc-950 fixed w-full shadow-md justify-between p-5">
      <div className="flex items-center justify-center gap-3">
        {navItems.map((item, index) => (
          <Button className="rounded-full" asChild variant={"nav"} key={index}>
            <Link href={item.src}>{item.name}</Link>
          </Button>
        ))}
      </div>

      <Button
        className="bg-gradient-to-r from-emerald-300 to-emerald-600 text-neutral-900 hover:scale-105 transition-all"
        size={"sm"}
        asChild
      >
        <Link href={""}>Contact Me</Link>
      </Button>
    </div>
  );
};

export default Navbar;
