import project1 from "../assets/projects/genlearn.png";
import project2 from "../assets/projects/task.png";
import project3 from "../assets/projects/food.png";
import project4 from "../assets/projects/todo.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 0.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const EXPERIENCES = [
  {
    year: "August 2024 - January 2025",
    role: "Full Stack Developer Intern",
    company: "CodeSmart.in",
    description: ` I have worked on the landing page UI and pricing page.
    I have worked on the whole UI of the extension with API integration.
    Built and optimized backend services for a browser extension, ensuring
    efficient API integration and data handling.
    I have worked on the user question tracker with a responsive UI and efficient
    backend.`,
    technologies: ["Typescript", "React.js", "Python", "Flask", "Postgres"],
  },
  
];

export const PROJECTS = [
  {
    title: "GenLearn",
    image: project1,
    description:
      "A fully functional website for creating the content using AI and learning from it. It includes features like create the course using name, category, difiiculty, etc. also include the youtube video using API, and a user-friendly interface.",
    technologies: ["Nextjs", "Tailwindcss", "PostgreSql", "Clerk", "Firebase", "Drizzle(Neon DB)"],
    github: 'https://github.com/01-Narendra/GenLearn',
    link: 'https://gen-learn-nm.vercel.app/'
  },
  {
    title: "Task Manager",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as create task with priority and due dates, update task and Dashboard for calender view of scheduled task and graph for completed tasks.",
    technologies: ["Nextjs", "Tailwindcss", "PostgreSql", "Zustand", "Tanstack Query", "Drizzle"],
    github: 'https://github.com/01-Narendra/Task-Manger',
    link: '/'
  },
  {
    title: "Food Delivery App",
    image: project3,
    description:
      "A web application for ordering food online, with features like menu browsing, order tracking, and payment processing using stripe.",
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "Stripe"],
    github: 'https://github.com/01-Narendra/Food-Del-App',
    link: 'https://nm-food.netlify.app/'
  },
  {
    title: "Full Stack Todo",
    image: project4,
    description:
      "A full stack todo application with features like create, update, delete and mark as completed. It includes a user-friendly interface and a responsive design.",
    technologies: ["MongoDB", "Express", "React.js", "Node.js"],
    github: 'https://github.com/01-Narendra/Full-Stack-Todo',
    link: '/'
  },
];

export const CONTACT = {
  address: "Raebareli, Uttar Pradesh, India",
  phoneNo: "+91 95699 23758 ",
  email: "n.narendraman58@gmail.com",
};
