import { IconBriefcase, IconMapPin,IconRecharging,  IconSearch,} from "@tabler/icons-react";

export const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: ["Designer", "Frontend Developer","Backend Developer", "Full Stack Developer", "Product Manager","Marketing Specialist", "Data nalyst","Sales Executive","Content Writer","Customer Support",
       ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: ["Delhi","Mumbai","Bangalore", "New York", "San Francisco", "London", "Berlin","Tokyo", "Sydney", "Toronto",
    ],
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: ["HTML","CSS", "JavaScript", "TypeScript", "React","Angular","Node.js", "Express.js", "Java","Spring Boot","Python","Django",
      "SQL", "PostgreSQL","MongoDB","Git","REST API Development","Testing & Debugging","Agile Methodologies","DevOps","AWS", "Azure","Google Cloud",
    ],
  },
]

export const talents = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    company: "Tech Solutions",
    topskills: ["React", "JavaScript", "CSS", "Java"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    expectedCtc: "₹50-70 LPA",
    location: "New York, USA",
    image: "avatar",
  },
  {
    name: "Priya Sharma",
    role: "Backend Developer",
    company: "Infosys",
    topskills: ["Java", "Spring Boot", "MySQL", "REST API"],
    about:
      "Backend developer with strong experience in building scalable enterprise applications.",
    expectedCtc: "₹18-25 LPA",
    location: "Bangalore, India",
    image: "avatar",
  },
  {
    name: "Amit Verma",
    role: "Full Stack Developer",
    company: "TCS",
    topskills: ["React", "Node.js", "MongoDB", "Express"],
    about:
      "Full stack engineer skilled in MERN stack and cloud-based deployments.",
    expectedCtc: "₹20-30 LPA",
    location: "Pune, India",
    image: "avatar",
  },
  {
    name: "Sarah Williams",
    role: "UI/UX Designer",
    company: "Creative Studio",
    topskills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    about:
      "Passionate UI/UX designer focused on creating intuitive and engaging user experiences.",
    expectedCtc: "₹40-55 LPA",
    location: "London, UK",
    image: "avatar",
  },
  {
    name: "Rahul Mehta",
    role: "Data Analyst",
    company: "Accenture",
    topskills: ["Python", "SQL", "Power BI", "Excel"],
    about:
      "Data analyst experienced in turning raw data into meaningful business insights.",
    expectedCtc: "₹15-22 LPA",
    location: "Hyderabad, India",
    image: "avatar",
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    company: "Amazon",
    topskills: ["Agile", "Roadmapping", "Stakeholder Management", "Analytics"],
    about:
      "Product manager with experience in driving end-to-end product lifecycle.",
    expectedCtc: "₹60-80 LPA",
    location: "Seattle, USA",
    image: "avatar",
  },
  {
    name: "Karthik R",
    role: "DevOps Engineer",
    company: "Wipro",
    topskills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    about:
      "DevOps engineer specializing in cloud infrastructure and automation.",
    expectedCtc: "₹25-35 LPA",
    location: "Chennai, India",
    image: "avatar",
  },
  {
    name: "Neha Gupta",
    role: "QA Engineer",
    company: "Cognizant",
    topskills: ["Selenium", "Manual Testing", "API Testing", "JIRA"],
    about:
      "Quality assurance professional ensuring high-quality software delivery.",
    expectedCtc: "₹12-18 LPA",
    location: "Noida, India",
    image: "avatar",
  },
  {
    name: "Michael Brown",
    role: "Mobile App Developer",
    company: "Appify",
    topskills: ["Flutter", "Dart", "Firebase", "Android"],
    about:
      "Mobile app developer building cross-platform applications with Flutter.",
    expectedCtc: "₹35-50 LPA",
    location: "Toronto, Canada",
    image: "avatar",
  },
  {
    name: "Anjali Patel",
    role: "Cloud Engineer",
    company: "Google",
    topskills: ["GCP", "Terraform", "Linux", "Networking"],
    about:
      "Cloud engineer focused on scalable cloud solutions and infrastructure security.",
    expectedCtc: "₹45-65 LPA",
    location: "San Francisco, USA",
    image: "avatar",
  },
];

export const profile={
    name: "John Doe",
    role: "Frontend Developer",
    company: "Tech Solutions",
    location: "New York, USA",
    about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill:["React", "JavaScript", "CSS"],
    experience:[
        {
            title:"Frontend Developer",
            company:"Tech Solutions",
            location:"New York, USA",
            startDate:"Jan 2020",
            endDate:"Present",
            description:"Developed and maintained the front end of the company's main product using React and Redux."
        }
    ],
    certifications:[
        {
            name:"Certified React Developer",
            issuer:"React Training",
            issueDate:"June 2021",
            certificateId:"RCT-123456"
        }
    ]
}

