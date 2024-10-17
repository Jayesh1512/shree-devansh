import React, { useRef } from 'react';
import CategoryItem from './CategoryItem';
import { motion, useScroll, useTransform } from 'framer-motion';

const Category = () => {
    const categories = [
        {
            title: "Matka with Tap",
            description: "Sustainable water storage solution",
            image: "/img/products/matka_tap.jpg",
        },
        {
            title: "Ceramic Flower Vase",
            description: "Hand-painted home decor",
            image: "/img/products/bottle2.jpg",
        },
        {
            title: "Wooden Spice Box",
            description: "Rustic kitchen organization",
            image: "/img/products/bottle1.jpg",
        },
        {
            title: "Bamboo Fruit Basket",
            description: "Eco-friendly fruit storage",
            image: "/img/products/pot1.jpg",
        },
        {
            title: "Decorative Pot",
            description: "Elegant home accessory",
            image: "/img/products/pot2.jpg",
        },
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Set the animation to start moving after the first category item is fully in view
    // const x = useTransform(scrollYProgress, [0, 0.15], ["0%", "0%"], { clamp: false });
    const xEnd = useTransform(scrollYProgress, [0.15, 1], ["0%", "-90%"]);

    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.99, 1], [0, 1, 0.9, 0]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#f4f0ea]">
            <motion.h1
                className="text-center p-16 text-5xl font-bold text-gray-800 sticky top-0"
                style={{ opacity }}
            >
                Our Categories
            </motion.h1>

            <div className='sticky top-0 h-screen overflow-hidden flex items-center'>
                <motion.div
                    style={{ x: xEnd, willChange:'transform' }}
                    className='absolute top-[25%] left-1/2 flex gap-x-96'
                >
                    {categories.map((category, index) => (
                        <CategoryItem key={index} {...category} index={index} progress={scrollYProgress} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;
