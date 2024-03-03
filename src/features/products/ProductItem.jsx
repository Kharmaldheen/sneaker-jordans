import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import { useNavigate } from "react-router-dom";
import { addItem, deleteItem, getCurrentQuantityById } from "../Cart/cartSlice";
import toast from "react-hot-toast";
import {
  addItemToWishlist,
  deleteItemFromWishlist,
  getCurrentQuantityByIdInWishlist,
} from "../Wishlist/wishlistSlice";

function ProductItem({ jordanShoe }) {
  const { id, image1, modelName, retailPrice, price, category } = jordanShoe;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentItemQuantityInCart = useSelector(getCurrentQuantityById(id));
  const currentItemQuantityInWishlist = useSelector(
    getCurrentQuantityByIdInWishlist(id)
  );

  const categoryTagName = {
    men: "red",
    women: "green",
    basketball: "amber",
  };

  const handleProductClick = () => {
    navigate(`/products/${id}`, {
      state: {
        jordanShoe,
      },
    });
  };

  const newProduct = {
    ...jordanShoe,
    quantity: 1,
    totalPrice: price * 1,
    size: "UK-6",
  };

  //cart
  const isInCart = currentItemQuantityInCart > 0;
  const handleAddCart = () => {
    if (!isInCart) {
      dispatch(addItem(newProduct));
      toast.success("Product added to the cart successfully");
    } else {
      dispatch(deleteItem(id));
      toast.success("Product deleted from the cart sucessfully");
    }
  };

  //cart
  const isInWishlist = currentItemQuantityInWishlist > 0;
  const handleAddWishlist = () => {
    if (!isInWishlist) {
      dispatch(addItemToWishlist(newProduct));
      toast.success("Product added to the wishlist sucessfully");
    } else {
      dispatch(deleteItemFromWishlist(id));
      toast.success("Product deleted from the wishlist sucessfully");
    }
  };

  return (
    <li className="group">
      <div
        className="w-screen md:w-full h-[320px] overflow-hidden cursor-pointer"
        onClick={handleProductClick}
      >
        <img
          src={image1}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      <div className="w-full border-[1px] px-1 py-4 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-base">
              {modelName.substring(0, 15)}
            </h2>
          </div>
          <div className=" flex gap-2 justify-end relative items-center overflow-hidden w-36">
            <div className="flex gap-2 transform group-hover:translate-x-0 lg:group-hover:translate-x-44 transition-transform duration-500 text-sm relative w-32 justify-end">
              <p className="line-through text-gray-500">
                {formatCurrency(retailPrice)}
              </p>
              <p className="font-semibold">{formatCurrency(price)}</p>
            </div>
            <p
              className="absolute z-20 w-[110px] text-gray-500 hover:text-gray-900 lg:flex items-center gap-1 top-0 transform -translate-x-36 group-hover:-translate-x-4 transition-transform cursor-pointer duration-500 hidden border-[1px] px-1 py-[0.5] border-red-300 shadow-md text-center "
              onClick={handleAddCart}
            >
              {isInCart ? "Remove" : "add to cart &rarr;"}
            </p>
          </div>
        </div>
        <div>
          <p className={`text-${categoryTagName[category]}-500 font-bold`}>
            {category}
          </p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={handleAddCart}
              className="border-[1px] p-1 border-red-300 shadow-md lg:hidden"
            >
              {isInCart ? "Remove from cart" : "Add to cart"}
            </button>

            <button
              className="border-[1px] p-1 border-red-300 shadow-md"
              onClick={handleAddWishlist}
            >
              {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;

ProductItem.propTypes = null;
