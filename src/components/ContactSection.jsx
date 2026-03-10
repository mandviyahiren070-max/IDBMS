import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

// Import Assets
import ringCornDeco from "../assets/images/Ring Corn.png";
import getInTouchImg from "../assets/images/Get-in-Touch-with-us.webp";

const ContactSection = () => {
  const headingRef = useScrollReveal({ delay: 0 });
  const imgBoxRef = useScrollReveal({ delay: 80 });
  const formBoxRef = useScrollReveal({ delay: 180 });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",     
    jobTitle: "",
    companyName: "",
    companyEmail: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const trimmed = Object.fromEntries(
      Object.entries(formData).map(([k, v]) => [k, v.trim()])
    );

    // First Name: required, no spaces allowed
    if (!trimmed.firstName) {
      newErrors.firstName = "First Name is required.";
    } else if (/\s/.test(trimmed.firstName)) {
      newErrors.firstName = "First Name cannot contain spaces.";
    }

    // Last Name: required, no spaces allowed
    if (!trimmed.lastName) {
      newErrors.lastName = "Last Name is required.";
    } else if (/\s/.test(trimmed.lastName)) {
      newErrors.lastName = "Last Name cannot contain spaces.";
    }

    // Job Title: required
    if (!trimmed.jobTitle) newErrors.jobTitle = "Job Title is required.";

    // Company Name: required
    if (!trimmed.companyName) newErrors.companyName = "Company Name is required.";

    // Email: required + strict format validation (must have @, valid domain, and TLD)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmed.companyEmail) {
      newErrors.companyEmail = "Email is required.";
    } else if (/\s/.test(trimmed.companyEmail)) {
      newErrors.companyEmail = "Email cannot contain spaces.";
    } else if (!emailRegex.test(trimmed.companyEmail)) {
      newErrors.companyEmail = "Please enter a valid email (e.g. name@company.com).";
    }

    // Message: required
    if (!trimmed.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      alert("Thank you for reaching out! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        companyName: "",
        companyEmail: "",
        message: "",
      });
    }
  };

  const inputClass = (field) =>
    `form-input ${errors[field] ? "border-red-500" : "border-white/10"}`;

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 z-[1] flex flex-col items-center"
      id="get-in-touch"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[90%] max-w-[1108px] h-[400px] sm:h-[500px] lg:h-[637px]
                   rounded-full bg-brand-blue blur-[90px] sm:blur-[150px] lg:blur-[250px]
                   opacity-60 z-[-1] pointer-events-none"
        aria-hidden="true"
      />

      {/* Ring decoration */}
      <img
        className="absolute pointer-events-none select-none z-0
                   hidden sm:block sm:w-[400px] lg:w-[60vw] lg:max-w-[900px]
                   -top-1/3 -left-[200px] lg:-left-[133px] object-contain"
        src={ringCornDeco}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />

      {/* Content Container */}
      <div className="section-container relative z-10">
        <h2
          ref={headingRef}
          className="reveal-blur text-center font-din text-4xl sm:text-6xl lg:text-8xl xl:text-section-title font-bold text-white mb-12 sm:mb-16 uppercase leading-none"
        >
          GET IN TOUCH WITH US
        </h2>

        {/* Content: Image + Form */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8">
          {/* Left: Image */}
          <div ref={imgBoxRef} className="reveal-left w-full lg:w-[38%] border border-white/20 rounded-3xl p-4 sm:p-5 bg-[#04071e]/30 backdrop-blur-[20px] flex items-stretch justify-center">
            <img
              src={getInTouchImg}
              alt="Get In Touch"
              className="w-full h-full object-cover block rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Right: Form */}
          <div ref={formBoxRef} className="reveal-right w-full lg:w-[62%] border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#04071e]/30 backdrop-blur-[20px] flex flex-col">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 sm:gap-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-400 ml-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass("firstName")}
                    autoComplete="given-name"
                  />
                  {errors.firstName && <span className="text-red-500 text-[10px] absolute -bottom-4 left-4">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-400 ml-4">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass("lastName")}
                    autoComplete="family-name"
                  />
                  {errors.lastName && <span className="text-red-500 text-[10px] absolute -bottom-4 left-4">{errors.lastName}</span>}
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="jobTitle" className="text-sm font-medium text-gray-400 ml-4">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={inputClass("jobTitle")}
                  autoComplete="organization-title"
                />
                {errors.jobTitle && <span className="text-red-500 text-[10px] absolute -bottom-4 left-4">{errors.jobTitle}</span>}
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-400 ml-4">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputClass("companyName")}
                  autoComplete="organization"
                />
                {errors.companyName && <span className="text-red-500 text-[10px] absolute -bottom-4 left-4">{errors.companyName}</span>}
              </div>

              {/* Row 4 */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="companyEmail" className="text-sm font-medium text-gray-400 ml-4">
                  Company Email
                </label>
                <input
                  type="text"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className={inputClass("companyEmail")}
                  autoComplete="email"
                  inputMode="email"
                />
                {errors.companyEmail && <span className="text-red-500 text-[10px] absolute -bottom-4 left-4">{errors.companyEmail}</span>}
              </div>

              {/* Row 5 */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-4">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`${inputClass("message")} h-auto py-4 rounded-[24px] resize-none`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-[10px] absolute -bottom-4 left-4">{errors.message}</span>}
              </div>

              {/* Submit */}
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="btn-primary w-full max-w-[554.41px] h-[56.95px] text-lg uppercase font-bold tracking-wider"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
