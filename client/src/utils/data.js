import { BiLogoJavascript } from "react-icons/bi";
import {
    FaCss3,
    FaFacebook,
    FaGithub,
    FaHtml5,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaWhatsapp
} from 'react-icons/fa';
import { FaDiscord, FaFigma, FaGitAlt, FaXTwitter } from "react-icons/fa6";
import { MdGroups3 } from 'react-icons/md';
import { RiNextjsFill, RiTeamFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiNetlify, SiPostman, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { VscCommentUnresolved, VscTerminalPowershell, VscVscode } from "react-icons/vsc";

import { nanoid } from "nanoid";
import PROJECT_IMG_8 from "../assets/images/boizar.png";
import PROJECT_IMG_7 from "../assets/images/estatein.png";
import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/taskmanager.png";

export const MENU_LINKS = [
    {id:nanoid(), label:"Home", offset: -100, to: "hero"},
    {id:nanoid(), label:"Skills", offset: -80, to:"skills"},
    {id:nanoid(), label:"About Me", offset: -80, to: "about"},
    {id:nanoid(), label:"Projects", offset: -80, to: "projects"},
    {id:nanoid(), label:"Contact", offset: -80, to: "contact"}
]

export const STATS = [
    {id:nanoid(), count:"&", label: `Self \nLearner`},
    {id:nanoid(), count:"1", label: `Certifications \nEarned`},
    {id:nanoid(), count:"6", label: `Projects \nCompleted`},
    {id:nanoid(), count:"1", label: `Happy \nClient`},
]

export const SKILLS_TAB = [   
    {id:nanoid(), label:"All", value: "all"},
    {id:nanoid(), label:"Frontend", value: "frontend"},
    {id:nanoid(), label:"Backend", value:"backend"},
    {id:nanoid(), label:"Tools", value:"tools"},
    {id:nanoid(), label:"Soft", value:"soft-skills"}
]

export const SKILLS = [
    {
        id:nanoid(),
        icon: FaReact,
        skill: "React JS",
        progress: 78,
        type:"frontend",
        
    },
    {
        id:nanoid(),
        icon: RiNextjsFill,
        skill: "Next JS",
        progress: 60,
        type:"frontend",
    },
     {
        id:nanoid(),
        icon: SiTypescript,
        skill: "TypeScript",
        progress: 75,
        type:"frontend",
    },
    {
        id:nanoid(),
        icon: FaHtml5,
        skill: "HTML",
        progress: 86,
        type:"frontend",
        
    },
    {
        id:nanoid(),
        icon: FaCss3,
        skill: "CSS",
        progress: 72,
        type:"frontend",
    },
    {
        id:nanoid(),
        icon: SiTailwindcss,
        skill: "Tailwind CSS",
        progress: 72,
        type:"frontend",
    },
    {
        id:nanoid(),
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 81,
        type:"frontend",
    },
   
    {
        id:nanoid(),
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 65,
        type:"backend",
    },
    {
        id:nanoid(),
        icon: SiExpress,
        skill: "Express.js",
        progress: 53,
        type:"backend",
    },
    {
        id:nanoid(),
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 57,
        type:"backend",
    },
    {
        id:nanoid(),
        icon: SiMysql,
        skill: "MySql",
        progress: 30,
        type:"backend",
    },
    {
        id:nanoid(),
        icon: FaGitAlt,
        skill: "Git",
        progress: 91,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: FaGithub,
        skill: "GitHub",
        progress: 88,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: VscVscode,
        skill: "VsCode",
        progress: 96,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: FaFigma,
        skill: "Figma",
        progress: 72,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: SiVercel,
        skill: "Vercel",
        progress: 80,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: SiPostman,
        skill: "Postman",
        progress: 85,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: SiNetlify,
        skill: "Netlify",
        progress: 85,
        type:"tools",
    },
    {
        id:nanoid(),
        icon: VscCommentUnresolved,
        skill: "Problem-solving",
        progress: 90,
        type:"soft-skills",
    },
    {
        id:nanoid(),
        icon: VscTerminalPowershell,
        skill: "Attention to Details",
        progress: 85,
        type:"soft-skills",
    },
    {
        id:nanoid(),
        icon: RiTeamFill,
        skill: "Teamwork",
        progress: 88,
        type:"soft-skills",
    },
    {
        id:nanoid(),
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 92,
        type:"soft-skills",
    },
]

export const ABOUT_ME = {
    socialLinks: [
        {id:nanoid(), label:"LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/masrafi000/"},
        {id:nanoid(), label:"GitHub", icon: FaGithub, link: "https://github.com/masrafi-000"},
        {id:nanoid(), label:"Facebook", icon: FaFacebook, link: "https://www.facebook.com/masrafi000/"},
        {id:nanoid(), label:"Twitter", icon: FaXTwitter, link: "https://x.com/masrafi000"},
        {id:nanoid(), label:"Discord", icon: FaDiscord, link: "https://discordapp.com/users/646341971555647490"},
        {id:nanoid(), label:"WhatsApp", icon: FaWhatsapp, link: "https://wa.me/8801608441412"},
    ],
    email: {mail:"smmasrafi01@gmail.com", to:"mailto:smmasrafi01@gmail.com"},
    phone: {number:"+880 1608-441412", link: "https://wa.me/8801608441412"},
    website:""
    
}

export const PROJECTS = [
    {
        id: nanoid(),
        title: "Boizaar | Next.js, TypeScript, React.js (Ongoing)",
        image: PROJECT_IMG_8,
        tags: ["Next.js", "TypeScript","React.js", "React-hook-form","Zod", "Zustand"],
        link: "https://real-state-app-masrafi-000.vercel.app/"
    },
    {
        id: nanoid(),
        title: "Estatein | Next.js, TypeScript, React.js (Ongoing - Not Responsive)",
        image: PROJECT_IMG_7,
        tags: ["Next.js", "TypeScript","React.js", "React-hook-form","Zod"],
        link: "https://real-state-app-masrafi-000.vercel.app/"
    },
    {
        id: nanoid(),
        title: "Task Manager | Next.js, TypeScript, Redux-toolkit (Ongoing-Server inactive)",
        image: PROJECT_IMG_6,
        tags: ["Next.js", "TypeScript","React.js", "Redux-toolkit",],
        link: "https://mytaskmanager-masrafi-000.vercel.app/"

    },
    {
        id: nanoid(),
        title: "Frontend Landing Page | TypeScript, Next.js, React JS, Tailwind CSS",
        image: PROJECT_IMG_5,
        tags:["Next.js", "TypeScript" , "Tailwind CSS","AOS" ],
        link: "https://software-landing-page-eosin.vercel.app/"
    },
    {
        id: nanoid(),
        title: "Frontend Doctor Appointment Booking App using React | JavaScript, React JS, Tailwind CSS, Vite",
        image: PROJECT_IMG_1,
        tags:["React", "JavaScript", "Tailwind CSS", ],
        link: "https://doctor-appointment-website-tau.vercel.app/"

    },
    {
        id: nanoid(),
        title: "Frontend Ecommerce WebApp using React | JavaScript, Three.js, React JS, Tailwind CSS, Vite",
        image: PROJECT_IMG_3,
        tags:["React", "JavaScript","Three.js" , "Tailwind CSS", ],
        link: "https://apple-clone-mu-seven.vercel.app/"

    },
    {
        id: nanoid(),
        title: "Full stack Personal Portfolio Website using React | JavaScript, Express, React JS, Node JS",
        image: PROJECT_IMG_4,
        tags:["React", "Express", "JavaScript", "Node.js", "Tailwind CSS"],
        link: "https://personal-portfolio-pi-gray-20.vercel.app/"
    },
    {
        id: nanoid(),
        title: "Frontend Basic Portfoli WebPage using React | JavaScript, React JS, Tailwind CSS, Vite",
        image: PROJECT_IMG_2,
        tags:["React", "JavaScript", "Tailwind CSS", ],
        link:"https://portfolio-demo-fawn.vercel.app/"

    },
    
    
  
]