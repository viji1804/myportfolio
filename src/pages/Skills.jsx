import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Technical Skills",
    color: "#9f7aea", // purple
    skills: [
      "C",
      "C++",
      "Python",
      "Java",
      "SQL",
      "Android Development",
      "HTML",
      "CSS",
      "Django",
      "Swing",
      "Firebase",
      "Machine Learning",
      "JavaScript",
      "TypeScript",
        "Angular",
        "React",
      "MySQL",
    ],
  },
  {
    category: "Soft Skills",
    color: "#f6ad55", // orange
    skills: [
      "Communication",
      "Adaptability",
      "Problem-Solving",
      "Time Management",
      "TeamWork",
      "Event Planning",
      "Fundraising",
      "Organizational Skills",
    ],
  },
  {
    category: "Tools & Presentation",
    color: "#68d391", // green
    skills: [
      "VSCode",
      "Android Studio",
      "Jupyter Notebook",
      "Canva",
      "PowerPoint",
      "Excel",
    ],
  },
];

const bubbleVariants = {
  rest: { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" },
  hover: (color) => ({
    scale: 1.3,
    boxShadow: `0 0 15px ${color}`,
    transition: { type: "spring", stiffness: 300 },
  }),
};

export default function SkillBubbles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 flex flex-col items-center p-10">
      <h2 className="text-4xl font-extrabold mb-12 tracking-wide select-none">
        Technical & Interpersonal Mastery
      </h2>

      {skillCategories.map(({ category, skills, color }) => (
        <section key={category} className="mb-16 w-full max-w-5xl">
          <h3 className="text-2xl font-bold mb-6" style={{ color }}>
            {category}
          </h3>

          <div className="flex flex-wrap gap-5 justify-center">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="bg-gray-800 rounded-full px-6 py-3 cursor-pointer select-none"
                style={{ border: `2px solid ${color}`, userSelect: "none" }}
                variants={bubbleVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                custom={color}
                title={skill}
              >
                <span className="font-semibold tracking-wide">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-16 max-w-xl text-center text-gray-400 italic select-none">
        And yes, this entire skill ecosystem is lovingly built in React —
        because why wouldn't it be? 😉
      </p>
    </div>
  );
}
