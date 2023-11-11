import React from "react";
import image1 from "../assests/borabora.jpg";
import image2 from "../assests/borabora2.jpg";
import image3 from "../assests/keywest.jpg";
import image4 from "../assests/maldives2.jpg";
import image5 from "../assests/maldives3.jpg";

function Destination() {
  return (
    <div className="max-w-[1240px] py-16 px-4 mx-auto text-center"  id='Destination'>
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbian's Best Beaches</p>

      <div className="grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 " src={image1} alt=""/>
        <img className="w-full h-full object-cover" src={image2} alt=""/>
        <img className="w-full h-full object-cover" src={image3} alt=""/>
        <img className="w-full h-full object-cover" src={image4} alt=""/>
        <img className="w-full h-full object-cover" src={image5} alt=""/>
      </div>
    </div>
  );
}

export default Destination;
