import {
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  DatabaseZap,
  GraduationCap,
  Megaphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";

export const courses = [
  {
    title: "Complete AI & ML",
    category: "AI",
    duration: "9 Months",
    fee: "₹3,500/month",
    instructor: "Aman Khan",
    icon: BrainCircuit,
    level: "Advanced",
    syllabus: ["Python", "Data Science & Data Analytics", "Automation", "DSA/MySQL", "AI/ML"]
  },
  {
    title: "Complete FullStack Development",
    category: "Web Development",
    duration: "8 Months",
    fee: "₹3,000/months",
    instructor: "Aman Khan",
    icon: BarChart3,
    level: "Advanced",
    syllabus: ["HTML/CSS", "JavaScript ES6+", "Tailwind CSS", "TypeScript", "ReactJS + Redux", "NodeJs", "MongoDB", "ExpressJs", "NextJs", "GIT/GITHUB", "Deployment"]
  },
  {
    title: "Python",
    category: "Programming",
    duration: "2 Months",
    fee: "₹7,500",
    instructor: "Kalpana Yadav",
    icon: BookOpenCheck,
    level: "Beginner",
    syllabus: ["Core Python", "OOP", "Files Handling", "Advanced Python"]
  },
  {
    title: "Django",
    category: "Development",
    duration: "3 Months",
    fee: "₹22,000",
    instructor: "Django Mentor",
    icon: ShieldCheck,
    level: "Intermediate",
    syllabus: ["Django", "DRF", "Auth", "Cloud Deploy"]
  },
  {
    title: "Computer Skills",
    category: "Foundation",
    duration: "3 Months",
    fee: "₹7,500",
    instructor: "Foundation Trainer",
    icon: GraduationCap,
    level: "Beginner",
    syllabus: ["MS Office", "Typing", "Operating System Guide", "Email", "Internet", "Canva"]
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    duration: "3 Months",
    fee: "₹12,000",
    instructor: "Kalpana Yadav",
    icon: Megaphone,
    level: "Beginner",
    syllabus: ["SEO", "Ads", "Analytics", "Campaigns"]
  }
];

export const whyChoose = [
  { title: "Industry Projects", text: "Portfolio-first learning with deployable products.", icon: Rocket },
  { title: "Placement Cell", text: "Interview prep, company connects, and progress tracking.", icon: BriefcaseBusiness },
  { title: "Modern LMS", text: "Notes, assignments, certificates, and quizzes in one portal.", icon: Sparkles },
  { title: "Mentor Support", text: "Small batches, weekly reviews, and practical mentorship.", icon: UsersRound }
];

export const stats = [
  { label: "Placement Support", value: "100%" },
  { label: "Career Courses", value: "09" },
  { label: "Hiring Partners", value: "75+" },
  { label: "Practice Quizzes", value: "1.2k+" }
];

export const stories = [
  {
    name: "Ayesha Khan",
    role: "MERN Developer",
    quote: "Avion helped me move from tutorials to real projects and interviews with confidence."
  },
  {
    name: "Rohan Patel",
    role: "Data Analyst",
    quote: "The dashboards, assignments, and mock interview routine made the placement journey clear."
  },
  {
    name: "Meera Nair",
    role: "Python Intern",
    quote: "The batch structure was focused, modern, and genuinely practical from week one."
  }
];

export const batches = [
  { course: "MERN Stack", date: "01 Jul 2026", mode: "Offline", seats: 8 },
  { course: "AI & ML", date: "08 Jul 2026", mode: "Hybrid", seats: 12 },
  { course: "Digital Marketing", date: "15 Jul 2026", mode: "Online", seats: 10 }
];

export const quizRankings = [
  { rank: 1, name: "Prince V", points: 980 },
  { rank: 2, name: "Zikra K", points: 940 },
  { rank: 3, name: "Mansi V", points: 890 }
];

export const team = [
  { name: "Aman Khan", role: "Director & Tech Head", skills: "AI/ML, Python, React, Node, MongoDB", exp: "7 yrs", media: "/assets/aman-khan.png" },
  { name: "Kalpana Yadav", role: "Manager & Mentor", skills: "Digital Marketing, Python, Web Development", exp: "5 yrs", media: "/assets/kalpana-yadav.png" },
  { name: "Ravi Dubey", role: "Placement Coordinator", skills: "Shopify, HR, Aptitude, Interviews", exp: "8 yrs", media: "/assets/ravi-dubey.png" },
  { name: "Asjad Qadri", role: "Placement Coordinator", skills: "Shopify, HR, Aptitude, Interviews", exp: "6 yrs", media: "/assets/asjad-qadri.png" }
];

export const gallery = [
  {
    title: "AI Workshop",
    type: "Workshop",
    media: "/assets/gallery/ai-workshop.jpg"
  },
  {
    title: "Web Development Bootcamp",
    type: "Workshop",
    media: "/assets/gallery/web-dev-bootcamp.jpg"
  },
  {
    title: "Student Hackathon",
    type: "Event",
    media: "/assets/gallery/student-hackathon.jpg"
  },
  {
    title: "Placement Drive",
    type: "Event",
    media: "/assets/gallery/placement-drive.jpg"
  },
  {
    title: "AI Project Showcase",
    type: "Project",
    media: "/assets/gallery/ai-project-showcase.jpg"
  },
  {
    title: "Web Dev Project Showcase",
    type: "Project",
    media: "/assets/gallery/web-dev-project-showcase.jpg"
  }
];

export const faqs = [
  {
    q: "Can beginners join Avion courses?",
    a: "Yes. Foundation tracks start from basics, while advanced tracks include screening and bridge sessions."
  },
  {
    q: "Do students get certificates?",
    a: "Yes. Certificates are issued after project, attendance, and assessment completion."
  },
  {
    q: "Is placement support included?",
    a: "Placement support, resume reviews, mock interviews, and company-connect preparation are part of career tracks."
  }
];

export const adminChartData = [
  { month: "Jan", students: 36, revenue: 1.8 },
  { month: "Feb", students: 48, revenue: 2.4 },
  { month: "Mar", students: 62, revenue: 3.1 },
  { month: "Apr", students: 78, revenue: 4.2 },
  { month: "May", students: 92, revenue: 5.1 },
  { month: "Jun", students: 116, revenue: 6.8 }
];

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Gallery", to: "/gallery" },
  { label: "Team", to: "/team" },
  { label: "Placements", to: "/placements" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];

export const achievements = [
  { title: "Career-focused curriculum", icon: Target },
  { title: "Verified student lifecycle", icon: BadgeCheck },
  { title: "1000+ student-ready architecture", icon: UsersRound }
];
