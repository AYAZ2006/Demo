import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
export default function WebsiteLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = ["Home", "Services", "Work", "About", "Contact"];

  const sections = [
    {
      id: "services",
      title: "Our Services",
      text: "We offer UI/UX design, web development, and branding solutions with human-centered design principles.",
    },
    {
      id: "work",
      title: "Our Work",
      text: "A showcase of projects across fintech, edtech, traveltech, and more, delivering impactful experiences.",
    },
    {
      id: "about",
      title: "About Us",
      text: "We are a team of designers, developers, and strategists blending behavioral science with technology.",
    },
  ];

  const logos = [
    "https://www.svgrepo.com/show/354238/python.svg",
    "https://www.svgrepo.com/show/303654/java-logo.svg",
    "https://www.svgrepo.com/show/349419/javascript.svg",
    "https://www.svgrepo.com/show/373554/django.svg",
    "https://www.svgrepo.com/show/349330/css3.svg",
    "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg",
    "https://www.svgrepo.com/show/330413/fastapi.svg",
    "https://www.svgrepo.com/show/452192/docker.svg",
    "https://www.svgrepo.com/show/353983/kubernetes.svg"
  ];

  return (
    <div className={`${darkMode ? "bg-gradient-to-br from-black via-gray-900 to-black text-white" : "bg-gray-50 text-gray-900"} min-h-screen transition-colors duration-500`}>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ scrolled ? (darkMode ? "bg-black/80" : "bg-white/80") + " backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Leo9 Studio(clone)</h1>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8 text-lg">
              {navLinks.map((link) => (
                <li key={link} className="relative group cursor-pointer hover:text-yellow-400">
                  {link.toLowerCase() === 'contact' ? (
                    <a href="mailto:hajrasultana7075@gmail.com">{link}</a>) : (<a href={`#${link.toLowerCase()}`}>{link}</a>)}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                </li>
              ))}
            </ul>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">{darkMode ? <Sun size={22} /> : <Moon size={22} />}</button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>

        {isOpen && (
          <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className={`md:hidden ${darkMode ? "bg-black/90" : "bg-white/90"} backdrop-blur-md text-center space-y-6 py-8 text-xl`}>
            {navLinks.map((link) => (
              <li key={link} className="hover:text-yellow-400 cursor-pointer" onClick={() => setIsOpen(false)}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
            ))}
            <li><button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">{darkMode ? <Sun size={22} /> : <Moon size={22} />}</button></li>
          </motion.ul>
        )}
      </nav>

      <section id="home" className="flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold leading-tight mb-6" >Crafting Digital Experiences that Inspire </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-lg md:text-xl text-gray-500 dark:text-gray-300 mb-10 max-w-2xl">We blend design, technology, and psychology to build brands and products that people love to engage with. </motion.p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition-all" >Get Started</motion.button>
      </section>
      <div className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} overflow-hidden whitespace-nowrap py-10`}>
        <motion.div animate={{ x: ["100%", "-100%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex space-x-20">
          {logos.map((src, idx) => (
            <img key={idx} src={src} alt={`logo-${idx}`} className="h-16" />
          ))}
        </motion.div>
      </div>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="px-6 py-24 max-w-5xl mx-auto text-center">
          <motion.h3 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold mb-6">{section.title}</motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} viewport={{ once: true }}className="text-lg text-gray-500 dark:text-gray-300 mb-10">{section.text}</motion.p>
          {section.id === "work" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {[1, 2, 3, 4].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }} className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-2xl shadow-lg p-10`}>
                  <h4 className="text-xl font-semibold mb-2">Project {item}</h4>
                  <p className="text-gray-400">A short description of the project with some hover effect.</p>
                </motion.div>
              ))}
            </div>
          )}
          {section.id === "about" && (
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
              {["Design", "Development", "Strategy"].map((skill, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.2 }} viewport={{ once: true }} className="bg-gradient-to-tr from-yellow-400 to-yellow-600 text-black font-bold rounded-2xl shadow-xl px-6 py-8 w-48 text-center">{skill}</motion.div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}