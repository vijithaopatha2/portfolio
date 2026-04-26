import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, Code, Lightbulb, Terminal } from 'lucide-react';

const About = () => {
  const { title, description } = portfolioData.about;

  const highlights = [
    {
      icon: <BookOpen className="text-blue-500 dark:text-blue-400" size={24} />,
      title: "Education",
      desc: "UCSC Undergraduate"
    },
    {
      icon: <Code className="text-violet-500 dark:text-violet-400" size={24} />,
      title: "Development",
      desc: "MERN Stack Focus"
    },
    {
      icon: <Lightbulb className="text-blue-500 dark:text-blue-400" size={24} />,
      title: "Problem Solving",
      desc: "Algorithmic Thinker"
    },
    {
      icon: <Terminal className="text-violet-500 dark:text-violet-400" size={24} />,
      title: "Multi-Language",
      desc: "Java, Python, C++, etc."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[3/4] w-72 md:w-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-3xl transform rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl transform transition-transform hover:scale-[1.02] flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-r.png"
                  alt="O.V. Vijitha"
                  className="w-full h-full object-cover mt-3"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 transition-colors">
              {description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
                  <div className="bg-slate-50 dark:bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-medium mb-1 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
