import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/* import StackOverflowIcon from '../components/Icon/StackOverflowIcon'; */
import TwitterIcon from '../components/Icon/TwitterIcon';
import assurantImage from '../images/companies/assurant.png';
import cfoImage from '../images/companies/cfo.png';
import contabiliumImage from '../images/companies/contabilium.png';
import expertaImage from '../images/companies/experta.svg';
import inmotionImage from '../images/companies/inmotion.png';
import mastersoftImage from '../images/companies/mastersoft.png';
import qstomImage from '../images/companies/qstom.png';
import sancorImage from '../images/companies/sancor.png';
import uocraImage from '../images/companies/uocra.svg';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Diego Zuccoli`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Thank you for checking my resume out. Here you will find all the info you need to know about me!
        <br />
        My Name is Diego and I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Assurant</strong> helping build a modern, secure and robust core software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning <strong className="text-stone-100">electronics</strong>,
        plucking my <strong className="text-stone-100">bass</strong>, or doing some {' '}
        <strong className="text-stone-100">3D printing</strong>.
        You can find out more <strong className="text-stone-100">about me</strong> down here.
      </p>
    </>
  ),
  actions: [
    {
      href: '../../data/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: [
    "I was born on September 4, 1986 and I currently live in Buenos Aires City.",
    "I am a person who enjoys what he does.I learned to program 20 years ago in a self-taught way.",
    "I don't consider myself bilingual but I do get along very well with English.",
    "I am interested in 3D printing, I have two printers and I am building another one from scratch.",
    "I also like to program with Arduino or some microcontroller like ESP8266.",
    "Out of all this I collect action figures from the 80s and 90s, for example He Man or Silverhawks."
  ],
  aboutItems: [
    {label: 'Location', text: 'Buenos Aires City', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentina', Icon: FlagIcon},
    {label: 'Interests', text: 'Code, 3D printing, music...', Icon: SparklesIcon},
    {label: 'Study', text: 'IAC', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Assurant, Inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: '.NET',
        level: 10,
      },
      {
        name: 'NodeJS',
        level: 7,
      },
      {
        name: 'SQL',
        level: 9,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '1993-2003',
    location: 'CCI Buenos Aires',
    title: 'English language speaker',
    image: '/nada',
    content: <p>I studied english my entire childhood here.</p>,
  },
  {
    date: '2000-2006',
    location: 'Hogar Naval. Stella Maris',
    title: 'High School',
    image: '/nada',
    content: <p>I did my high school here. It's and industrial and technical school.</p>,
  },
  {
    date: '2006-2007',
    location: 'IAC',
    title: 'Programmer',
    image: '/nada',
    content: <p>I took a two years course on programming. It was a good start point.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'Assurant, Inc.',
    title: 'Senior .NET Dev',
    image: assurantImage,
    content: (
      <p>
        I work as a .NET and Azure programmer with others coders from the entire world. We communicate in english.
      </p>
    ),
  },
  {
    date: '2021 - 2022',
    location: 'Contabilium',
    title: '.NET Tech Lead',
    image: contabiliumImage,
    content: (
      <p>
        I fulfilled the role of technical lead of the backend team. I analyzed and developed the new architectures that they are now
        using for the implementation of a microservices scheme. I trained and supported team members.
        We also managed to put together an architecture for big data and reduce waiting times from 6 minutes to 5 seconds per query.
      </p>
    ),
  },
  {
    date: '2020 - 2021',
    location: 'CFO Tech',
    title: 'Senior .NET Dev',
    image: cfoImage,
    content: (
      <p>
        In CFO I was dedicated to the creation of APIs and Web Services using .Net Core.
        I trained the team to use GIT on Azure and wrote the usage guide and good practices for use by all development teams.
        I programmed a service that replaces the Lapos, so that an equipment is no longer needed by each programmer.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'SML Experta ART',
    title: 'Senior .NET Dev',
    image: expertaImage,
    content: (
      <p>
        I spearheaded the migration to API Rest technologies using .Net Core 2.2 and then 3.1.
        I wrote the error handling middleware, data log, Healthcheck and Swagger.
        I set up the environments in Docker and the migration of all sources to GIT environments (before that they only had a shared folder).
        I trained the team so that they could continue those same developments and later make APIs on their own.
      </p>
    ),
  },
  {
    date: '2017 - 2019',
    location: 'Qstom',
    title: 'Senior .NET Dev',
    image: qstomImage,
    content: (
      <p>
        At Qstom I was in charge of maintaining and developing the Cyberseg system.
        This system handles everything that an insurance broker does (policies, endorsements, insured, interfaces, reports, settlements, etc.)
      </p>
    ),
  },
  {
    date: '2013 - 2017',
    location: 'InMotion GIT',
    title: 'Ssr Dev',
    image: inmotionImage,
    content: (
      <p>
        I worked for the Galicia Seguros and Prudential Seguros projects. Both VTime systems.
        The difference with the Sancor Seguros project is that while at GIT I was part of the core application development team and at Sancor I was mostly an incident resolution table.
        At GIT I learned about broad topics in the world of insurance such as issues, client portfolio, commissions, billing, shipments to payment methods, imputation, etc.
      </p>
    ),
  },
  {
    date: '2012 - 2013',
    location: 'Sancor Seguros',
    title: 'Ssr Backend Dev',
    image: sancorImage,
    content: (
      <p>
        I worked solving incidents in a development table for VTime of Sancor Seguros.
        I had the opportunity to travel to Santa Fe to meet Sancor Seguros, one of the largest insurance companies in Latin America.
        Here I learned the basics of insurance.
      </p>
    ),
  },
  {
    date: '2008 - 2012',
    location: 'MasterSoft',
    title: 'Junior Dev',
    image: mastersoftImage,
    content: (
      <p>
        I worked as a programmer in a work team. The systems we made were very varied as well as the technology used since it was a software factory.
      </p>
    ),
  },
  {
    date: '2007 - 2008',
    location: 'UOCRA',
    title: 'Junior Dev',
    image: uocraImage,
    content: (
      <p>
        I was hired to make changes to an ex officio cursor administration system that UOCRA imparted together with the National Government.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Santiago Alvarado, Software Development Director',
      text: 'I have worked with Diego on various projects and he has always proven to be an exceptionally talented programmer. His problem-solving skills and dedication to work are impressive, and his attention to detail is unmatched. I am very happy to have had the opportunity to work with him',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Eduardo Marquez, Software Engineer',
      text: 'I have had the pleasure of working with Diego on several occasions and have always been impressed by his technical knowledge and ability to work as a team. He is a great communicator and is always willing to help others. His passion for technology is contagious and always inspires me to be better at my job.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Manuel De La Torre, Software Architect',
      text: 'I have had the opportunity to collaborate with Diego on various projects and have always been impressed by their ability to find creative solutions to complex problems. His work is always of a high quality and his work ethic is unwavering. I feel lucky to have had the opportunity to work with him and learn from him.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can contact me with any of these methods.',
  items: [
    {
      type: ContactType.Email,
      text: 'frehley3000@protonmail.com',
      href: 'mailto:frehley3000@protonmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+54 11 6054 5477',
    },
    {
      type: ContactType.Location,
      text: 'Buenos Aires, City',
      href: 'https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6158238,-58.4332985,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@ace_Zeta',
      href: 'https://www.instagram.com/ace_zeta/',
    },
    {
      type: ContactType.Github,
      text: 'frehley',
      href: 'https://github.com/frehley',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/frehley'},
  /* {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'}, */
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dzuccoli/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ace_zeta/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/frehley3000'},
];;;
