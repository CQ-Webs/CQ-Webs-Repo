"use client";
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import Navbar from '../UI/Navbar';
import { Nabla } from 'next/font/google';

const nabla = Nabla({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className=' min-h-screen bg-black text-white pb-24 '>
      <Navbar />

      <main className="pt-[150px] md:pt-[250px] px-4 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col md:flex-row gap-12 md:gap-20"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className={`${nabla.className} text-4xl md:text-6xl mb-8`}>Get in touch</h1>

            <p className="text-gray-300 mb-8 text-lg">
              Ready to elevate your digital presence? We're here to bring your vision to life.
              Reach out and let's create something extraordinary together.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Email</h3>
                <p className="text-gray-300">chrismanriquez27@icloud.com</p>
              </div>

              <div>
                <h3 className="text-xl mb-2">Phone</h3>
                <p className="text-gray-300">+52 614 167 7134</p>
              </div>

              <div>
                <h3 className="text-xl mb-2">Location</h3>
                <p className="text-gray-300">Chihuahua Mexico</p>
              </div>

              <div className="pt-4">
                <div className="w-full h-px bg-white/30 mb-6"></div>
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            ref={formRef}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-white/30 rounded-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-white/30 rounded-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-white/30 rounded-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-transparent border border-white/30 rounded-sm focus:outline-none focus:border-white transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-black border border-white hover:bg-white hover:text-black transition-colors duration-300 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-900/20 border border-green-500 text-green-500 rounded-sm"
                >
                  Your message has been sent successfully. We'll get back to you soon!
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}