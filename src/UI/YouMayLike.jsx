import Slider from "react-slick";
import "../UI/slick-theme.css";
import "../UI/slick.css";
import ProductItem from "../features/products/productItem";

function YouMayLike({ youMayLikeJordanShoes }) {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "progressive",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-center font-bold text-tertiary-color lg:text-4xl md:text-3xl text-2xl">
          You May Also Like
        </h1>
        <span className="w-40 mx-auto h-[3px] bg-black mb-6"></span>
      </div>

      <div className="mx-auto">
        <div className="">
          <Slider {...settings}>
            {youMayLikeJordanShoes.map((jordanShoe) => (
              <div key={jordanShoe?.id} className="px-0 md:px-4">
                <ProductItem jordanShoe={jordanShoe} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

YouMayLike.propTypes = null;

export default YouMayLike;
