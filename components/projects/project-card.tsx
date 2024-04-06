import { GanttChart, GithubIcon, Link2Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProjectCard = () => {
  return (
    <Card className="md:max-w-screen-md md:mx-auto rounded-none bg-transparent border-none">
      <CardHeader className="flex">
        <CardTitle className="flex items-center justify-between">
          <div className="flex text-3xl items-center">
            <GanttChart className="mr-2" /> Medium
          </div>

          <div className="flex gap-2 ">
            <GithubIcon className="h-6 w-6 hover:text-green-700" />
            <Link2Icon className="h-6 w-6 hover:text-blue-700" />
          </div>
        </CardTitle>

        <CardDescription className="text-lg"> Blogging website</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-neutral-500 text-xl ">
          Medium is a blogging website which allows user to do CRUD operations
          on their blogs.Hono.js library of wrangler is used here for writing
          backend server which is hosted on cloudflare workers,
          connection-pooling is used for maintaining postgress requests.
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
