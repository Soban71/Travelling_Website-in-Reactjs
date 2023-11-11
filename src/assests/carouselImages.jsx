import React,{useState}from 'react';
import image1 from "../assests/borabora.jpg";
import image2 from "../assests/borabora2.jpg";
import image3 from "../assests/keywest.jpg";
import image4 from "../assests/maldives2.jpg";
import image5 from "../assests/maldives3.jpg";
import Carousel from '../components/Carousel';

function CarouselImages() {
    const images = [image1, image2, image3, image4, image5];
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div>
            <Carousel images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
        </div>
    );
}

export default CarouselImages;
