import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Discussion Forum",
    category: "Web",
    description: "A full-stack forum app using Angular, Node.js, and MySQL.",
    longDescription:
      "This is a comprehensive full-stack discussion forum web application. It leverages Angular for the front-end, providing an interactive and responsive UI for users to post questions and answers. The backend uses Node.js and Express for API endpoints, with MySQL managing persistent data storage. The app supports user authentication, threaded discussions, and real-time updates, making it an excellent platform for community engagement and knowledge sharing.",
    link: "https://github.com/viji1804/discussion-forum",
  },
  {
    title: "Pneumonia Detection",
    category: "AI",
    description: "Chest X-ray analysis using VGG16, ResNet50 and Grad-CAM.",
    longDescription:
      "This AI-powered pneumonia detection project analyzes chest X-ray images using deep learning models like VGG16 and ResNet50. It applies background removal techniques to enhance image clarity and uses Grad-CAM to provide explainability by highlighting lung areas affected by pneumonia. The system aims to support medical professionals by improving diagnostic accuracy and trust through transparent AI predictions.",
    link: "#",
  },
  {
    title: "Gesture-Controlled Brightness",
    category: "Vision",
    description: "Real-time brightness control using MediaPipe and OpenCV.",
    longDescription:
      "A real-time system that adjusts the screen brightness based on the distance between the thumb and index finger, tracked via MediaPipe’s hand tracking model. OpenCV handles the display and interaction logic. This innovative project enhances user experience by allowing intuitive brightness adjustments without physical buttons, showcasing the potential of computer vision in everyday device control.",
    link: "https://github.com/viji1804/HandGestureBrightnessControl",
  },
  {
    title: "Face Recognition",
    category: "AI",
    description:
      "Implemented a face detection system with necessary libraries for real-time recognition.",
    longDescription:
      "Implemented a face detection system with necessary libraries, enhancing real-time recognition. The system accurately distinguishes and recognizes faces, ensuring seamless user interaction. It demonstrates the practical use of computer vision techniques to deliver robust and efficient face recognition in dynamic environments.",
    link: "#",
  },
  {
    title: "Handwritten Digit Classification",
    category: "AI",
    description:
      "SVM-based handwritten digit recognition using the MNIST dataset.",
    longDescription:
      "This project uses Support Vector Machines (SVM) for handwritten digit recognition with the MNIST dataset. It emphasizes the importance of data preprocessing and demonstrates the effectiveness of SVMs in high-dimensional classification tasks. The model achieves solid accuracy, showcasing classical machine learning in image classification.",
    link: "#",
  },
  {
    title: "Java & Django Applications",
    category: "Web",
    description:
      "Developed Java Swing/AWT apps and Django web apps with HTML/CSS.",
    longDescription:
      "Developed several applications using Java Swing/AWT including Airline Reservation and Student Record Management Systems, as well as Django-based web applications for Library Management. These projects feature clean UI design with HTML and CSS, efficient backend logic, and focus on delivering user-friendly software solutions.",
    link: "#",
  },
];

export function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="p-6 md:p-12 bg-gray-900 min-h-screen text-gray-200 max-w-6xl mx-auto flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        🛠 Projects
      </h2>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              filter === cat
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6 flex-grow">
        {filtered.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-xl shadow-lg p-5 cursor-pointer hover:shadow-blue-500/50 transition-shadow"
            onClick={() => setSelected(proj)}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">
              {proj.title}
            </h3>
            <p className="text-gray-400 text-sm">{proj.description}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-500 italic">
        And yes, this entire fancy portfolio is itself a React project. Because
        why not impress with meta-coding, right? 😉
      </p>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 w-full max-w-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {selected.title}
              </h3>
              <p className="mb-6 text-gray-300 whitespace-pre-line">
                {selected.longDescription}
              </p>
              <a
                href={selected.link}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
