import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  yourlogo,
  youtube,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "HIGHLIGHTS",
    url: "#features",
  },
  {
    id: "1",
    title: "Opportunities",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to start",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Quiz",       
    url: "/quiz",        
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Skill Workshops",
  "Learner’s Channel",
  "Hackathons & Datathons",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Hackathon Unlocked🔑",
    text: "Discover how hackathons really work — from team dynamics to final pitches. Demystifying hackathons so you can compete with clarity and confidence.",
    date: "JULY 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: " Competitive Programming Kickstart🚀",
    text: "Master problem-solving skills with Python and sharpen your edge for coding contests.",
    date: "aug 2025",
    status: "progress",
    imageUrl: ,roadmap2
  },
  {
    id: "2",
    title: "GitHub Essentials🌐",
    text: "Learn how to manage code, collaborate with teams, and contribute to open source using GitHub.",
    date: "june 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Competitive Edge in Java💻",
    text: "Sharpen your problem-solving and get contest-ready with hands-on Java practice.",
    date: "AUG 2025",
    status: "progress",
    imageUrl:roadmap4,
    colorful: true,
    
  },
];

export const collabText =
  "We bring together students, mentors, and enthusiasts to work on projects, hackathons, and learning initiatives as a unified community.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Collaboration",
    text: collabText,
  },
  {
    id: "1",
    title: "Structured Learning",
  },
  {
    id: "2",
    title: "Safe & Inclusive Environment",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Datathons",
    description:
      "Datathons focus on data-driven problem solving, enhancing analytical and critical thinking skills.",
    
    features: [
      "Analyze and interpret real-world datasets.",
      "Apply data science for impactful insights.",
      "Enhance analytical and problem-solving skills.",
    ],
  },
  {
    id: "1",
    title: "Workshops",
    description:
      "Workshops provide guided sessions that turn concepts into practical experience",
    
    features: [
      "Learn through guided, hands-on sessions.",
      "Gain practical exposure to new technologies.",
      "Apply concepts directly to projects.",
    ],
  },
  {
    id: "2",
    title: "Hackathon",
    description:
      "Hackathons inspire creativity and teamwork by challenging participants to solve problems within limited time.",
    
    features: [
      "Build innovative projects under time constraints.",
      "Collaborate with peers to solve real problems.",
      "Compete, learn, and showcase your skills.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Learn Anything",
    text: "Quickly explore coding concepts, event details, and learning resources all in one place.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Grow Every Day",
    text: "Level up your skills with every event, workshop, and tutorial CodeShastra offers.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Join the Community",
    text: "Stay connected with fellow coders, mentors, and hackathon participants anytime, anywhere.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Practical Learning",
    text: "Our workshops, hackathons, and projects emphasize applied skills and real-world experience.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Instant Updates",
    text: "Get real-time updates about upcoming events, workshops, and challenges.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Together We Build",
    text: "Hack, code, and create alongside a network of curious minds.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "www.youtube.com/@CodeShastra-w9d",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: youtube,
    url: "https://www.youtube.com/@CodeShastra-w9d",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/code___shastra?utm_source=ig_web_button_share_sheet&igsh=MXNwamNyc2RuYXl2aA==",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "www.youtube.com/@CodeShastra-w9d",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "www.youtube.com/@CodeShastra-w9d",
  },
];
