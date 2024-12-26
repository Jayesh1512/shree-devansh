const About_small = () => {
    return (
        <div className="lg:hidden">
            <div className="min-h-screen bg-[#f4f0ea] lg:px-40 px-10 py-16 flex lg:flex-row flex-col gap-10 text-[#271212] items-center lg:justify-between justify-center text-center lg:text-left">
                <div className="flex gap-4">
                    {/* Static image */}
                    <img src="/img/About/img2.png" alt="" className="w-1/2 rounded-md" />

                    {/* Animated image */}
                    <img
                        src="/img/About/img1.png"
                        alt=""
                        className="w-1/2 left-1/4 rounded-md"
                    />
                </div>
                <div>
                    <h1 className="text-4xl text-center md:text-left font-bold ">Pure Copper...Pure Soul...</h1>
                    <p className="max-w-xl text-xl font-semibold">
                        Crafting excellence in copper for over 40 years with a diverse range
                        of top-quality products designed to meet global standards at
                        affordable prices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About_small