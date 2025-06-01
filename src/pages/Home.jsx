import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const TerminalLine = ({ command = "", output = "", isActive }) => {
  const [typedCommand, setTypedCommand] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);
  const typingSpeed = 30;

  useEffect(() => {
    let cancelled = false;
    if (!isActive || doneTyping) return;

    const typeCommand = async () => {
      let cmd = "";
      for (let i = 0; i < command.length; i++) {
        if (cancelled) return;
        cmd += command[i];
        setTypedCommand(cmd);
        await new Promise((res) => setTimeout(res, typingSpeed));
      }
      setDoneTyping(true);
    };

    typeCommand();

    return () => {
      cancelled = true;
    };
  }, [command, isActive, doneTyping]);

  return (
    <div className="mb-4">
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-green-400 font-mono"
      >
        <span className="text-cyan-400">❯</span> {typedCommand}
      </motion.p>
      {doneTyping && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-gray-300 font-mono pl-4"
        >
          {output}
        </motion.p>
      )}
    </div>
  );
};

function Home() {
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true, margin: "-100px" });

  const lines = [
    { command: "whoami", output: "Vijayalakshmi S, aka Viji" },
    {
      command: "cat vision.txt",
      output:
        "Turning complex problems into elegant tech — with full-stack power, AI curiosity, and a human-centered heart.",
    },
    {
      command: "skills --list",
      output: "Refer to the skills section for the full categorized stack.",
    },
    {
      command: "clubs --active",
      output:
        '["KS Upahaar 🤝", "Daksh Infra & Logistics ⚙️", "E cell Developer Unit 💡", "ACE 🎯"]',
    },
    {
      command: "projects --highlights",
      output:
        'Major projects listed below ↓ — see full details in the projects section. ["Face Recognition Attendance", "Gesture-Controlled Volume", "Discussion Forum"]',
    },
    {
      command: "mission",
      output:
        "To blend technology with purpose — designing smarter systems, more inclusive interfaces, and impactful innovations.",
    },
    {
      command: "fun-facts",
      output:
        'user.viji.preferences = { theme: "dark 🌑", open tabs count: "dont ask ", leisure: "binge watch📺", hobby: "debugging bugs 🐞 and music" }',
    },
    {
      command: 'echo "Always exploring. Always building. Always learning."',
      output: "Always exploring. Always building. Always learning.",
    },
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView || visibleLines >= lines.length) return;

    const commandLength = lines[visibleLines].command.length;
    const delayAfterTyping = 500;

    const timeout = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, commandLength * 30 + delayAfterTyping);

    return () => clearTimeout(timeout);
  }, [visibleLines, isInView, lines]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-b from-gray-900/90 to-gray-800/70 backdrop-blur-md">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-transparent overflow-hidden">
          {/* Hero Section */}
          <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-transparent overflow-hidden">
            <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-tr from-[#0f172a]/30 to-[#1e293b]/30 rounded-xl blur-lg" />

            <section className="relative h-screen bg-transparent overflow-hidden">
              {/* Background blur */}
              <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-tr from-[#0f172a]/30 to-[#1e293b]/30 rounded-xl blur-lg" />

              {/* Content container */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                {/* Animated Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md"
                >
                  Hi, I'm Vijayalakshmi{" "}
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="inline-block text-4xl"
                  >
                    👩‍💻
                  </motion.span>
                </motion.h1>

                {/* Subheading */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl sm:text-2xl text-cyan-400 font-medium mb-6 mt-4"
                >
                  Clean code, curious mind, and coffee close at hand.
                </motion.h2>

                {/* Typing Animation */}
                <TypeAnimation
                  sequence={[
                    "Engineering intuitive tech experiences",
                    1500,
                    "Building intelligent systems with purpose",
                    1500,
                    "Exploring the depths of artificial intelligence",
                    1500,
                    "Turning complex problems into clean code",
                    1500,
                    "Learning, building, and iterating every day",
                    1500,
                  ]}
                  wrapper="p"
                  speed={40}
                  repeat={Infinity}
                  className="text-gray-300 text-base sm:text-lg mb-8 font-mono"
                />

                {/* Scroll Indicator */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-cyan-300 flex flex-col items-center"
                >
                  <p className="text-xs font-mono tracking-widest animate-pulse mb-1">
                    ↓ Scroll to explore ↓
                  </p>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                  >
                    <svg
                      className="w-5 h-5 text-cyan-300 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </section>
        </section>

        {/* Terminal-style Bio Section */}
        <section
          id="about"
          ref={terminalRef}
          className="bg-transparent text-white px-6 py-20 relative z-10 max-w-3xl mx-auto"
        >
          <div className="bg-[#0f1117]/90 p-6 rounded-lg shadow-lg border border-gray-700 font-mono backdrop-blur-sm">
            <h2 className="text-2xl text-cyan-400 mb-6">~/about</h2>
            {isInView &&
              lines.map((line, index) => (
                <TerminalLine
                  key={index}
                  command={line.command}
                  output={line.output}
                  isActive={index === visibleLines}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
