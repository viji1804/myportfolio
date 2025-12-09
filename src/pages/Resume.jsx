import React from "react";

export default function Resume() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-6 md:p-12 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center">Vijayalakshmi S</h1>

      <div className="text-center text-sm text-gray-400 mb-6">
        viji04sivakumar@gmail.com · +91 9865246253
      </div>

      {/* Download/View Resume Button */}
      <div className="text-center mb-6">
        <a
          href="https://drive.google.com/file/d/1hVrSm_NdiJPepudLxcOK0Y5j3QElEOWI/view?usp=drive_link"
          onClick={(e) => e.preventDefault()}
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
          title="Resume uploaded by user"
        >
          📄 View / Download Resume
        </a>
        <div className="text-xs text-gray-500 mt-2">
          (Original PDF provided by user.)
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row justify-between mb-8 space-y-3 md:space-y-0 md:space-x-6 text-sm md:text-base">
        <div>
          <a
            href="https://linkedin.com/in/vijayalakshmi-s-535666299"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline block"
          >
            linkedin.com/in/vijayalakshmi-s-535666299
          </a>
          <a
            href="https://github.com/viji1804"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline block"
          >
            github.com/viji1804
          </a>
        </div>
        <div className="text-right text-gray-400">
          <div>Portfolio</div>
        </div>
      </div>

      {/* PROFILE */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Profile
        </h2>
        <p className="text-gray-300">
          Driven and detail-oriented Computer Science Engineering student
          specializing in Artificial Intelligence & Data Science. Experienced in
          building end-to-end software systems and machine learning solutions
          with a focus on interpretability and deployment. Strong foundation in
          algorithms, data structures and software engineering. Proven ability
          to deliver production-ready features during internships and academic
          projects, and to adapt quickly to new technologies.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Education
        </h2>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Sastra Deemed University</p>
            <p className="text-gray-400 text-sm">
              B.Tech in Computer Science Engineering (AI & DS) · Oct 2022 – Jun
              2026
            </p>
            <p className="text-gray-300">
              CGPA: 8.80 / 10 · Minor: Supply Chain & Project Management
            </p>
          </div>
          <div>
            <p className="font-semibold">Chettinad Vidya Mandir, Karur</p>
            <p className="text-gray-300 text-sm">
              Grade 10: 96.6% · Grade 12: 95%
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Experience
        </h2>
        <div>
          <h3 className="font-semibold">
            Software Engineering Intern — App Developer, NIT Trichy
          </h3>
          <p className="text-gray-400 text-sm mb-2">Jun 2024 – Aug 2024</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Designed and developed a production-oriented grievance redressal
              application using Java, Firebase Auth, Firebase Realtime Database
              and RESTful patterns.
            </li>
            <li>
              Implemented role-based access (citizen, officer, admin), complaint
              lifecycle (submit, assign, escalate, resolve) and real-time
              event-driven updates to reduce manual sync.
            </li>
            <li>
              Wrote efficient DB listeners and modular code to support
              maintainability and future feature additions.
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Selected Projects
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Discussion Forum Web App</h3>
            <p className="text-gray-300">
              Built a scalable forum platform using Node.js, Express, MySQL and
              Angular. Implemented authentication, role-based permissions,
              posting/commenting, search and pagination. Designed normalized DB
              schema and REST APIs; improved UX with reactive forms and
              lazy-loading.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Background-Aware Pneumonia Detection
            </h3>
            <p className="text-gray-300">
              Compared CNN classifiers (VGG16, ResNet50) with explicit
              background removal to focus learning on lung regions. Performed
              segmentation, normalization and augmentation; handled class
              imbalance with class weights/oversampling; evaluated using
              accuracy, precision, recall, F1 and confusion matrices; used
              Grad-CAM for interpretability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Real-Time Plant Disease Detection</h3>
            <p className="text-gray-300">
              Trained YOLOv8 on PlantVillage dataset of 38 classes; deployed a
              Gradio web demo; performed augmentation, anchor tuning and LR
              scheduling to improve mAP and recall.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Hand Gesture Volume Control</h3>
            <p className="text-gray-300">
              Real-time gesture controller using MediaPipe Hands + OpenCV;
              mapped fingertip distance to OS-level volume control and optimized
              landmark smoothing to reduce jitter.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Certifications
        </h2>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
          <li>
            Matrimorphosis Training (Matrimony.com) — Campus-to-Corporate
            program; Score: 318/340.
          </li>
          <li>
            PwC Data Analytics Launchpad — Hands-on analytics projects and
            dashboards.
          </li>
          <li>
            Supervised Machine Learning — DeepLearning.AI & Stanford University.
          </li>
          <li>Introduction to Data Science — CISCO Networking Academy.</li>
          <li>Machine Learning Onramp — MATLAB.</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold">Languages & Frameworks</h4>
            <p className="text-gray-300">
              Python, Java, C, C++, JavaScript, TypeScript, Node.js, Angular,
              TensorFlow/Keras
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Databases & Cloud</h4>
            <p className="text-gray-300">
              MySQL, Firebase (Realtime DB, Auth), Firebase Hosting
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Tools & Libraries</h4>
            <p className="text-gray-300">
              OpenCV, MediaPipe, YOLOv8, Git, Jupyter Notebook, Android Studio,
              VS Code
            </p>
          </div>
        </div>
      </section>

      {/* CLUBS & ACTIVITIES */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Clubs & Activities
        </h2>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
          <li>
            Tech-E (App Dev Cluster) — Conducted Android & web dev workshops;
            mentored juniors.
          </li>
          <li>
            Association of Computing Engineers — Coordinated events, hackathons
            and resource allocation.
          </li>
          <li>KS Upahaar — Led fundraising and community outreach.</li>
          <li>
            Daksh Infra & Logistics — Managed infrastructure and event
            logistics.
          </li>
        </ul>
      </section>

      {/* COURSES & LANGUAGES */}
      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1 mb-3">
          Relevant Courses & Languages
        </h2>
        <p className="text-gray-300 text-sm mb-2">
          Machine Learning, Deep Learning, Pattern Recognition, Data Mining,
          DSA, DBMS, OS, Computer Networks, Web Development, Time Series &
          Predictive Analytics
        </p>
        <p className="text-gray-300">
          Languages: Tamil | Telugu | English | Hindi
        </p>
      </section>
    </div>
  );
}
