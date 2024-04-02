import { Button } from "./button";

const Navbar = () => {
  return (
    <div>
      <div className="space-x-4 justify-center flex p-2">
        <Button>Home</Button>
        <Button>Projects</Button>
        <Button>Experience</Button>
        <Button>Blogs</Button>
      </div>
      <div className="border-b-2"></div>
    </div>
  );
};

export default Navbar;
