import React from "react";

export function Resume() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-6 md:p-12 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Vijayalakshmi S</h1>

      {/* Download/View Resume Button */}
      <div className="text-center mb-10">
        <a
          href="https://drive.google.com/file/d/1OxNwnau0t9AiC3AbBJ6-rxNBipG1LUAx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
        >
          📄 View / Download Resume
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-between mb-10 space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base">
        <div>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:viji04sivakumar@gmail.com"
              className="text-blue-400 hover:underline"
            >
              viji04sivakumar@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 9865246253
          </p>
        </div>
        <div className="space-y-1">
          <p>
            <a
              href="https://linkedin.com/in/vijayalakshmi-s-535666299"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/vijayalakshmi-s-535666299
            </a>
          </p>
          <p>
            <a
              href="https://github.com/viji1804"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/viji1804
            </a>
          </p>
        </div>
      </div>

      {/* PROFILE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Profile
        </h2>
        <p>
          Passionate student deeply committed to continuous learning and eager
          to tackle challenges with resilience in the tech industry. I am
          enthusiastic about contributing and advancing professionally.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Education
        </h2>
        <div className="space-y-3">
          <div>
            <p>
              <strong>
                B.Tech Computer Science Engineering (AI & DS), Sastra Deemed
                University
              </strong>
            </p>
            <p className="text-gray-400 text-sm">
              Oct 2022 – Jun 2026 | Thanjavur, India
            </p>
            <p className="text-gray-300">
              CGPA: 8.82/10 | Minor: Supply Chain & Project Management
            </p>
          </div>
          <div>
            <p>
              <strong>Chettinad Vidya Mandir</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>AISSE - 96.6%</li>
              <li>AISSCE - 95%</li>
              <li>JEE Mains - 86.19 percentile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Technical</h3>
            <p>
              C, C++, Python, Java, SQL, Android Development, HTML, CSS, Django,
              Swing, Firebase, Machine Learning, Javascript, Typescript,
              Angular, MySQL
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Soft Skills</h3>
            <p>
              Communication, Adaptability, Problem-Solving, Time Management,
              TeamWork, Event Planning, Fundraising, Organizational Skills
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Tools</h3>
            <p>
              VSCode, Android Studio, Jupyter Notebook, Canva, PowerPoint, Excel
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Experience
        </h2>
        <div>
          <h3 className="font-semibold">App Developer Intern, NIT Trichy</h3>
          <p className="text-gray-400 text-sm mb-2">Jun 2024 – Aug 2024</p>
          <p>
            At NIT-Trichy under Dr. PJA Alphonse, developed a grievance
            application for the Government of Tamil Nadu with a team of three.
            This project enhanced my skills in database connectivity, front-end
            and back-end development, and application design.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Projects
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Discussion Forum</h3>
            <p>
              Developed a full-stack discussion forum web application using
              TypeScript, Node.js, Express, MySQL, and Angular for interactive
              Q&A functionality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Background-Aware Pneumonia Detection with Explainable AI
            </h3>
            <p>
              Used VGG16 and ResNet50 with background removal to improve
              pneumonia detection from chest X-rays. Grad-CAM provides
              explainability by highlighting infected lung areas, enhancing
              diagnostic accuracy and clinical trust.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Gesture-Controlled Brightness</h3>
            <p>
              A real-time system that adjusts screen brightness based on
              thumb-index finger distance, using MediaPipe for tracking and
              OpenCV for display.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Certifications
        </h2>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Matrimorphosis Training Program</strong> (Dec 2024 – Apr
            2025)
            <br />
            Selected for the Campus to Corporate (C2C) Intervention Technology
            Program by Matrimony.com focusing on corporate employment skills and
            industry-relevant technologies.
          </li>
          <li>
            <strong>PwC Data Analytics Launchpad (Ongoing)</strong>
            <br />
            Comprehensive training on data analytics tools, techniques, and
            problem-solving.
          </li>
          <li>
            Supervised Machine Learning: Regression and Classification,
            DeepLearning.AI & Stanford University
          </li>
          <li>Introduction to Data Science by CISCO Networking Academy</li>
          <li>Machine Learning Onramp by MATLAB</li>
          <li>MILMUN’19, CVMMUN’19</li>
          <li>
            TMAQ - “Quiz on Metals and Materials” by IIM (appreciation) -
            2019-20
          </li>
        </ul>
      </section>

      {/* CLUBS & ACTIVITIES */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Clubs & Activities
        </h2>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>Tech E - App Development Cluster</strong>: Member & workshop
            facilitator of the Developer Unit
          </li>
          <li>
            <strong>Association of Computing Engineers</strong>: Member of
            Operations and Control Cluster, organized college events and
            resource allocation
          </li>
          <li>
            <strong>KS Upahaar</strong>: Organized fundraisers and volunteer
            events supporting community causes
          </li>
          <li>
            <strong>Daksh Infrastructure and Logistics</strong>: Maintained
            infrastructure and coordinated logistics with cross-functional teams
          </li>
        </ul>
      </section>

      {/* LANGUAGES */}
      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-4">
          Languages
        </h2>
        <p>Tamil | Telugu | English | Hindi</p>
      </section>
    </div>
  );
}

export default Resume;
