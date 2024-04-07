export type projectData = {
  title: string;
  description: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    title: "Medium",
    description:
      "Medium is a blogging website which allows user to do CRUD operations on their blogs.Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.",
    tags: [
        "Typescript",
        "React.js",
        "Hono.js",
        "Prisma",
        "PostgreSQL",
        "Connection - pooling",
        "Custom hooks",
        "TailwindCSS",
        "ShadcnUI"
    ],
    link: {
      github: "https://github.com/pradhumngautam/medium",
      youtube: "",
      live: "https://medium-self-beta.vercel.app/",
    },
  },
  {
    title: "Typewriter Playground",
    description:
      "A real-time typwriter speed test app for competing with your friends online and compare the typing speed.",
    tags: [
      "Typescript",
      "Node.js",
      "Next.js",
      "Prisma",
      "Socket.IO",
      "TailwindCSS",
      "Turborepo(Monorepo)",
      "Shadcn UI",
    ],
    link: {
      github: "https://github.com/tanayvaswani/typewriter-playground",
      youtube: "",
      live: "",
    },
  },
];
