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
        id:"01",
        icon: FaReact,
        skill: "React JS",
        progress: 78,
        type:"frontend",
        description:"Experienced in building scalable, high-performance web applications using React.js. I specialize in creating dynamic, component-driven interfaces that are not only visually appealing but also responsive and user-focused. "
    },
    {
        id:"02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 86,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"03",
        icon: FaCss3,
        skill: "CSS",
        progress: 72,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"04",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 81,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"05",
        icon: FaNodeJs,
        skill: "Node JS",
        progress: 65,
        type:"backend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"06",
        icon: SiExpress,
        skill: "Express.js",
        progress: 53,
        type:"backend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"07",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 57,
        type:"backend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"08",
        icon: SiMysql,
        skill: "MySql",
        progress: 30,
        type:"backend",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"10",
        icon: FaGitAlt,
        skill: "Git",
        progress: 91,
        type:"tools",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"11",
        icon: VscVscode,
        skill: "VsCode",
        progress: 96,
        type:"tools",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"12",
        icon: VscCommentUnresolved,
        skill: "Problem-solving",
        progress: 90,
        type:"soft-skills",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"13",
        icon: VscTerminalPowershell,
        skill: "Attention to Details",
        progress: 85,
        type:"soft-skills",
        description:"Experinced in building scalable, component-driven web applications using React js."
    },
    {
        id:"14",
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 92,
        type:"soft-skills",
        description:"Experinced in building scalable, component-driven web applications using React js."
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