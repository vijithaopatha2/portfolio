import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { name, description, resumeLink } = portfolioData.hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-medium tracking-wide mb-4 uppercase text-sm sm:text-base">
            Hello, World! I am
          </h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            {name}
          </h1>
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Specialist',
                2000,
                'UCSC Undergraduate',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-500"
              repeat={Infinity}
            />
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 mt-4 leading-relaxed transition-colors">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium hover:from-blue-600 hover:to-violet-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full"></div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
