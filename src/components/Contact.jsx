import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPaperPlane, FaCheckCircle, FaEnvelope, FaRocket, FaGlobe, FaMapMarkerAlt, FaClock, FaExclamationTriangle } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Your Google Apps Script URL (replace with your deployed URL)
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!form.email.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!form.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    if (form.message.trim().length < 10) {
      setError("Message should be at least 10 characters long");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log('🔄 Starting form submission...');
      console.log('📝 Form data:', form);

      const submissionData = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        timestamp: new Date().toLocaleString(),
        source: 'Portfolio Website'
      };

      console.log('📤 Sending to Google Script:', submissionData);

      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // Since we're using no-cors, we can't read the response
      // But we assume it worked if no network error
      console.log('✅ Data sent to Google Apps Script');

      // Also send email via your own API (optional backup)
      try {
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        if (emailResponse.ok) {
          console.log('✅ Backup email sent successfully');
        }
      } catch (emailError) {
        console.warn('⚠️ Backup email failed:', emailError);
        // Non-critical error, continue
      }

      // Success state
      setLoading(false);
      setIsSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      
      console.log('✅ Form processed successfully');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setLoading(false);
      setError("Message failed to send. Please try again or contact me directly via WhatsApp.");
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "212676367706";
    const message = `Hello Abdellah! I came across your portfolio and would like to connect. My name is ${form.name || 'a visitor'} and my email is ${form.email || 'not provided'}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      {/* Your existing background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className={`flex xl:flex-row flex-col-reverse gap-8 overflow-hidden`}>
        {/* Left Side - Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='xl:flex-[0.65] bg-black-100/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl'
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FaRocket className="text-white text-xl" />
              </div>
              <div>
                <p className={styles.sectionSubText}>Get In Touch</p>
                <h3 className={styles.sectionHeadText}>Contact Me.</h3>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-secondary text-base leading-relaxed"
            >
              Have a project in mind or want to discuss opportunities? I'm always open to 
              talking about web development, web scraping, or potential collaborations.
            </motion.p>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-gradient-to-r from-green-500/25 to-emerald-500/25 border border-green-500/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                >
                  <FaCheckCircle className="text-white text-base" />
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-base">Message Sent Successfully! 🚀</p>
                  <p className="text-green-200 text-sm mt-1">I'll get back to you within 24 hours</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-gradient-to-r from-red-500/25 to-orange-500/25 border border-red-500/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                >
                  <FaExclamationTriangle className="text-white text-base" />
                </motion.div>
                <div>
                  <p className="text-white font-semibold text-base">Message Failed to Send</p>
                  <p className="text-red-200 text-sm mt-1">{error}</p>
                </div>
              </div>
            </motion.div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-6'
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className='flex flex-col'>
                <span className='text-white font-semibold mb-3 flex items-center text-base'>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 shadow-lg"></div>
                  Your Name *
                </span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className='bg-tertiary/60 backdrop-blur-sm py-3.5 px-4 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-white/15 focus:border-purple-500 transition-all duration-300 font-medium shadow-inner'
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-semibold mb-3 flex items-center text-base'>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 shadow-lg"></div>
                  Your Email *
                </span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className='bg-tertiary/60 backdrop-blur-sm py-3.5 px-4 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-white/15 focus:border-blue-500 transition-all duration-300 font-medium shadow-inner'
                  required
                />
              </label>
            </div>
            
            <label className='flex flex-col'>
              <span className='text-white font-semibold mb-3 flex items-center text-base'>
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3 shadow-lg"></div>
                Your Message *
              </span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your project, your vision, or how we can collaborate...'
                className='bg-tertiary/60 backdrop-blur-sm py-3.5 px-4 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-white/15 focus:border-pink-500 transition-all duration-300 font-medium resize-none shadow-inner'
                required
                minLength={10}
              />
              <div className="text-right mt-2 text-xs text-secondary">
                {form.message.length}/10 minimum characters
              </div>
            </label>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                type='submit'
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-4 px-8 rounded-2xl outline-none text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center group disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <motion.button
                type="button"
                onClick={openWhatsApp}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className='flex-1 bg-gradient-to-r from-green-500 to-green-600 py-4 px-8 rounded-2xl outline-none text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center group'
              >
                <FaWhatsapp className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp</span>
              </motion.button>
            </div>
          </form>

          {/* Contact Methods */}
          <div className="mt-10 pt-8 border-t border-white/15">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <FaGlobe className="text-purple-400" />
              Quick Connect
            </h4>
            <div className="grid grid-cols-2 gap-5">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl cursor-pointer hover:from-white/10 hover:to-white/15 transition-all duration-300 border border-white/10 backdrop-blur-sm"
                onClick={openWhatsApp}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center shadow-lg">
                  <FaWhatsapp className="text-green-400 text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-secondary text-xs mt-1">Instant Chat</p>
                  <p className="text-green-400 text-xs font-medium mt-1">Quick Response</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl cursor-pointer hover:from-white/10 hover:to-white/15 transition-all duration-300 border border-white/10 backdrop-blur-sm"
                onClick={() => window.open("mailto:abdobaq777@gmail.com")}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center shadow-lg">
                  <FaEnvelope className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-secondary text-xs mt-1">Direct Email</p>
                  <p className="text-blue-400 text-xs font-medium mt-1">24/7 Available</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-[700px] md:h-[600px] h-[450px] relative'
        >
          <EarthCanvas />
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute bottom-8 left-8 right-8 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-2xl p-6 rounded-3xl border border-white/15 shadow-3xl"
          >
            <div className="flex items-center justify-between gap-10">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-white font-bold text-lg">Abdellah Baqba</p>
                </div>
                <p className="text-secondary text-sm mb-3">Full Stack Developer & Web Scraping Specialist</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-secondary">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>Based in Kenitra, Morocco</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary">
                    <FaClock className="text-blue-400" />
                    <span>Available for projects worldwide</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-3xl whitespace-nowrap flex-shrink-0 border border-green-400/30"
              >
                <FaWhatsapp className="text-xl" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Chat Now</div>
                  <div className="text-xs opacity-90">Fast Response</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");