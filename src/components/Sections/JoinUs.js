import React from 'react';
import './JoinUs.css';

// Import Assets
import joinUsCone from "../../assets/images/Cone_01-9.png";
import mnoImg from "../../assets/images/MNO.webp";
import serviceProviderImg from "../../assets/images/Servic-Provider.webp";
import paymentGatewayImg from "../../assets/images/Payment-Gateway.webp";
import governmentImg from "../../assets/images/Government.webp";

const JoinUs = () => {
    return (
        <section className="joinus-section" id="join-us">
            {/* Background Element */}
            <div className="joinus-bg">
                <img src={joinUsCone} alt="" className="joinus-cone" />
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
                            <img src={mnoImg} alt="MNO" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">MNO</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src={serviceProviderImg} alt="Service Provider" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">Service Provider</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src={paymentGatewayImg} alt="Payment Gateway" className="joinus-card-img" />
                            <div className="joinus-card-overlay">
                                <h3 className="joinus-card-title">Payment Gateway</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="joinus-card">
                        <div className="joinus-card-img-wrap">
                            <img src={governmentImg} alt="Government" className="joinus-card-img" />
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
