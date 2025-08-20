import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

function App() {
  // 👉 You can easily update this with your real GitHub project links
  const projects = [
    {
      title: "Expense Tracker",
      description: "A modern expense tracker built with Python,FastApi,Streamlit And Pymongo.",
      link: "https://github.com/moinmj/Expense_Tracker",
    },
    {
      title: "Model Chatbot",
      description: "An AI-powered chatbot built using FastAPI and React.",
      link: "https://github.com/moinmj/Model-Chatbot",
    },
    {
      title: "Stock Market Prediction",
      description: "My personal portfolio made with React and TailwindCSS.",
      link: "https://github.com/moinmj/Stock_Market_Prediction",
    },
    {
      title: "LSTM Without Libraries",
      description: "My personal portfolio made with React and TailwindCSS.",
      link: "https://github.com/moinmj/LSTM_Without_Libraries",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide text-blue-400">
            MyPortfolio
          </h1>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center relative"
      >
        {/* <h1 className="text-4xl font-bold font-poppins text-primary">
  Hello, I'm Moin Jan Rashid 👋
</h1> */}

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold"
        >
          Hi, I'm <span className="text-blue-400">Moin Jan Rashid</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-xl text-gray-300"
        >
          A Passionate Full-Stack Developer 🚀
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-10 px-6 py-3 bg-blue-500 text-lg rounded-full shadow-lg hover:bg-blue-600 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Explore My Work <FaArrowDown />
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-lg text-gray-300 text-center"
        >
          I'm a creative developer who loves building modern, interactive, and
          user-friendly web applications. I enjoy working with{" "}
          <span className="text-blue-400">React, TailwindCSS, FastAPI,</span> and
          MongoDB. When I'm not coding, I explore AI and cloud technologies.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 hover:shadow-blue-500/50 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-300 mb-6 max-w-lg">
          Whether you have an exciting project, an opportunity, or just want to
          say hi — feel free to reach out!
        </p>
        <div className="flex gap-6 text-3xl">
          <a href="mailto:moinmj7@gmail.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md text-center py-6 mt-10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Moin | Made with ❤️ using React + Tailwind
        </p>
      </footer>
    </div>
  );
}

export default App;
