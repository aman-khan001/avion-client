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
    title: "Full Stack Development",
    category: "Development",
    duration: "6 Months",
    fee: "₹45,000",
    instructor: "Avion Mentor Team",
    icon: Code2,
    level: "Advanced",
    syllabus: ["React", "Node.js", "MongoDB", "Deployment"]
  },
  {
    title: "MERN Stack",
    category: "Development",
    duration: "4 Months",
    fee: "₹35,000",
    instructor: "Senior MERN Trainer",
    icon: DatabaseZap,
    level: "Intermediate",
    syllabus: ["Express APIs", "JWT Auth", "React Query", "Projects"]
  },
  {
    title: "AI & ML",
    category: "AI",
    duration: "5 Months",
    fee: "₹52,000",
    instructor: "AI Research Mentor",
    icon: BrainCircuit,
    level: "Advanced",
    syllabus: ["Python", "Pandas", "Models", "Evaluation"]
  },
  {
    title: "Data Science",
    category: "Data",
    duration: "5 Months",
    fee: "₹48,000",
    instructor: "Data Mentor",
    icon: BarChart3,
    level: "Intermediate",
    syllabus: ["SQL", "Statistics", "Dashboards", "Case Studies"]
  },
  {
    title: "Python",
    category: "Programming",
    duration: "2 Months",
    fee: "₹15,000",
    instructor: "Python Trainer",
    icon: BookOpenCheck,
    level: "Beginner",
    syllabus: ["Core Python", "OOP", "Files", "Automation"]
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
    duration: "2 Months",
    fee: "₹9,000",
    instructor: "Foundation Trainer",
    icon: GraduationCap,
    level: "Beginner",
    syllabus: ["MS Office", "Typing", "Email", "Internet"]
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    duration: "3 Months",
    fee: "₹24,000",
    instructor: "Growth Mentor",
    icon: Megaphone,
    level: "Beginner",
    syllabus: ["SEO", "Ads", "Analytics", "Campaigns"]
  },
  {
    title: "Interview Preparation",
    category: "Career",
    duration: "1 Month",
    fee: "₹8,000",
    instructor: "Placement Cell",
    icon: BriefcaseBusiness,
    level: "Beginner",
    syllabus: ["Resume", "Aptitude", "Mock Interviews", "HR"]
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
  { rank: 1, name: "Aarav S", points: 980 },
  { rank: 2, name: "Nisha K", points: 940 },
  { rank: 3, name: "Imran P", points: 910 }
];

export const team = [
  { name: "Rahul Verma", role: "Full Stack Trainer", skills: "React, Node, MongoDB", exp: "8 yrs" },
  { name: "Sneha Iyer", role: "AI Mentor", skills: "Python, ML, Analytics", exp: "7 yrs" },
  { name: "Karan Shah", role: "Placement Coordinator", skills: "HR, Aptitude, Interviews", exp: "6 yrs" }
];

export const gallery = [
  "Workshop Lab",
  "Placement Drive",
  "Hackathon Night",
  "Demo Day",
  "Career Session",
  "Code Review"
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
