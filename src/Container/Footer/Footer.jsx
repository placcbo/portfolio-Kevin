import React from 'react';
import './Footer.scss';
import { Images } from '../../Constants';
import { AppWrap } from '../../wrapper';

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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
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
    <div className='app__footer'>
      <h2 className='head-text' style={{paddingTop:0}}>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={Images.email} alt="email" />
          <a href='mailto:placbo2@gmail.com' className='p-text'>placbo2@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={Images.mobile} alt="mobile" />
          <a href='tel:+254720009566' className='p-text'>+254 720 009 566</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
          <div className='app__flex'>
            <input
              className={`p-text ${errors.name ? 'error' : ''}`}
              type='text'
              name='name'
              placeholder='Your Name'
              value={name}
              onChange={handleChangeInput}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className='app__flex'>
            <input
              className={`p-text ${errors.email ? 'error' : ''}`}
              type='email'
              name='email'
              placeholder='Your Email'
              value={email}
              onChange={handleChangeInput}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className='app__flex'>
            <textarea
              className={`p-text ${errors.message ? 'error' : ''}`}
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleChangeInput}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type='submit' className='p-text'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Footer, 'contact');
