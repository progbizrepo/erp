
import React, { useState, useEffect } from 'react';
import HeadSection from '../HeadSection/HeadSection';
import Tagline from '../Tagline/Tagline';
import styles from './Contact.module.css'
import ContactCTA from '../ContactCTA/ContactCTA';
import InputTextBox from '../InputTextBox/InputTextBox';
import Button from '../Button/Button';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
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
        } else {
            console.log(formData)
        }
        // Check honeypot field, if filled, consider it spam and prevent submission
        if (formData.honeypot !== '') {
            console.log('Spam detected!');
            return;
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

    //   const onCaptchaChange = (token) => {
    //     setFormData({ ...formData, captchaToken: token });
    //   };

    const HeadSections = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M15.6654 8.22643C15.7604 7.58918 15.7288 6.93946 15.5724 6.31443C15.3582 5.45976 14.9154 4.67953 14.2914 4.05743C13.6693 3.43346 12.8891 2.99063 12.0344 2.77643C11.4091 2.61957 10.759 2.58762 10.1214 2.68243M12.8184 7.92443C12.9204 7.24443 12.7084 6.52443 12.1844 6.00043C11.9358 5.75132 11.6322 5.56407 11.298 5.45377C10.9638 5.34348 10.6084 5.31322 10.2604 5.36543" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.39041 3.79663C5.52425 3.79659 5.65566 3.83236 5.77101 3.90023C5.88637 3.96811 5.98145 4.06561 6.04641 4.18263L6.96341 5.83463C7.02266 5.94129 7.05499 6.06079 7.05761 6.18277C7.06022 6.30475 7.03304 6.42553 6.97841 6.53463L6.09441 8.30163C6.09441 8.30163 6.35141 9.61863 7.42241 10.6916C8.0825 11.3411 8.90701 11.7984 9.80741 12.0146L11.5744 11.1306C11.6835 11.076 11.8043 11.0488 11.9263 11.0514C12.0482 11.054 12.1678 11.0864 12.2744 11.1456L13.9314 12.0676C14.0483 12.1325 14.1457 12.2274 14.2136 12.3426C14.2814 12.4578 14.3173 12.589 14.3174 12.7226V14.6256C14.3174 15.5946 13.4174 16.2936 12.4994 15.9846C10.6134 15.3486 7.68741 14.1366 5.83141 12.2816C3.97641 10.4266 2.76541 7.49963 2.12941 5.61463C1.81941 4.69663 2.51941 3.79663 3.48841 3.79663H5.39041Z" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>),
            taglineText: "Contact Us",
            taglineColor: "#F8F9FA",
            title: "Curious to see it in action? Let’s see a demo.",
            description: "See a personalised demo of how Progbiz ERP can help streamline your project operations. It's so valuable when you see it with your team."
        },

    ];
    const contactDetails = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M22.7164 17.0411L30.5593 10.179V23.8266L22.7164 17.0419V17.0411ZM12.6099 18.2039L15.3639 20.6119C15.8131 20.9962 16.3852 21.2067 16.9763 21.2052H17.0146C17.6317 21.2052 18.1952 20.98 18.6321 20.6077L18.6287 20.6102L21.3827 18.2022L29.7552 25.4442H4.2416L12.6099 18.2039ZM4.2314 8.55129H29.7705L17.5025 19.2825C17.3649 19.3925 17.1941 19.4524 17.018 19.4525H16.984C16.8071 19.4528 16.6355 19.3925 16.4978 19.2817L16.4995 19.2825L4.2314 8.55129ZM3.44005 10.1773L11.2813 17.0402L3.44005 23.8207V10.1773ZM30.9801 7.04254C30.6553 6.88107 30.2973 6.79754 29.9346 6.79859H4.06735C3.69773 6.79894 3.3333 6.88568 3.00315 7.05189L3.0176 7.04509C2.62086 7.24329 2.28724 7.54817 2.05421 7.9255C1.82118 8.30283 1.69796 8.73766 1.6984 9.18114V24.8126C1.69682 25.443 1.94536 26.0482 2.38947 26.4955C2.83359 26.9428 3.43702 27.1957 4.06735 27.1986H29.9295C30.5598 27.1957 31.1632 26.9428 31.6073 26.4955C32.0514 26.0482 32.3 25.443 32.2984 24.8126V9.18114C32.2984 8.24699 31.7638 7.43864 30.986 7.04934L30.9724 7.04254H30.9801Z" fill="#333333" />
            </svg>),

            paragraph: "You can email us here",
            heading: "Info@progbiz.io",
            borderRadius: "12px",
            roundedRadius: "50%"
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M28.8007 14.4485C28.9739 13.3833 28.9159 12.2933 28.6307 11.2525C28.2533 9.87207 27.4747 8.56392 26.2966 7.48357C25.1342 6.42616 23.7172 5.68866 22.1843 5.34327C21.0412 5.08159 19.8602 5.0289 18.6984 5.18772M23.7576 14.4485C23.9251 13.1038 23.5766 11.6843 22.7147 10.649C21.8519 9.61452 20.6687 9.19717 19.5484 9.39692" stroke="#333333" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.8784 6.79859C11.1131 6.80032 11.3429 6.86596 11.5432 6.98846C11.7434 7.11096 11.9065 7.28569 12.0149 7.49389L13.6044 10.4723C13.8126 10.8633 13.8228 11.3342 13.6307 11.7337L12.099 14.9186C12.099 14.9186 12.5427 17.2927 14.4008 19.2239C16.2581 21.1559 18.5327 21.6098 18.5327 21.6098L21.5952 20.0169C21.7833 19.9187 21.9932 19.8698 22.2053 19.8747C22.4174 19.8796 22.6248 19.9382 22.8082 20.045L25.6803 21.705C26.0926 21.943 26.3484 22.3961 26.3484 22.8865V26.3154C26.3484 28.0622 24.7887 29.3227 23.1983 28.7651C19.9301 27.6176 14.8581 25.4348 11.6434 22.0918C8.4287 18.7479 6.3292 13.4728 5.22675 10.0753C5.10025 9.70168 5.06468 9.30324 5.12298 8.91308C5.18127 8.52292 5.33176 8.15228 5.56196 7.83191C5.79216 7.51155 6.09542 7.25069 6.44661 7.07098C6.79779 6.89127 7.18676 6.79789 7.58125 6.79859H10.8784Z" stroke="#333333" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>),
            paragraph: "Call us at",
            heading: "+1-800-123-4567",
            borderRadius: "12px",
            roundedRadius: "50%"
        },
    ];

    return (
        <div className='cmn_Sectionpadding' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="row ">
                            <div className="col-xxl-12 col-md-12 col-sm-12">
                                <div className="feature-sections-container ">
                                    {HeadSections.map((section, index) => (
                                        <HeadSection key={index}
                                            TaglineComponent={<Tagline text={section.taglineText} backgroundColor={section.taglineColor} icon={section.icon} />}
                                            title={section.title}
                                            description={section.description}
                                            textAlign="left"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <ul className='cmn_Heading_padding'>
                            {contactDetails.map((detail, index) => (
                                <li key={index}>
                                    <ContactCTA
                                        key={index}
                                        icon={detail.icon}
                                        paragraph={detail.paragraph}
                                        heading={detail.heading}
                                        borderRadius={detail.borderRadius}
                                        roundedRadius={detail.roundedRadius}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className={styles.formContainer} id='contactForm'>

                            <div className="formHead ">
                                <h4 className={styles.formtitle}>Send Us a Message</h4>
                                <p className={styles.formdiscription}>Use our convenient contact form to reach out with questions, feedback, or
                                    collaboration inquiries.</p>
                            </div>

                            <form onSubmit={handleSubmit} className='cmn_Heading_padding'>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-6">
                                        <InputTextBox
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange('name')}
                                            className={errors.name ? 'error-border' : ''}
                                            required
                                        />
                                        {errors.name && <span className="error-text text-danger">{errors.name}</span>}
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
                                        {errors.email && <span className="error-text text-danger">{errors.email}</span>}
                                    </div>
                                </div>
                                <InputTextBox
                                    placeholder="Contact Number"
                                    value={formData.phone}
                                    onChange={handleChange('phone')}
                                    className={errors.phone ? 'error-border' : ''}
                                    required
                                />
                                {errors.phone && <span className="error-text text-danger">{errors.phone}</span>}
                                <InputTextBox
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange('company')}
                                    className={errors.company ? 'error-border' : ''}
                                    required
                                />
                                {errors.company && <span className="error-text text-danger">{errors.company}</span>}
                                {/* Honeypot Field - Hidden */}
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact