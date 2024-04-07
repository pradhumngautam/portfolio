export type projectData = {
  title: string;
  description: string;
  header: string;
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
    header: "Blogging website",
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
      "ShadcnUI",
    ],
    link: {
      github: "https://github.com/pradhumngautam/medium",
      youtube: "",
      live: "https://medium-self-beta.vercel.app/",
    },
  },
  {
    title: "Swift Spend",
    header: "Banking app",
    description:
      "SWIFT SPEND is a banking app which enables user to transfer money to other users. backend involves RESTful APIs and custom token-based authentication for secure access control including the password hashing through bCrypt, sessions are used for making transactions for controlling multiple transfer requests on same account or in the case of server/database crash.",
    tags: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "JWT",
      "bCrypt",
    ],
    link: {
      github: "https://github.com/pradhumngautam/paytm",
      youtube: "",
      live: "https://paytm-gules.vercel.app/",
    },
  },
];
