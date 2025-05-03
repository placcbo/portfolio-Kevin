import React from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';
import { Images } from '../../Constants';

const Footer = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name: field, value } = e.target;
    setFormData({ ...formData, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkewrod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="dark-footer" id="contact">
      {/* Footer Content */}
      <div className="footer-container">
        {/* Developer Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="footer-intro"
        >
          <h2 className="footer-title">// Let’s Connect</h2>
          <p className="footer-description">
            Whether it's a project, collaboration, or just to say hi — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        {!isFormSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">// Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleChangeInput}
                placeholder="// Your Name"
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">// Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChangeInput}
                placeholder="// Your Email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">// Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={handleChangeInput}
                placeholder="// Your Message"
                className={`form-input ${errors.message ? 'input-error' : ''}`}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? '// Sending...' : '// Send Message'}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="success-state"
          >
            <h3>// Message Sent!</h3>
            <p>I'll respond shortly.</p>
          </motion.div>
        )}

        {/* CV Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="cv-download"
        >
          <a href='/public/kevinndiranguCV.pdf' download className="cv-button">
            <span className="cv-label">// Download CV</span>
            <span className="cv-icon">⬇</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="social-links"
        >
          <a
            href="https://github.com/placcbo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:placbo2@gmail.com"
            className="social-link"

          
          >
            Email
          </a>
        </motion.div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="developer-motto">// Code is Craft • Engineering is Art</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Kevin Ndirangu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;