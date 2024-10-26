"use client";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import Image from "/testimonial/testimonial-image.svg";
import vector1 from "/testimonial/vector-1.svg";
import vector2 from "/testimonial/vector-2.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Aman Agarwal",
    position: "Mumbai",
    review:
      "About the product range: The variety and quality of the products exceeded my expectations. I found exactly what I was looking for, and the entire process from ordering to delivery was seamless. I’m thoroughly impressed!",
    imageUrl: Image,
  },
  {
    name: "Disha Motwani",
    position: "Indore",
    review:
      "Best in segment pricing: Not only did I find the best prices for the products I needed, but the overall value for money was excellent. The quality, combined with such competitive pricing, made it an easy decision to continue purchasing from here.",
    imageUrl: Image,
  },
  {
    name: "Daarts Incorp",
    position: "Nagpur",
    review:
      "Corporate gifting execution: Our corporate gifting requirements were met with utmost professionalism. The products were delivered on time, beautifully packaged, and well-received by our clients. We will definitely be partnering with them again in the future.",
    imageUrl: Image,
  },
  {
    name: "Rohit Kumar",
    position: "Chennai",
    review:
      "Quality & durability of the products: The build quality of the products is exceptional, and they have stood the test of time. Whether it’s for personal use or corporate gifts, the durability and finish are what set them apart from others in the market.",
    imageUrl: Image,
  },
  {
    name: "Rahul Verma",
    position: "Head of Marketing, Excelsior Pvt Ltd",
    review:
      "The innovative designs and top-notch quality of the products have been a game changer for our marketing campaigns. We’ve received fantastic feedback from our clients, and I can confidently say that their products have helped elevate our brand image.",
    imageUrl: Image,
  },
  {
    name: "Priya Shah",
    position: "Founder, Blooming Tales",
    review:
      "Exceptional service and attention to detail! The products not only met but exceeded our expectations. Our clients loved the thoughtful packaging and the overall aesthetic appeal. This has significantly boosted our corporate gifting strategy.",
    imageUrl: Image,
  },
  {
    name: "Karan Mehta",
    position: "Project Manager, TechWave Solutions",
    review:
      "I appreciate the swift delivery and the product durability. We’ve been using the products for months, and they still look as good as new. The ease of ordering and the prompt customer service also stood out for me.",
    imageUrl: Image,
  },
  {
    name: "Shreya Kapoor",
    position: "Operations Manager, CraftCo",
    review:
      "From the first interaction to the final delivery, the team was professional, responsive, and delivered quality beyond expectations. Our requirements were quite specific, but they made sure everything was taken care of down to the smallest detail.",
    imageUrl: Image,
  },
  {
    name: "Nikhil Rao",
    position: "Director, Innoventures",
    review:
      "We’ve been using their products for over a year now, and the durability and aesthetic appeal are unmatched. Every product feels premium, and our customers have shared nothing but positive feedback about the items they’ve received.",
    imageUrl: Image,
  },
  {
    name: "Anjali Nair",
    position: "Co-founder, GreenLeaf Eco Products",
    review:
      "The sustainability and eco-friendliness of their products have really aligned with our brand’s values. It's rare to find products that are both high-quality and environmentally conscious, but they’ve nailed it. We couldn’t be happier with our partnership.",
    imageUrl: Image,
  },
];
;

const TestimonialPage = () => {
  var settings = {
    dots: false, // Disable dots (buttons)
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay for automatic scrolling
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-white landingHeader w-full landingHeader page2 rounded-3xl relative overflow-hidden">
      <div className="w-full py-16 lg:px-16 px-8 backdrop-brightness-50 ">
        <div className="w-full h-full flex items-center lg:text-left text-center flex-col lg:text-5xl text-4xl">
          <p className="font-semibold text-5xl">Testimonial <br className="block md:hidden" /> <span className="md:text-5xl text-3xl"> That </span></p>
          <p className="font-medium text-3xl">
            Speak To <span className="text-orange-400">Our Result</span>
          </p>
          <p className="lg:text-lg text-sm text-gray-50 text-center lg:w-1/2 w-5/6 mt-5 ">
            &quot;Discover the Impact: Hear What Our Clients Have to Say&quot;
            Explore firsthand testimonials from satisfied clients, detailing their
            experiences collaborating with us. Let their stories inspire you to
            embark on your own journey with us.
          </p>
        </div>
        <Slider {...settings} className="mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Testimonial
                name={testimonial.name}
                position={testimonial.position}
                review={testimonial.review}
                imageUrl={testimonial.imageUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
      <img
        src={vector1.src}
        alt=""
        className="absolute top-20 right-1/3 lg:block hidden"
      />
      <img
        src={vector2.src}
        alt=""
        className="md:block hidden absolute top-1/2 right-1/4"
      />
    </div>
  );
};

export default TestimonialPage;
