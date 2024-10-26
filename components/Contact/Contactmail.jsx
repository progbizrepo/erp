import React, { useState } from 'react';
import InputTextBox from '../InputTextBox/InputTextBox';
import Button from '../Button/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    honeypot: '', // Honeypot field for bots
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' }); // Clear error when user types
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }else{
        console.log(formData)
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('../api/sendmail', {
        method: 'POST',
        headers: {
           'content-type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        // Clear form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          honeypot: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Server error:', data.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cmn_Heading_padding">
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <InputTextBox
            placeholder="Name"
            value={formData.name}
            onChange={handleChange('name')}
            className={errors.name ? 'error-border' : ''}
            required
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="col-md-6">
          <InputTextBox
            type="email"
            placeholder="Working e-mail"
            value={formData.email}
            onChange={handleChange('email')}
            className={errors.email ? 'error-border' : ''}
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
      </div>

      <InputTextBox
        placeholder="Contact Number"
        value={formData.phone}
        onChange={handleChange('phone')}
        className={errors.phone ? 'error-border' : ''}
        required
      />
      {errors.phone && <span className="error-text">{errors.phone}</span>}

      <InputTextBox
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange('company')}
        className={errors.company ? 'error-border' : ''}
        required
      />
      {errors.company && <span className="error-text">{errors.company}</span>}


      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange('honeypot')}
        style={{ display: 'none' }}
        aria-hidden="true"
        tabIndex="-1"
      />

      <Button
        text={isSubmitting ? 'Sending...' : 'Send Message'}
        className="btn w-100 mt-3 py-2"
        disabled={isSubmitting}
      />
      
      {submitStatus === 'success' && (
        <p className="submit-message text-success mt-2">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="submit-message text-danger mt-2">Failed to send message. Please try again later.</p>
      )}
    </form>
  );
};

export default ContactForm;