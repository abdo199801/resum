import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPaperPlane, FaCheckCircle, FaEnvelope, FaRocket, FaGlobe, FaMapMarkerAlt, FaClock } from "react-icons/fa";

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

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_0zjngwe',
        'template_ohjt2w8',
        {
          from_name: form.name,
          to_name: "Abdellah",
          from_email: form.email,
          to_email: "abdobaq777@gmail.com",
          message: form.message,
        },
        'BlCtpz6Ep-XLbHv8q',
      )
      .then(
        () => {
          setLoading(false);
          setIsSubmitted(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const openWhatsApp = () => {
    const phoneNumber = "212676367706";
    const message = "Hello Abdellah! I came across your portfolio and would like to discuss...";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      {/* Enhanced Space Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        {/* Shooting stars */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700" />
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
                <p className={styles.sectionSubText}>Launch Into Collaboration</p>
                <h3 className={styles.sectionHeadText}>Connect With Me.</h3>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-secondary text-base leading-relaxed"
            >
              Ready to bring your digital ideas to life? Let's orbit around your project 
              and create something extraordinary together. I'm just a message away!
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
                  <p className="text-white font-semibold text-base">Message Launched Successfully! 🚀</p>
                  <p className="text-green-200 text-sm mt-1">I'll orbit back to you within 24 hours</p>
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
                  Your Name
                </span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className='bg-tertiary/60 backdrop-blur-sm py-3.5 px-4 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-white/15 focus:border-purple-500 transition-all duration-300 font-medium shadow-inner'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-semibold mb-3 flex items-center text-base'>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 shadow-lg"></div>
                  Your Email
                </span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className='bg-tertiary/60 backdrop-blur-sm py-3.5 px-4 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-white/15 focus:border-blue-500 transition-all duration-300 font-medium shadow-inner'
                />
              </label>
            </div>
            
            <label className='flex flex-col'>
              <span className='text-white font-semibold mb-3 flex items-center text-base'>
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3 shadow-lg"></div>
                Your Message
              </span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your project, your vision, or how we can collaborate to create something amazing...'
                className='bg-tertiary/60 backdrop-blur-sm py-3.5 px-4 placeholder:text-secondary text-white rounded-2xl outline-none border-2 border-white/15 focus:border-pink-500 transition-all duration-300 font-medium resize-none shadow-inner'
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                type='submit'
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-4 px-8 rounded-2xl outline-none text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 justify-center group'
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Launching Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Launch Message</span>
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

          {/* Enhanced Contact Methods */}
          <div className="mt-10 pt-8 border-t border-white/15">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <FaGlobe className="text-purple-400" />
              Global Connections
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
                  <p className="text-secondary text-xs mt-1">Instant Connection</p>
                  <p className="text-green-400 text-xs font-medium mt-1">Online Now</p>
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
                  <p className="text-secondary text-xs mt-1">Professional</p>
                  <p className="text-blue-400 text-xs font-medium mt-1">24/7 Response</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Enhanced Earth Canvas Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-[700px] md:h-[600px] h-[450px] relative'
        >
          <EarthCanvas />
          
          {/* Enhanced Floating Contact Info */}
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
                <p className="text-secondary text-sm mb-3">Full Stack Developer & Digital Explorer</p>
                
                {/* Contact Details */}
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

          {/* Planet Details Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-6 left-6 bg-black/60 backdrop-blur-lg p-4 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3">
              <FaGlobe className="text-blue-400 text-lg" />
              <div>
                <p className="text-white font-semibold text-sm">Interactive Globe</p>
                <p className="text-secondary text-xs">Drag to explore • Scroll to zoom</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");