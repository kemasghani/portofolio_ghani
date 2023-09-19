import {
  mobile,
  backend,
  creator,
  web,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';
import html from '../assets/tech/html.png'
import javascript from '../assets/tech/javascript.png'
import typescript from '../assets/tech/typescript.png'
import css from '../assets/tech/css.png'
import reactjs from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import tailwind from '../assets/tech/tailwind.png'
import nodejs from '../assets/tech/nodejs.png'

import Company from '../assets/company/company.png'
import darkCompany from '../assets/company/darkCompany.png'
import projectCar from '../assets/projectCar.png'
import projectTrip from '../assets/projectTrip.png'
import projectMovies from '../assets/projectMovies.png'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Science',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Full-stack Developer',
    company_name: 'PT NAF Karya Indonesia (Internship)',
    icon: Company,
    iconBg: '#383E56',
    date: 'July 2023 - Oct 2023',
    points: [
      'Developing and maintaining web applications using React.js with Vite.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Worked closely with API endpoints, efficiently fetching and manipulating data with react-redux to provide real-time updates and dynamic content on the website.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'AdainAcara (Internship)',
    icon: darkCompany,
    iconBg: '#E6DEDD',
    date: 'Dec 2022 - Jul 2023',
    points: [
      'Developed engaging and user-friendly web applications using Next.js, Tailwind CSS, and integrated APIs to enhance website functionality.',
      'Collaborated closely with the design and backend development teams to ensure seamless integration of user interfaces and smooth user experiences.',
      'Worked closely with API endpoints, efficiently fetching and manipulating data to provide real-time updates and dynamic content on the website.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'PT. erfolg teknologi indonesia (Contract)',
    icon: Company,
    iconBg: '#383E56',
    date: 'Sep 2022 - Dec 2022',
    points: [
      'Ensure Quality of Products and Services According to Standards, Processes and Procedures.',
      'Developing and maintaining web applications using Codeigniter 4 and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Mentor Frontend Web developer',
    company_name: 'KSM Android (Contract)',
    icon: darkCompany,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Dec 2022',
    points: [
      'Teaching HTML structure',
      'Teaching CSS basic to advance, to make beautiful website with responsive design',
      'Teaching basic to advance JavaScript, to make dynamic website that can control by user.',
      'Teaching make complex project (ex : Online Shop, Accountant website, and admin dashboard) with HTML, CSS and JavaScript.',
    ],
  },
];


const projects = [
  {
    name: 'Car Rent',
    description:
      'Navigate your way through our car rental website. Discover, reserve, and handle your rentals effortlessly. Your key to hassle-free mobility starts here, where convenience and choice converge for a smoother journey. ',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      }
    ],
    web_link: 'https://car-rent-react-js.vercel.app/',
    image: projectCar,
    source_code_link: 'https://github.com/kemasghani/car-rent-reactJs/',
  },
  {
    name: 'Movies App',
    description:
      'Dive into the world of cinema with our movie website. Explore with your favorite films. Your cinematic journey begins here, where entertainment meets convenience for an immersive movie experience.',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'materialUI',
        color: 'green-text-gradient',
      }
    ],
    web_link: 'https://movies-app-five-wheat.vercel.app/',
    image: projectMovies,
    source_code_link: 'https://github.com/kemasghani/movies_app',
  },
  {
    name: 'Trip Travel',
    description:
      'Embark on your dream adventures with our trip travel website. Explore destinations, plan itineraries, and book experiences effortlessly. Your journey starts here, where wanderlust meets convenience in just a few clicks.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      }
    ],
    web_link: 'https://trip-agent-website.vercel.app/',
    image: projectTrip,
    source_code_link: 'https://github.com/kemasghani/trip_agent_website/',
  },
];

export { services, technologies, experiences, projects };
