import React, { useRef } from 'react';
import CategoryItem from './CategoryItem';
import { motion, useScroll, useTransform } from 'framer-motion';

const Category = () => {
    
    const categories = [
        {
            title: "Copper Kalash & Matkas",
            description: "Traditional copper storage for purity and health.",
            image: "/img/products/Matkas.jpg",
        },
        {
            title: "Drinkware Bottles",
            description: "Stylish, eco-friendly copper water bottles.",
            image: "/img/products/drinkwareBottle.jpg",
        },
        {
            title: "Copper Gifting",
            description: "Unique, handcrafted copper gifts for any occasion.",
            image: "/img/products/copperGifting.jpg",
        },
        {
            title: "Kitchenware Collection",
            description: "Essential, durable copperware for everyday use.",
            image: "/img/products/kitchenwareCollection.jpg",
        },
        {
            title: "Decor & Utility Collection",
            description: "Elegant copper decor for a refined touch.",
            image: "/img/products/decor.jpg",
        },
    ];
    

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const xEnd = useTransform(scrollYProgress, [0.15, 1], ["0%", "-90%"]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.99, 1], [0, 1, 0.9, 0]);

    return (
        <>
            {/* Desktop View */}
            <section ref={targetRef} className="hidden sm:block relative h-[400vh] bg-[#f4f0ea]">
                <motion.h1
                    className="text-center p-16 text-5xl font-bold text-gray-800 sticky top-0"
                    style={{ opacity }}
                >
                    Our Categories
                </motion.h1>

                <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                    <motion.div
                        style={{ x: xEnd, willChange: 'transform' }}
                        className="absolute top-[25%] left-1/2 flex gap-x-96"
                    >
                        {categories.map((category, index) => (
                            <CategoryItem key={index} {...category} index={index} progress={scrollYProgress} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mobile View */}
            <section className="block sm:hidden bg-[#f4f0ea] py-8 px-4">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Our Categories</h1>
                <div className="flex flex-col gap-y-20">
                    {categories.map((category, index) => (
                        <CategoryItem key={index} {...category} index={index} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Category;
