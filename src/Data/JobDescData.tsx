import {
  IconBriefcase,
  IconMapPin,
  IconPremiumRights,
  IconRecharging,
} from "@tabler/icons-react";

const card = [
  {
    name: "Location",
    icon: IconMapPin,
    value: "New York",
  },
  {
    name: "Experience",
    icon: IconBriefcase,
    value: "Expert",
  },
  {
    name: "Salary",
    icon: IconPremiumRights,
    value: "48 LPA",
  },
  {
    name: "Job Type",
    icon: IconRecharging,
    value: "Full Time",
  },
];

const skills = [
  "React",
  "Spring Boot",
  "Java",
  "Python",
  "Node.js",
  "MongoDB",
  "Express",
  "Django",
  "PostgreSQL",
];

const desc = `
  <h4>About The Job</h4>
<p>
  Here at UIHUT, we are a passionate, fun-loving, growing team.
  We are looking for passionate programmers who want to solve
  technical challenges and learn and incorporate new technologies
  into their skillset.
</p>

<h4>Responsibilities</h4>
<ul class="list-disc pl-6">
  <li>Design, develop, and maintain scalable web applications</li>
  <li>Write clean, efficient, and well-documented code</li>
  <li>Collaborate with designers and product managers</li>
  <li>Troubleshoot, debug, and optimize application performance</li>
  <li>Stay updated with emerging technologies and best practices</li>
</ul>

<h4>Qualifications and Skill Sets</h4>
<ul class="list-disc pl-6">
  <li>Strong understanding of programming fundamentals</li>
  <li>Experience with modern web technologies and frameworks</li>
  <li>Problem-solving mindset and attention to detail</li>
  <li>Ability to work independently and in a team environment</li>
  <li>Willingness to learn and adapt to new technologies</li>
</ul>
`;
export { card, skills, desc };