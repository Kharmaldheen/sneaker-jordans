import { useFetcher, useLoaderData } from "react-router-dom";
import ProductItemDetailsCarousal from "../features/products/ProductItemDetailsCarousal";
import { formatCurrency } from "../utilities/helpers";
import Size from "../UI/Size";
import { HiHeart } from "react-icons/hi";
import { format, parseISO } from "date-fns";
import { getShoe } from "../services/apiJordanShoes";
import ScrollToTopOnMount from "../UI/ScrollToTopOnMount";
import YouMayLike from "../UI/YouMayLike";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getCurrentQuantityById,
} from "../features/Cart/cartSlice";
import {
  addItemToWishlist,
  deleteItemFromWishlist,
  getCurrentQuantityByIdInWishlist,
} from "../features/Wishlist/wishlistSlice";
import toast from "react-hot-toast";

function ProductItemDetails() {
  const [selectedId, setSelectedId] = useState("");
  const [size, setSize] = useState("");
  const jordanShoe = useLoaderData();
  const dispatch = useDispatch();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/products");
    },
    [fetcher]
  );

  const { data = [] } = fetcher;

  const jordanShoes = data;

  const youMayLikeJordanShoes = jordanShoes.filter(
    (fetchedJordanShoe) => fetchedJordanShoe.id !== jordanShoe.id
  );

  const {
    category = "",
    id = "",
    modelName = "",
    releasedDate = "",
    shoeColor = "",
    styleNumber = "",
    retailPrice = "",
    price = "",
    description = "",
    discount = "",
    features = [],
    image2 = "",
    image3 = "",
    image4 = "",
    image5 = "",
  } = jordanShoe;

  const currentProductQuantityInCart = useSelector(getCurrentQuantityById(id));
  const currentProductQuantityInWishlist = useSelector(
    getCurrentQuantityByIdInWishlist(id)
  );

  const ISOSDate = new Date(releasedDate || "2023 07 15").toISOString();
  const parsedDate = parseISO(ISOSDate);
  const formattedDate = format(parsedDate, "MMMM, dd, yyyy");

  const newProductToAdd = {
    ...jordanShoe,
    quantity: 1,
    totalPrice: price * 1,
    size: size ? size : "Uk-6",
  };

  //cart
  const isInCart = currentProductQuantityInCart > 0;

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addItem(newProductToAdd));
      toast.success("Product added to the cart sucessfully");
    } else {
      dispatch(deleteItem(id));
      toast.success("Product deleted from the cart sucessfully");
    }
  };

  //wishlist
  const isInWishlist = currentProductQuantityInWishlist > 0;

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addItemToWishlist(newProductToAdd));
      toast.success("Product added to the wishlist sucessfully");
    } else {
      dispatch(deleteItemFromWishlist(id));
      toast.success("Product deleted from the wishlist sucessfully");
    }
  };

  return (
    <>
      <div className=" md:px-14 lg:px-48 md:py-20 px-2 py-8 ">
        <div className=" flex flex-col lg:flex-row gap-6 ">
          <div className="w-full md:w-auto flex-[1.5] max-w-[600px] lg:max-w-full mx-auto lg:mx-0 ">
            <ScrollToTopOnMount />
            <ProductItemDetailsCarousal
              image2={image2}
              image3={image3}
              image4={image4}
              image5={image5}
            />
          </div>
          <div className="flex-[1] py-3 font-monserrat flex flex-col gap-4 text-center lg:text-left">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
              {modelName}
            </h1>
            <p className=" font-medium lg:text-base md:text-base text-sm text-center lg:text-left">
              {`${category}'s`} shoes
            </p>
            <p>Released on {formattedDate}</p>

            <div>
              <div className="flex lg:justify-between justify-center gap-3 items-center">
                <div className="flex gap-4">
                  <span>MRP:</span>
                  <p>{formatCurrency(price)}</p>
                  <p className="line-through text-gray-400">
                    {formatCurrency(retailPrice)}
                  </p>
                </div>
                <p className="text-red-500 font-bold">{discount}% OFF</p>
              </div>

              <div className="text-gray-400 text-xs">
                <p>incl. of taxes</p>
                <p>(Also includes all applicable duties)</p>
              </div>
            </div>

            {/* The shoe Size */}
            <Size
              size={size}
              setSize={setSize}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              isInCart={isInCart}
            />

            {/* checklist and wishlist button */}
            <div className="flex flex-col w-full justify-center items-center gap-4 mt-4">
              <button
                className="hover:bg-black hover:text-white border-[4px] p-3 text-black rounded-3xl w-[90%] transition-all duration-300"
                onClick={handleAddToCart}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
              <button
                className="hover:bg-black hover:text-white border-[4px] p-3 text-black rounded-3xl w-[90%] transition-all duration-300 flex items-center justify-center gap-1"
                onClick={handleAddToWishlist}
              >
                {isInWishlist ? "Remove from wishlist" : "Wishlist"}{" "}
                <HiHeart className="text-gray-400" />
              </button>
            </div>

            {/* product details */}
            <div className="flex flex-col gap-3 mt-6 text-left">
              <h2 className="text-black text-xl font-bold text-center lg:text-left">
                Product details
              </h2>

              <ol className="flex flex-col gap-6 list-disc">
                <li>{description}</li>

                <li>
                  <span className="text-black font-bold">Features:</span>{" "}
                  {features.join(", ")}
                </li>

                <li>
                  <span className="font-bold">Color shown:</span> {shoeColor}
                </li>

                <li>
                  <span className="font-bold">Style :</span> {styleNumber}
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* {you may also like products} */}
        <div className="mt-20 md:mt-30">
          <YouMayLike youMayLikeJordanShoes={youMayLikeJordanShoes} />
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const jordanShoe = await getShoe(params.productId);
  return jordanShoe;
}

export default ProductItemDetails;
