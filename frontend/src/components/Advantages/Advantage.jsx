import React from 'react';
import Slider from 'react-slick'; // Importing react-slick for the carousel
import { FaLeaf, FaShieldAlt, FaHeartbeat, FaBrain, FaRecycle, FaBolt, FaClock } from 'react-icons/fa'; // Example icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CopperAdvantagesCarousel = () => {
    const advantages = [
        {
            header: "Antimicrobial Properties",
            description: "Copper kills harmful bacteria, making it ideal for safe food handling.",
            icon: <FaShieldAlt />
        },

        {
            header: "Aids in Digestion",
            description: "Copper promotes healthy digestion by killing harmful microorganisms.",
            icon: <FaBolt />
        },
        {
            header: "Slows Aging",
            description: "Copper, as an antioxidant, helps fight free radicals, slowing aging.",
            icon: <FaClock />
        },
        {
            header: "Boosts Immunity",
            description: "Drinking water stored in copper vessels improves the immune system.",
            icon: <FaLeaf />
        },
        {
            header: "Promotes Cardiovascular Health",
            description: "Copper regulates blood pressure, heart rate, and cholesterol.",
            icon: <FaHeartbeat />
        },

        {
            header: "Eco-Friendly",
            description: "Copper is 100% recyclable and sustainable.",
            icon: <FaRecycle />
        },
        {
            header: "Improves Brain Function",
            description: "Copper is linked to better brain health and aids brain cell formation.",
            icon: <FaBrain />
        },
    ];

    // Settings for react-slick slider
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides visible at once
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Automatically scroll
        autoplaySpeed: 2000, // Speed of autoplay
        draggable: true, // Enable dragging
        responsive: [ // Responsiveness for different screen sizes
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="min-h-screen advantages sourceSans flex flex-col justify-center items-center bg-gradient-to-b from-cream-100 via-white to-brown-100 py-10">
            <h2 className="text-5xl font-extrabold text-brown-900 mb-12 text-center drop-shadow-lg">Why Use Copper Utensils?</h2>
            <Slider {...settings} className="w-full max-w-5xl text-center px-8 cursor-pointer landingHeader text-[#f4f0ea]">
                {advantages.map((advantage, index) => (
                    <div key={index} className="p-8">
                        <div
                            className="glass-effect p-6 rounded-xl shadow-lg relative bg-[#271212]"
                            style={{ backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)', }}
                        >
                            <div className="w-16 h-16 rounded-full mx-auto bg-gradient-to-r from-brown-600 to-brown-400 flex items-center justify-center text-cream-100 text-3xl mb-4 shadow-md">
                                {advantage.icon}
                            </div>
                            <h3 className="text-brown-800 text-2xl font-bold mb-2">{advantage.header}</h3>
                            <p className="text-brown-800 text-lg leading-relaxed font-medium">{advantage.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CopperAdvantagesCarousel;
