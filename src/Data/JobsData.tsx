// SearchBar(multiInput)
import {
  IconBriefcase,
  IconMapPin,
  IconRecharging,
  IconSearch,
} from "@tabler/icons-react";

/* ---------- Dropdown Filter Data ---------- */
export const dropdownData = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto",
    ],
  },
  {
    title: "Experience",
    icon: IconBriefcase,
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: IconRecharging,
    options: [
      "Full Time",
      "Part Time",
      "Contract",
      "Freelance",
      "Internship",
    ],
  },
];
const jobList = [
{
jobTitle: "Product Designer",
company: "Meta",
applicants: 25,
experience: "Entry Level",
jobType: "Full-Time",
location: "New York",
package:"14 Lpa",
postedDate: "10",  
description:"amaazonnfjnjfn"
},
{
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "14 LPA",
    postedDate: "10",
    description: "Design intuitive user interfaces and improve user experience across products."
  },
  {
    jobTitle: "Frontend Developer",
    company: "Google",
    applicants: 42,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "San Francisco",
    package: "22 LPA",
    postedDate: "7",
    description: "Build responsive web applications using modern JavaScript frameworks."
  },
  {
    jobTitle: "Backend Developer",
    company: "Amazon",
    applicants: 38,
    experience: "Expert",
    jobType: "Contract",
    location: "Berlin",
    package: "28 LPA",
    postedDate: "5",
    description: "Develop scalable backend services and APIs for high-traffic applications."
  },
  {
    jobTitle: "Data Analyst",
    company: "Microsoft",
    applicants: 30,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "London",
    package: "16 LPA",
    postedDate: "12",
    description: "Analyze business data and generate insights using SQL and BI tools."
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Adobe",
    applicants: 21,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Toronto",
    package: "18 LPA",
    postedDate: "9",
    description: "Create wireframes, prototypes, and visual designs for digital products."
  },
  {
    jobTitle: "Marketing Specialist",
    company: "Salesforce",
    applicants: 19,
    experience: "Intermediate",
    jobType: "Part-Time",
    location: "Sydney",
    package: "12 LPA",
    postedDate: "6",
    description: "Plan and execute digital marketing campaigns to improve brand visibility."
  },
  {
    jobTitle: "DevOps Engineer",
    company: "Netflix",
    applicants: 27,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Los Angeles",
    package: "30 LPA",
    postedDate: "4",
    description: "Manage CI/CD pipelines and cloud infrastructure for scalable systems."
  },
  {
    jobTitle: "Mobile App Developer",
    company: "Uber",
    applicants: 34,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "New York",
    package: "20 LPA",
    postedDate: "8",
    description: "Develop high-performance mobile applications for Android and iOS."
  },
  {
    jobTitle: "HR Executive",
    company: "Infosys",
    applicants: 15,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Delhi",
    package: "8 LPA",
    postedDate: "14",
    description: "Handle recruitment processes and employee engagement activities."
  },
  {
    jobTitle: "Cyber Security Analyst",
    company: "IBM",
    applicants: 29,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "26 LPA",
    postedDate: "3",
    description: "Monitor, detect, and prevent security threats across enterprise systems."
  }
];
export default jobList;
