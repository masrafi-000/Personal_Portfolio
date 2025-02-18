import { BiLogoJavascript } from "react-icons/bi"
import {
    FaCss3,
    FaFacebook,
    FaGithub,
    FaHtml5,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaWhatsapp
} from 'react-icons/fa'
import { FaDiscord, FaGitAlt, FaXTwitter } from "react-icons/fa6"
import { MdGroups3 } from 'react-icons/md'
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si"
import { VscCommentUnresolved, VscTerminalPowershell, VscVscode } from "react-icons/vsc"

import { nanoid } from "nanoid"
import PROJECT_IMG_1 from "../assets/images/project-1.png"
import PROJECT_IMG_2 from "../assets/images/project-2.png"
import PROJECT_IMG_3 from "../assets/images/project-3.png"
import PROJECT_IMG_4 from "../assets/images/project-4.png"
import PROJECT_IMG_5 from "../assets/images/project-5.png"
import PROJECT_IMG_6 from "../assets/images/project-6.png"

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
        description:"Experienced in building scalable, high-performance web applications using React.js. I specialize in creating dynamic, component-driven interfaces that are not only visually appealing but also responsive and user-focused. "
    },
    {
        id:nanoid(),
        icon: FaHtml5,
        skill: "HTML",
        progress: 86,
        type:"frontend",
        description:"Proficient in structuring semantic markup, optimizing SEO, and ensuring compatibility across different browsers and devices. Strong focus on creating user-friendly, component-driven designs with clean, maintainable code."
    },
    {
        id:nanoid(),
        icon: FaCss3,
        skill: "CSS",
        progress: 72,
        type:"frontend",
        description:"Proficient in creating fluid layouts with Flexbox and Grid, implementing responsive designs, and ensuring cross-browser compatibility. Strong expertise in theming, animations, and optimizing styles for performance and accessibility."
    },
    {
        id:nanoid(),
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 81,
        type:"frontend",
        description:"Proficient in writing clean, efficient code for DOM manipulation, event handling, and asynchronous operations. Strong knowledge of ES6+ features, as well as frameworks like React.js, for creating responsive, scalable, and user-centric applications."
    },
    {
        id:nanoid(),
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 65,
        type:"backend",
        description:"Proficient in building RESTful APIs, managing asynchronous operations, and integrating with databases (MongoDB, MySQL). Skilled in using Express.js for routing, middleware, and handling HTTP requests efficiently, ensuring optimal performance and scalability."
    },
    {
        id:nanoid(),
        icon: SiExpress,
        skill: "Express.js",
        progress: 53,
        type:"backend",
        description:"Proficient in creating robust server-side applications, managing routing, middleware, and handling HTTP requests. Skilled in integrating Express.js with databases, implementing authentication, and optimizing API performance for seamless and efficient web solutions."
    },
    {
        id:nanoid(),
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 57,
        type:"backend",
        description:"Proficient in designing and managing NoSQL databases, creating schemas, and performing CRUD operations. Skilled in integrating MongoDB with Node.js and Express.js, ensuring efficient data storage and retrieval for dynamic, high-performance applications."
    },
    {
        id:nanoid(),
        icon: SiMysql,
        skill: "MySql",
        progress: 30,
        type:"backend",
        description:"Proficient in designing relational databases, writing complex SQL queries, and performing CRUD operations. Skilled in integrating MySQL with backend technologies like Node.js, ensuring efficient data management, and optimizing database performance for scalable applications."
    },
    {
        id:nanoid(),
        icon: FaGitAlt,
        skill: "Git",
        progress: 91,
        type:"tools",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:nanoid(),
        icon: VscVscode,
        skill: "VsCode",
        progress: 96,
        type:"tools",
        description:"Proficient in creating and managing branches, handling merges, resolving conflicts, and collaborating with teams using Git workflows. Skilled in using GitHub for repository management, pull requests, and maintaining code quality across projects."
    },
    {
        id:nanoid(),
        icon: VscCommentUnresolved,
        skill: "Problem-solving",
        progress: 90,
        type:"soft-skills",
        description:"Proficient in breaking down problems into manageable parts, applying logical thinking, and utilizing algorithms to find optimal solutions. Experienced in debugging, troubleshooting, and optimizing code to improve performance and functionality."
    },
    {
        id:nanoid(),
        icon: VscTerminalPowershell,
        skill: "Attention to Details",
        progress: 85,
        type:"soft-skills",
        description:"Skilled in reviewing code for accuracy, ensuring clean, well-organized structures, and maintaining consistency across projects. Committed to delivering high-quality work by identifying and addressing potential issues early, resulting in optimized, error-free applications."
    },
    {
        id:nanoid(),
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 92,
        type:"soft-skills",
        description:"Skilled in working with diverse teams, reviewing and submitting pull requests, and following best practices for code contribution. Proficient in using GitHub to collaborate, manage issues, and improve open-source projects while maintaining high code quality and efficiency."
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
        id: 1,
        title: "Full stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_1,
        tags:["React", "Express", "MongoDB", "Node.js"]

    },
    {
        id: 2,
        title: "Full stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_2,
        tags:["React", "Express", "MongoDB", "Node.js"]

    },
    {
        id: 3,
        title: "Full stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_3,
        tags:["React", "Express", "MongoDB", "Node.js"]

    },
    {
        id: 4,
        title: "Full stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_4,
        tags:["React", "Express", "MongoDB", "Node.js"]

    },
    {
        id: 5,
        title: "Full stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_5,
        tags:["React", "Express", "MongoDB", "Node.js"]

    },
    {
        id: 6,
        title: "Full stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_6,
        tags:["React", "Express", "MongoDB", "Node.js"]

    },
]