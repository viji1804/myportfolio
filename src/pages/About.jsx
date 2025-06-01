import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUniversity,
  FaBriefcase,
  FaUsers,
  FaProjectDiagram,
  FaSchool,
  FaBullhorn,
  FaCertificate,
} from "react-icons/fa";

const educationAndExperience = [
  {
    title: "Grade 10 – AISSE",
    subtitle: "Chettinad Vidya Mandir",
    date: "2020",
    description:
      "Graduated with distinction, scoring an impressive 96.6% in CBSE Board Exams.",
    icon: <FaSchool />,
  },
  {
    title: "Grade 12 – AISSCE",
    subtitle: "Chettinad Vidya Mandir",
    date: "2022",
    description:
      "Achieved 95% in CBSE Board Exams with a focus on Computer Science.",
    icon: <FaSchool />,
  },
  {
    title: "B.Tech in AI & DS",
    subtitle: "SASTRA Deemed University",
    date: "2022 – 2026",
    description:
      "CGPA: 8.82/10. Minor in Supply Chain & Project Management. Honed skills in ML, DL & Software Engineering.",
    icon: <FaUniversity />,
  },
  {
    title: "Intern – App Developer",
    subtitle: "NIT Trichy",
    date: "Jun 2024 – Aug 2024",
    description:
      "Developed a grievance redressal app for the TN Government using React Native & Firebase.",
    icon: <FaBriefcase />,
  },
    {
        title: "Matrimorphosis Training Program",
        subtitle: "Campus to Corporate (C2C), Matrimony.com",
        date: "Dec 2024 – Apr 2025",
        description:
          "Selected for C2C by Matrimony.com. Focused on corporate readiness and industry-relevant tech skills via structured mentorship.",
        icon: <FaBullhorn />,
      },
      {
        title: "PwC Data Analytics Launchpad",
        subtitle: "Ongoing",
        date: "2025",
        description:
          "Comprehensive training in data analytics, covering tools, techniques, and real-world problem-solving practices from PwC experts.",
        icon: <FaCertificate />,
      },
];

const extracurriculars = [
  {
    title: "KS Upahaar Volunteer",
    subtitle: "Community Fundraising",
    date: "2023 – Present",
    icon: <FaUsers />,
    details:
      "Organized and led fundraising events within the college, creating outreach content and personally visiting orphanages and shelter homes to support and engage with underprivileged communities.",
  },
  {
    title: "Member of Association of Computing Engineers",
    subtitle: "Operations and Control Cluster",
    date: "2024 – Present",
    icon: <FaUsers />,
    details:
      "Handled logistics and operations for AI club events, fostering student engagement.",
  },
  {
    title: "Tech-E Cluster",
    subtitle: "App Dev Unit",
    date: "2024 – Present",
    icon: <FaUsers />,
    details:
      "Collaborated on cross-platform internal tools improving campus tech efficiency.",
  },
  {
    title: "Daksh Infra Team",
    subtitle: "Infra & Logistics",
    date: "Ongoing",
    icon: <FaUsers />,
    details:
      "Orchestrated infra setup for SASTRA’s flagship tech fest—Daksh, ensuring smooth execution.",
  },
];

export default function About() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Vertical Timeline */}
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <VerticalTimeline lineColor="#8b5cf6">
        {educationAndExperience.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#1f2937", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1f2937" }}
            date={item.date}
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={item.icon}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <h4 className="text-md font-medium text-purple-300">
              {item.subtitle}
            </h4>
            <p className="text-sm text-gray-300 mt-2">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Horizontal Timeline */}
      <h3 className="text-3xl font-bold text-center mt-20 mb-6 text-pink-600">
        Extracurriculars & Activities
      </h3>
      <div className="flex flex-wrap justify-center gap-10 px-6 md:px-16 relative">
        <div className="w-full h-1 bg-pink-400 absolute top-6 z-0" />
        {extracurriculars.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center group relative z-10"
          >
            <div className="bg-pink-500 text-white p-4 rounded-full shadow-lg mb-2">
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
            <span className="text-xs text-pink-700 mt-1">{item.date}</span>

            {/* Tooltip on hover */}
            <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 w-64 bg-black text-white text-sm p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 z-50">
              {item.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
