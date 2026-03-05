import React, { useState } from 'react';

// Import Assets
import ringCornDeco from "../../assets/images/Ring Corn.png";
import getInTouchImg from "../../assets/images/Get-in-Touch-with-us.webp";

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
        <section className="relative w-full bg-transparent p-[0_0_10px_0] z-[1] flex flex-col items-center" id="get-in-touch">
            {/* Background Elements */}
            <div className="absolute w-[1108px] h-[637px] top-1/2 left-[163px] -translate-y-1/2 bg-brand-blue blur-[250px] backdrop-blur-[650.5px] opacity-80 z-[-1] pointer-events-none"></div>
            <img
              className="absolute pointer-events-none user-select-none z-0 w-[1375px] h-[1375px] -top-1/3 -left-[333px] object-contain
                         max-[900px]:w-[500px] max-[900px]:h-[500px] max-[900px]:left-[-240px] max-[900px]:top-[-40px]
                         max-[600px]:hidden"
              src={ringCornDeco}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            
            <h2 
                className="text-center font-bold mb-[60px] max-[600px]:mb-10" 
                style={{ 
                    fontFamily: '"DIN Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(44px, 6vw, 60px)', /* Set max size exactly to 60px per Figma */
                    lineHeight: '100%',
                    letterSpacing: '-0.005em', /* -0.5% letter spacing */
                    color: '#FFFFFF'
                }}
            >
                Get in Touch with us
            </h2>
            
            <div className="flex justify-center items-stretch gap-8 w-[90%] max-w-[1160px] max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:gap-10">
                {/* Left Side: Image Box */}
                <div className="w-[430px] max-[1024px]:w-full max-[1024px]:max-w-[600px] border border-white/20 rounded-[30px] p-5 box-border flex items-stretch justify-center bg-[#04071e]/30 backdrop-blur-[20px]">
                    <img 
                      src={getInTouchImg} 
                      alt="Get In Touch" 
                      className="w-full h-full object-cover block rounded-[20px]" 
                    />
                </div>

                {/* Right Side: Form Box */}
                <div className="w-[691px] max-[1024px]:w-full max-[1024px]:max-w-[600px] border border-white/20 rounded-[30px] p-10 max-[600px]:p-6 box-border flex flex-col bg-[#04071e]/30 backdrop-blur-[20px]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-[22px] w-full flex-1">
                        <div className="flex gap-6 max-[600px]:flex-col max-[600px]:gap-6">
                            <div className="flex-1 flex flex-col gap-2 relative">
                                <label className="font-mulish text-[13.5px] font-medium text-white/90">First Name</label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`h-[46px] rounded-[23px] border border-white/10 bg-black/20 text-white font-mulish text-[15px] px-5 outline-none transition-all duration-200 focus:border-white/30 focus:bg-black/40 ${errors.firstName ? 'border-[#ff4a4a]' : ''}`}
                                />
                                {errors.firstName && <span className="text-[#ff4a4a] text-[11px] font-mulish absolute -bottom-[18px] left-[15px]">{errors.firstName}</span>}
                            </div>
                            <div className="flex-1 flex flex-col gap-2 relative">
                                <label className="font-mulish text-[13.5px] font-medium text-white/90">Last Name</label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`h-[46px] rounded-[23px] border border-white/10 bg-black/20 text-white font-mulish text-[15px] px-5 outline-none transition-all duration-200 focus:border-white/30 focus:bg-black/40 ${errors.lastName ? 'border-[#ff4a4a]' : ''}`}
                                />
                                {errors.lastName && <span className="text-[#ff4a4a] text-[11px] font-mulish absolute -bottom-[18px] left-[15px]">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label className="font-mulish text-[13.5px] font-medium text-white/90">Job Title</label>
                            <input 
                                type="text" 
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className={`h-[46px] rounded-[23px] border border-white/10 bg-black/20 text-white font-mulish text-[15px] px-5 outline-none transition-all duration-200 focus:border-white/30 focus:bg-black/40 ${errors.jobTitle ? 'border-[#ff4a4a]' : ''}`}
                            />
                            {errors.jobTitle && <span className="text-[#ff4a4a] text-[11px] font-mulish absolute -bottom-[18px] left-[15px]">{errors.jobTitle}</span>}
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label className="font-mulish text-[13.5px] font-medium text-white/90">Company Name</label>
                            <input 
                                type="text" 
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={`h-[46px] rounded-[23px] border border-white/10 bg-black/20 text-white font-mulish text-[15px] px-5 outline-none transition-all duration-200 focus:border-white/30 focus:bg-black/40 ${errors.companyName ? 'border-[#ff4a4a]' : ''}`}
                            />
                            {errors.companyName && <span className="text-[#ff4a4a] text-[11px] font-mulish absolute -bottom-[18px] left-[15px]">{errors.companyName}</span>}
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label className="font-mulish text-[13.5px] font-medium text-white/90">Company Email</label>
                            <input 
                                type="email" 
                                name="companyEmail"
                                value={formData.companyEmail}
                                onChange={handleChange}
                                className={`h-[46px] rounded-[23px] border border-white/10 bg-black/20 text-white font-mulish text-[15px] px-5 outline-none transition-all duration-200 focus:border-white/30 focus:bg-black/40 ${errors.companyEmail ? 'border-[#ff4a4a]' : ''}`}
                            />
                            {errors.companyEmail && <span className="text-[#ff4a4a] text-[11px] font-mulish absolute -bottom-[18px] left-[15px]">{errors.companyEmail}</span>}
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label className="font-mulish text-[13.5px] font-medium text-white/90">Your Message</label>
                            <input
                                type="text" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`h-[46px] rounded-[23px] border border-white/10 bg-black/20 text-white font-mulish text-[15px] px-5 outline-none transition-all duration-200 focus:border-white/30 focus:bg-black/40 ${errors.message ? 'border-[#ff4a4a]' : ''}`}
                            />
                            {errors.message && <span className="text-[#ff4a4a] text-[11px] font-mulish absolute -bottom-[18px] left-[15px]">{errors.message}</span>}
                        </div>

                        <button type="submit" className="w-full h-[52px] rounded-[26px] mt-2 bg-gradient-to-r from-[#FF6F00] to-[#FF4500] border-none text-white font-mulish text-[22px] font-bold cursor-pointer transition-all duration-200 shadow-[0px_6px_20px_rgba(242,100,14,0.3)] hover:-translate-y-[2px] hover:brightness-110 active:translate-y-[1px]">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
