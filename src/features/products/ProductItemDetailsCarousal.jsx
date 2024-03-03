import { useState } from "react";

function ProductItemDetailsCarousal({ image2, image3, image4, image5 }) {
  const [image, setImage] = useState(image2);
  return (
    <div className="flex lg:flex-row flex-col  gap-2 lg:h-[600px] transition-all duration-300 w-full">
      <div className="max-w-[400px]  md:max-w-[400px] lg:max-w-[120px] flex lg:flex-col flex-row gap-1 flex-1 order-2 lg:order-1">
        <div
          className={`cursor-pointer ${
            image === image2 ? "border-[2px] border-black" : ""
          }`}
          onClick={() => (image !== image2 ? setImage(image2) : "")}
        >
          <img src={image2} alt="" />
        </div>
        <div
          className={`cursor-pointer ${
            image === image3 ? "border-[2px] border-black" : ""
          }`}
          onClick={() => (image !== image3 ? setImage(image3) : "")}
        >
          <img src={image3} alt="" />
        </div>
        <div
          className={`cursor-pointer ${
            image === image4 ? "border-[2px] border-black" : ""
          }`}
          onClick={() => (image !== image4 ? setImage(image4) : "")}
        >
          <img src={image4} alt="" />
        </div>
        <div
          className={`cursor-pointer ${
            image === image5 ? "border-[2px] border-black" : ""
          }`}
          onClick={() => (image !== image5 ? setImage(image5) : "")}
        >
          <img src={image5} alt="" />
        </div>
      </div>
      <div className="h-auto md:w-[100%] w-full flex-1 order-1 lg:order-2">
        <img
          className="md:w-full lg:w-[65%] w-full h-full"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}

ProductItemDetailsCarousal.propTypes = null;

export default ProductItemDetailsCarousal;
