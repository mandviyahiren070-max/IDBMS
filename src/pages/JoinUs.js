import React from 'react';
import './JoinUs.css';

const JoinUs = () => {
    return (
        <section className="joinus-section" id="join-us">
            {/* Background Element */}
            <div className="joinus-bg">
                <img src="/assets/images/Cone_01-9.png" alt="" className="joinus-cone" />
            </div>

            <div className="joinus-container">
                {/* Header Section */}
                <div className="joinus-header">
                    <h2 className="joinus-title">Join us</h2>
                    <a href="#learn-more" className="joinus-btn">Learn more</a>
                </div>

                {/* Cards Grid */}
                <div className="joinus-grid">
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src="/assets/images/MNO.webp" alt="MNO" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">MNO</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src="/assets/images/Servic-Provider.webp" alt="Service Provider" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">Service Provider</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src="/assets/images/Payment-Gateway.webp" alt="Payment Gateway" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">Payment Gateway</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src="/assets/images/Government.webp" alt="Government" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">Government</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
