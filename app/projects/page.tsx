import ProjectCard from "@/components/projects/project-card";
import { projectsContent } from "@/components/projects/project-content";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <div className="my-8 md:my-12 w-full md:max-w-screen-2xl md:mx-auto md:px-16">
      <ul className="flex flex-col items-center justify-center w-full">
        {projectsContent.map((card, idx) => {
          return (
            <div key={idx}>
              <ProjectCard
                title={card.title}
                header={card.header}
                description={card.description}
                tags={card.tags}
                link={card.link}
              />

              <Separator className="my-4" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
