import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name } = portfolioData.hero;

  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-600 dark:text-slate-500 text-sm transition-colors">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-slate-500 dark:text-slate-600 text-xs mt-2 transition-colors">
          Designed & Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
