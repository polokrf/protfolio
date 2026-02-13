import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const { ref: leftRef, controls: leftControls } = useScrollAnimation();
  const { ref: formRef, controls: formControls } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.email  || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

   
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
      const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'polokkumar9030@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10"></div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={sectionRef}
          initial="hidden"
          animate={sectionControls}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20"
        >
          <motion.div 
            ref={leftRef}
            initial="hidden"
            animate={leftControls}
            variants={staggerContainer}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.span 
                variants={fadeInUp}
                className="text-primary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block"
              >
                Contact
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              >
                Let's work together!
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-text-muted dark:text-text-dark-muted text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-md"
              >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div 
                  variants={contactInfoVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-5"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700"
                  >
                    <span className="material-symbols-outlined text-[20px] sm:text-[24px]">mail</span>
                  </motion.div>
                  <div>
                    <p className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted mb-0.5">Email me at</p>
                    <motion.a 
                      whileHover={{ color: '#3b82f6' }}
                      className="font-semibold text-sm sm:text-base md:text-lg transition-colors" 
                      href="mailto:polokkumar9030@gmail.com"
                    >
                      polokkumar9030@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={contactInfoVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-5"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700"
                  >
                    <span className="material-symbols-outlined text-[20px] sm:text-[24px]">call</span>
                  </motion.div>
                  <div>
                    <p className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted mb-0.5">Call me at</p>
                    <motion.a 
                      whileHover={{ color: '#3b82f6' }}
                      className="font-semibold text-sm sm:text-base md:text-lg transition-colors" 
                      href="tel:01775734110"
                    >
                      01775734110
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={contactInfoVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-5"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700"
                  >
                    <span className="material-symbols-outlined text-[20px] sm:text-[24px]">location_on</span>
                  </motion.div>
                  <div>
                    <p className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted mb-0.5">Location</p>
                    <p className="font-semibold text-sm sm:text-base md:text-lg">Rajshahi,Bangladesh</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={formRef}
            initial="hidden"
            animate={formControls}
            variants={formVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-card-dark p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
          >
            <motion.form 
              variants={staggerContainer}
              className="space-y-4 sm:space-y-6" 
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div variants={inputVariants}>
                  <label 
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700 dark:text-slate-300" 
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base" 
                    id="name"
                    name="name"
                    placeholder="John Doe" 
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div variants={inputVariants}>
                  <label 
                    className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700 dark:text-slate-300" 
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base" 
                    id="email"
                    name="email"
                    placeholder="john@example.com" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              
              <motion.div variants={inputVariants}>
                <label 
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-slate-700 dark:text-slate-300" 
                  htmlFor="message"
                >
                  Message *
                </label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base" 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..." 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></motion.textarea>
              </motion.div>
              
              <motion.button 
                variants={inputVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-dark text-white shadow-primary/25'
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <motion.span 
                  animate={{ rotate: isSubmitting ? 360 : 0 }}
                  transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                  className="material-symbols-outlined text-sm"
                >
                  {isSubmitting ? 'hourglass_empty' : 'send'}
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;