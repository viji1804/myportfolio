import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// TypingText component
const TypingText = ({ text = "", speed = 55, className = "" }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (typeof text !== "string") {
      setDisplayed("");
      return;
    }

    setDisplayed("");
    let index = 0;
    let typingTimeout;
    let initialDelay;

    const type = () => {
      if (index < text.length) {
        setDisplayed((prev) => prev + text.charAt(index));
        index++;
        typingTimeout = setTimeout(type, speed);
      }
    };

    // Add this delay to avoid hydration issues
    initialDelay = setTimeout(type, 80);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(typingTimeout);
    };
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};


// Terminal line display
const TerminalLine = ({ command = "", output = "" }) => (
  <div className="mb-4">
    <p className="text-green-400 font-mono">
      <span className="text-cyan-400">❯</span>{" "}
      <TypingText text={command} speed={55} />
    </p>
    {output && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: command.length * 0.055 + 0.2 }}
        className="text-gray-300 font-mono pl-4"
      >
        <TypingText text={output} speed={40} />
      </motion.p>
    )}
  </div>
);

// Main Home component
function Home() {
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Gradient Background Container */}
      <div className="flex-grow bg-gradient-to-b from-gray-900/90 to-gray-800/70 backdrop-blur-md">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-transparent overflow-hidden">
          <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-tr from-[#0f172a]/30 to-[#1e293b]/30 rounded-xl blur-lg" />

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md z-10"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 bg-black/50 px-5 py-4 rounded-md shadow-inner border border-gray-700 max-w-xl z-10 font-mono text-gray-200 text-base md:text-lg relative"
          >
            <TypingText
              text="&nbsp;Clean code, curious mind, and coffee close at hand."
              speed={35}
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 text-cyan-300 z-10 flex flex-col items-center"
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
        </section>

        {/* Terminal-style Bio Section */}
        <section
          id="about"
          ref={terminalRef}
          className="bg-transparent text-white px-6 py-20 relative z-10 max-w-3xl mx-auto"
        >
          <div className="bg-[#0f1117]/90 p-6 rounded-lg shadow-lg border border-gray-700 font-mono backdrop-blur-sm">
            <h2 className="text-2xl text-cyan-400 mb-6">~/about</h2>

            {isInView && (
              <>
                <TerminalLine
                  command="&nbsp;whoami"
                  output="&nbsp;Vijayalakshmi S, aka Viji"
                />
                <TerminalLine
                  command="\&nbsp;cat vision.txt"
                  output="&nbsp;Turning complex problems into elegant tech — with full-stack power, AI curiosity, and a human-centered heart."
                />
                <TerminalLine
                  command="&nbsp;skills --list"
                  output="&nbsp;Refer to the skills section for the full categorized stack."
                />
                <TerminalLine
                  command="&nbsp;clubs --active"
                  output='&nbsp;["KS Upahaar 🤝", "Daksh Infra & Logistics ⚙️", "E cell Developer Unit 💡", "ACE 🎯"]'
                />
                <TerminalLine
                  command="&nbsp;projects --highlights"
                  output='&nbsp;Major projects listed below ↓ — see full details in the projects section. ["Face Recognition Attendance", "Gesture-Controlled Volume", "Discussion Forum"]'
                />
                <TerminalLine
                  command="&nbsp;mission"
                  output="&nbsp;To blend technology with purpose — designing smarter systems, more inclusive interfaces, and impactful innovations."
                />
                <TerminalLine
                  command="&nbsp;fun-facts"
                  output='&nbsp;user.viji.preferences = { theme: "dark 🌑", open tabs count: "dont ask ", leisure: "binge watch📺", hobby: "debugging bugs 🐞 and music" }'
                />
                <TerminalLine
                  command='&nbsp;echo "Always exploring. Always building. Always learning."'
                  output="&nbsp;Always exploring. Always building. Always learning."
                />
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
