import React from 'react';

// Import Assets
import joinUsCone from "../../assets/images/Cone_01-9.png";
import mnoImg from "../../assets/images/MNO.webp";
import serviceProviderImg from "../../assets/images/Servic-Provider.webp";
import paymentGatewayImg from "../../assets/images/Payment-Gateway.webp";
import governmentImg from "../../assets/images/Government.webp";

const JoinUs = () => {
    return (
        <section 
            className="relative w-full z-[1] 
                       p-[10px_160px_122px_120px] max-[1240px]:p-[60px_40px] max-[768px]:p-[50px_20px]
                       after:content-[''] after:absolute after:-bottom-[20%] after:-left-[10%] after:w-[70%] after:h-[80%] after:bg-[radial-gradient(ellipse_at_center,rgba(12,38,140,0.4)_0%,transparent_60%)] after:pointer-events-none after:z-0" 
            id="join-us"
        >
            {/* Background Element */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src={joinUsCone} 
                    alt="" 
                    className="absolute right-0 top-[27%] -translate-y-1/2 w-[1000px] h-auto object-contain opacity-100" 
                />
            </div>

            <div className="relative z-[1] w-[95%] max-w-[1200px] mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-[60px] max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-5 max-[768px]:mb-10">
                    <h2 className="font-bebas text-[clamp(60px,8vw,120px)] font-bold leading-none tracking-normal text-white m-0">Join us</h2>
                    <a 
                        href="#learn-more" 
                        className="flex items-center justify-center w-[137px] h-[38px] rounded-[20px] p-[8px_16px] gap-[10px] bg-[#F2640E] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] text-white font-mulish text-base font-bold no-underline box-border transition-all duration-200 hover:scale-105 hover:brightness-110"
                    >
                        Learn more
                    </a>
                </div>

                {/* Cards Grid */}
                <div className="flex justify-between items-center gap-5 max-[1240px]:flex-wrap max-[1240px]:justify-center max-[1240px]:gap-8 max-[768px]:flex-col max-[768px]:items-center">
                    {[
                        { title: "MNO", img: mnoImg },
                        { title: "Service Provider", img: serviceProviderImg },
                        { title: "Payment Gateway", img: paymentGatewayImg },
                        { title: "Government", img: governmentImg }
                    ].map((card, i) => (
                        <div key={i} className="group relative w-[276.43px] h-[348.61px] rounded-[24px] cursor-pointer box-border overflow-hidden bg-black border-2 border-transparent shadow-[0px_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.7)] max-[768px]:w-full max-[768px]:max-w-[320px] flex-shrink-0">
                            {/* Complex Border Effect */}
                            <div 
                              className="absolute inset-0 rounded-[24px] p-[2px] pointer-events-none z-[10] bg-[linear-gradient(135.72deg,rgba(255,255,255,0.27)_8.53%,rgba(255,255,255,0)_60.59%,rgba(255,255,255,0.33)_93.17%)] transition-opacity duration-[350ms] group-hover:opacity-0"
                              style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
                            ></div>
                            <div 
                              className="absolute inset-0 rounded-[24px] p-[2px] pointer-events-none z-[10] bg-[linear-gradient(136.15deg,rgba(255,173,126,0.90)_8.56%,rgba(255,215,192,0.90)_31.42%,rgba(255,174,127,0.90)_69.16%,rgba(255,255,255,0.90)_100%)] opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100"
                              style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
                            ></div>

                            <div className="absolute inset-0 rounded-[24px] overflow-hidden z-[1]">
                                <img 
                                    src={card.img} 
                                    alt={card.title} 
                                    className="w-full h-full object-cover block transition-transform duration-[600ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-[1.06]" 
                                />
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(242,100,14,0.55)_0%,transparent_65%),linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.9)_100%)] z-[3] flex items-end p-6 pointer-events-none">
                                    <h3 className="text-white font-mulish text-xl font-bold m-0 leading-[1.2]">{card.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
