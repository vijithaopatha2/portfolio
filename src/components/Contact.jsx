import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { email, github, linkedin } = portfolioData.contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms configuration
    // IMPORTANT: Replace the access_key below with your own from https://web3forms.com/
    const accessKey = "YOUR_ACCESS_KEY_HERE";

    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      alert("Please configure your Web3Forms access key in Contact.jsx to enable form submission.");
      setIsSubmitting(false);
      return;
    }

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
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-6 transition-colors">
            Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

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
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 disabled:opacity-70 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
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
