import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        companyEmail: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // First Name: mandatory, no spaces
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required.';
        } else if (/\s/.test(formData.firstName)) {
            newErrors.firstName = 'First Name cannot contain spaces.';
        }

        // Last Name: mandatory, no spaces
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required.';
        } else if (/\s/.test(formData.lastName)) {
            newErrors.lastName = 'Last Name cannot contain spaces.';
        }

        // Job Title: mandatory
        if (!formData.jobTitle.trim()) {
            newErrors.jobTitle = 'Job Title is required.';
        }

        // Company Name: mandatory
        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company Name is required.';
        }

        // Company Email: mandatory, valid email
        if (!formData.companyEmail.trim()) {
            newErrors.companyEmail = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
            newErrors.companyEmail = 'Please enter a valid email address.';
        }

        // Message: mandatory
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully", formData);
            alert("Thank you for reaching out! We'll be in touch soon.");
            setFormData({
                firstName: '',
                lastName: '',
                jobTitle: '',
                companyName: '',
                companyEmail: '',
                message: ''
            });
        }
    };

    return (
        <section className="get-in-touch-section" id="get-in-touch">
            {/* Background Elements */}
            <div className="git-bg-gradient"></div>
            <img
              className="git-bg-ring"
              src="/assets/images/Rring.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            
            <h2 className="git-title">Get in Touch with us</h2>
            
            <div className="git-container">
                {/* Left Side: Image Box */}
                <div className="git-image-box">
                    <img 
                      src="/assets/images/Get-in-Touch-with-us.webp" 
                      alt="Get In Touch" 
                      className="git-image" 
                    />
                </div>

                {/* Right Side: Form Box */}
                <div className="git-form-box">
                    <form onSubmit={handleSubmit} className="git-form">
                        <div className="git-form-row">
                            <div className="git-input-group">
                                <label>First Name</label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={errors.firstName ? 'error-input' : ''}
                                />
                                {errors.firstName && <span className="git-error">{errors.firstName}</span>}
                            </div>
                            <div className="git-input-group">
                                <label>Last Name</label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={errors.lastName ? 'error-input' : ''}
                                />
                                {errors.lastName && <span className="git-error">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="git-input-group">
                            <label>Job Title</label>
                            <input 
                                type="text" 
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className={errors.jobTitle ? 'error-input' : ''}
                            />
                            {errors.jobTitle && <span className="git-error">{errors.jobTitle}</span>}
                        </div>

                        <div className="git-input-group">
                            <label>Company Name</label>
                            <input 
                                type="text" 
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={errors.companyName ? 'error-input' : ''}
                            />
                            {errors.companyName && <span className="git-error">{errors.companyName}</span>}
                        </div>

                        <div className="git-input-group">
                            <label>Company Email</label>
                            <input 
                                type="email" 
                                name="companyEmail"
                                value={formData.companyEmail}
                                onChange={handleChange}
                                className={errors.companyEmail ? 'error-input' : ''}
                            />
                            {errors.companyEmail && <span className="git-error">{errors.companyEmail}</span>}
                        </div>

                        <div className="git-input-group">
                            <label>Your Message</label>
                            <input
                                type="text" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error-input' : ''}
                            />
                            {errors.message && <span className="git-error">{errors.message}</span>}
                        </div>

                        <button type="submit" className="git-submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
