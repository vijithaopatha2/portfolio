import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Mail, Send, XCircle, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { email, github, linkedin } = portfolioData.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return undefined;

    const timer = window.setTimeout(() => {
      setAlert(null);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [alert]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms configuration
    const accessKey = "21e46c99-f9c5-44af-91a7-bfbb77550e8f";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setAlert({
          type: 'success',
          title: 'Message sent',
          message: 'Thanks for reaching out. I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setAlert({
          type: 'error',
          title: 'Message not sent',
          message: 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        type: 'error',
        title: 'Message not sent',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Get In Touch</h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-6 transition-colors">
            Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {alert && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2"
          >
            <div className={`relative overflow-hidden rounded-2xl border px-4 py-4 shadow-2xl backdrop-blur-xl ${alert.type === 'success' ? 'border-emerald-400/30 bg-slate-950/90 text-white' : 'border-rose-400/30 bg-slate-950/90 text-white'}`}>
              <div className={`absolute inset-x-0 top-0 h-1 ${alert.type === 'success' ? 'bg-linear-to-r from-emerald-400 to-cyan-400' : 'bg-linear-to-r from-rose-400 to-orange-400'}`}></div>
              <div className="flex items-start gap-3 pr-8">
                <div className={`mt-0.5 flex h-11 w-11 items-center justify-center rounded-full ${alert.type === 'success' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-rose-500/15 text-rose-300'}`}>
                  {alert.type === 'success' ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-white">{alert.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{alert.message}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAlert(null)}
                  className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Dismiss alert"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Contact Information</h3>
            <div className="space-y-6">
              <a href={`mailto:${email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-lg text-slate-900 dark:text-slate-300 transition-colors">{email}</p>
                </div>
              </a>

              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-colors shadow-sm dark:shadow-none">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">GitHub</p>
                  <p className="text-lg text-slate-900 dark:text-slate-300 transition-colors">View Profile</p>
                </div>
              </a>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors group">
                <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-sm dark:shadow-none">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                  <p className="text-lg text-slate-900 dark:text-slate-300 transition-colors">Connect with me</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2 transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2 transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2 transition-colors">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-linear-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 disabled:opacity-70 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
