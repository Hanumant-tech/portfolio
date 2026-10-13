// Edit this file to update the whole portfolio. Items marked TODO need your input.

export const profile = {
  name: "Hanumant Kshirsagar",
  firstName: "Hanumant",
  lastName: "Kshirsagar",
  role: "Computer Engineering student building with",
  rotating: ["AI/ML", "Computer Vision", "IoT", "Python", "Flask", "React"],
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Hanumant-tech",
  linkedin: "https://www.linkedin.com/in/hanumantkshirsagar/",
  email: "kshirsagarhanumant388@gmail.com",
  phone: "+91 95296 31909",
  resume: "\hanumant_kshirsagar_resume_01.pdf",
  photo: "/images/profile-photo.jpg", // falls back to initials if missing
};

export const about = {
  paragraphs: [
    {
      before: "I'm ",
      bold: "Hanumant Vitthal Kshirsagar",
      after:
        ", a final-year Computer Engineering student who applies machine learning, computer vision and data processing to real problems, from air-quality sensing to satellite imagery.",
    },
    {
      before: "I spent summer 2026 as an AI/ML intern at ",
      bold: "Space Applications Centre (SAC), ISRO",
      after:
        ", restoring blurred Cartosat-2E satellite images with blind deconvolution and deep learning.",
    },
    {
      before: "My IoT work on environmental monitoring led to a paper at ",
      bold: "IEEE I2ITCON 2026",
      after:
        ". I'm looking for an entry-level role where I can contribute to real-world projects and keep learning.",
    },
  ],
  education: [
    {
      school: "AISSMS Institute of Information Technology",
      detail: "B.Tech. in Computer Engineering",
      score: "CGPA 9.09 / 10",
      period: "2023 – 2027",
    },
    {
      school: "Dada Patil College, Karjat",
      detail: "Higher Secondary (12th), MSBSHSE",
      score: "82.17%",
      period: "2022",
    },
    {
      school: "Shree Chhatrapati Shivaji Vidyalaya, Veet, Karmala",
      detail: "Secondary (10th), MSBSHSE",
      score: "94.80%",
      period: "2020",
    },
  ],
  stack: [
    {
      group: "Languages",
      items: ["Python", "Java", "C++", "SQL", "JavaScript"],
    },
    {
      group: "AI / ML",
      items: ["Machine Learning", "Deep Learning", "Computer Vision", "Image Restoration", "Pandas", "NumPy"],
    },
    {
      group: "Web & Backend",
      items: ["HTML5", "CSS3", "React.js", "Express.js", "Flask", "FastAPI", "PHP"],
    },
    {
      group: "Databases & Cloud",
      items: ["MySQL", "SQLite", "MongoDB", "Firebase"],
    },
    {
      group: "IoT",
      items: ["ESP32", "PMS5003", "MQ-series gas sensors", "DHT22"],
    },
    {
      group: "Data & Tools",
      items: ["Matplotlib", "Power BI", "Tableau", "Excel", "Git", "GitHub", "VS Code", "Jupyter"],
    },
  ],
};

export type Job = {
  company: string;
  role: string;
  period: string;
  place?: string;
  points: string[];
  skills: string[];
};

export const experience: Job[] = [
  {
    company: "Space Applications Centre, ISRO",
    role: "AI/ML Intern",
    period: "1 Jun 2026 – 28 Aug 2026",
    place: "Ahmedabad",
    points: [
      "Preprocessed and restored high-resolution panchromatic imagery from the Cartosat-2E satellite.",
      "Worked on PSF/MTF estimation, blind deconvolution and deep-learning-based image deblurring.",
      "Evaluated restoration results with quantitative image-quality metrics.",
      "Gained hands-on experience in satellite image processing, computer vision and remote sensing.",
    ],
    skills: ["Python", "Deep Learning", "Computer Vision", "Blind Deconvolution", "Remote Sensing", "Image Restoration"],
  },
  {
    company: "Infosys Springboard",
    role: "Web Development Intern",
    period: "Internship program", // TODO: add dates, e.g. "Jan 2025 – Mar 2025"
    points: [
      "Completed industry-oriented training in web development.",
      "Worked on real-world projects, improving problem-solving and technical skills.",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  preview: "ecomind" | "fire" | "market";
  // To use a real screenshot instead of the built-in preview, add image: "/images/name.png" (put the file in public/images).
  image?: string;
  github?: string; // TODO: add the repository link for each project to show the GitHub button
  live?: string; // TODO: add the live demo link
};

export const projects: Project[] = [
  {
    title: "EcoMind",
    blurb:
      "An air-quality and environmental monitoring platform. An ESP32 reads particulate, gas, temperature and humidity sensors; a Flask backend stores the data and a machine-learning model rates conditions as Safe, Moderate or Risky. A live web dashboard shows alerts and admin views. Built with a team of 3 under Mr. Sugat Pawar.",
    tags: ["ESP32", "Flask", "Machine Learning", "Firebase", "JavaScript"],
    preview: "ecomind",
    image: "/images/ecomind.png",   
  },
  {
    title: "Farmer Marketplace",
    blurb:
      "A MERN-stack platform that connects farmers directly with buyers. Farmers list products with price, location and images; buyers browse nearby items and order. Includes role-based login (farmer, buyer, admin), a cart, order tracking and an admin dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    preview: "market",
      image:"/images/farmer_market.png",
  },
  {
    title: "Online Fire Reporting System",
    blurb:
      "A web app where people report fire incidents with location and details. Alerts reach fire departments in real time, and admins can track and manage every report.",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    preview: "fire",
      image: "/images/fire_report.png",   
  },
];

export const research = {
  title: "An IoT-Based Machine Learning Framework for Environmental Quality Assessment and Human Living Comfort Prediction",
  venue: "IEEE I2ITCON 2026",
  type: "Conference paper",
  meta: "4 authors · Mentor: Mr. Sugat Pawar",
  summary:
    "Most environmental monitors use costly fixed stations and report pollution levels without asking whether people are comfortable or at risk. This framework pairs an ESP32 sensing node with cloud storage and machine learning to assess both.",
  details: [
    "Collects PM2.5, NO2, CO, O3, temperature and humidity, and sends the data to Firebase.",
    "A WHO-guided weighted risk score labels conditions as Safe, Moderate or Risky.",
    "Compares Logistic Regression, Random Forest, SVM and KNN classifiers.",
    "A sensor-failure ablation study tests how well the sensor-fusion model tolerates faults.",
  ],
  result: { value: "99.22%", label: "accuracy with Random Forest, the best model (F1-score 99.24%)" },
  tags: ["Machine Learning", "IoT", "ESP32", "FastAPI", "Firebase", "Predictive Analytics"],
};

export const achievements = [
  {
    title: "AI/ML Internship, SAC, ISRO",
    detail: "Selected for the AI/ML internship at Space Applications Centre, Ahmedabad (2026).",
  },
  {
    title: "Paid internship, CAIR, DRDO",
    detail: "Selected for a paid internship at the Centre for Artificial Intelligence and Robotics, Bengaluru (2026).",
  },
  {
    title: "Design patent",
    detail: "Farm Monitoring AI-Machine, Registered Design No. 476772-001, Indian Patent Office (February 2026).",
  },
  {
    title: "Smart India Hackathon",
    detail: "Top 10 among 160+ teams.",
  },
  {
    title: "Techthon 3.0",
    detail: "Runner-up in the Environment domain at the national-level event.",
  },
  {
    title: "MKCL certification",
    detail: "Mobile App Development and Mastering UI with HTML and CSS. 120-hour course, scored 92/100, 4 academic credits.",
  },
];

export const leadership = [
  { role: "Technical Head", org: "National Service Scheme (NSS)", period: "2025 – present" },
  { role: "Discipline & Security Coordinator", org: "Computer Engineering Students Association (CESA)", period: "2025 – present" },
  { role: "Member", org: "ACM Student Chapter", period: "2025 – present" },
];

export const sports = ["District-level Kho-Kho player", "District-level Kabaddi player", "College Kabaddi team member"];
