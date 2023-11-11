import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assests/borabora.jpg";
import image2 from "../assests/borabora2.jpg";
import image3 from "../assests/Turkey.jpeg";
import image6 from "../assests/Norway.jpeg";
import image4 from "../assests/maldives2.jpg";
import image5 from "../assests/Islamabad.jpeg";
import image7 from "../assests/Paris.jpeg";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="z-10 left-10 border rounded-4xl absolute lg:-ml-4 md:-ml-2 -ml-1 top-2/4  hover:bg-gray-500 rounded-full p-2" onClick={onClick}>
      <FaArrowLeft className="h-6 w-6 text-white" />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="z-10 border rounded-4xl right-10 absolute lg:-mr-4 md:-mr-2 -mr-1 top-2/4 hover:bg-gray-500 rounded-full p-2" onClick={onClick}>
      <FaArrowRight className="h-6 w-6 text-white" />
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Slider {...settings} className="w-[80vw] h-full py-8 ">
        <div>
          <img src={image1} alt="Slide 1" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
        <div>
          <img src={image3} alt="Slide 2" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
        <div>
          <img src={image4} alt="Slide 2" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
        <div>
          <img src={image5} alt="Slide 3" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
        <div>
          <img src={image6} alt="Slide 3" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
        <div>
          <img src={image7} alt="Slide 3" className="w-full object-cover h-96 md:h-[50vh] lg:h-[80vh] 2xl:h-[70vh]" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
