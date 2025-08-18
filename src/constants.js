// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Experience Section Logo's
import zidio from "./assets/company_logo/zidio_development_logo.jpg"

// Education Section Logo's
import rkgit from './assets/education_logo/rkgit_logo.png';
import rpm from './assets/education_logo/rpm_logo.png';
import sddt from './assets/education_logo/sddt_logo.png';

// Project Section Logo's
import face from './assets/work_logo/face.png';
import youtube from './assets/work_logo/youtube.jpg';
import job from './assets/work_logo/job.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: zidio,
      role: "Frontend Developer",
      company: "Zidio Development",
      type: "Internship",
      date: "Aug 2024 - Sep 2024",
      desc: "Designed and developed responsive web interfaces using React.js and Tailwind CSS. Integrated APIs for seamless functionality and optimized UI/UX across devices. Collaborated with the team in an Agile setup to ensure smooth project delivery.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rkgit,
      school: "Raj kumar goel Institute of technology, Ghaziabad",
      date: "Nov 2021 - July 2025",
      grade: "6.79 CGPA",
      degree: "Bachelor of Technology - B.Tech(CSE)",
    },
    {
      id: 1,
      img: rpm,
      school: "RPM Academy, Gorakhpur",
      date: "july 2018 - April 2020",
      grade: "84.8%",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: sddt,
      school: "SDDT Inter College Rudrapur, Gorakhpur",
      date: "july 2016 - March 2018",
      grade: "81.4%",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Face Recognition Attendance System",
      description:
        "Built a real-time attendance tracking system that reduced manual effort by 90%. Implemented facial feature extraction and recognition with 80%+ accuracy for a dataset of 50+ users. Designed a Tkinter-based GUI and integrated automated CSV reporting for attendance logs.",
      image: face,
      tags: ["Python", "OpenCV", "Tkinter", "SQL", "face-recognition library", ],
      github: "https://github.com/Anoopsingh023/Face-Recognition-Attendance-System",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "YouTube Clone (Full-Stack MERN Application)",
      description:
        "Developed a full-stack video platform supporting 10+ core features including (JWT authentication), video uploads (Cloudinary), playlists, subscriptions, search, and dashboard. Built secure RESTful APIs with Mongoose schema modeling, async error handling, and protected endpoints. Deployed frontend & backend on Render and integrated with MongoDB Atlas, handling 20+ video records in cloud storage.",
      image: youtube,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "Tailwind CSS", "JavaScript", "JWT", "Cloudinary", "Render"],
      github: "https://github.com/Anoopsingh023/My-youtube-clone",
      webapp: "https://my-youtube-frontend.onrender.com/",
    },
    {
      id: 2,
      title: "Job Listing Portal",
      description:
      "- Collaborated with a 4-member agile team to develop a Job Listing Portal using React.js and Tailwind CSS, improving UI/UX for 1,000+ job seekers. Implemented responsive and reusable components, reducing page load time by 30% across devices. Integrated RESTful APIs fetching 10+ job listings per day with real-time updates, maintaining 100% data accuracy. Managed branches and pull requests using Git and GitHub for efficient team collaboration.",
      image: job,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "tailwind CSS", "JavaScript", "JWT", "Cloudinary", "Shadcn ui"],
      github: "https://github.com/Anoopsingh023/Job-Listing-Portal",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
  ];  