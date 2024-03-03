import { HiHeart } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getTotalCartQuantity } from "../features/Cart/cartSlice";
import { getTotalWishlistQuantity } from "../features/Wishlist/wishlistSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalWishlistQuantity = useSelector(getTotalWishlistQuantity);

  const navigate = useNavigate();

  return (
    <div className="flex  items-center md:gap-7 gap-4  ">
      <div className="md:text-4xl text-2xl  relative  text-gray-500">
        <NavLink to="/wishlist">
          <HiHeart />
        </NavLink>
        <span className="md:text-sm text-xs absolute top-0 md:left-5 left-[15px] block bg-red-500 text-white rounded-full md:px-1 px-1 font-BeVietnam">
          {totalWishlistQuantity}
        </span>
      </div>

      <div
        className="md:text-4xl text-2xl relative text-gray-500"
        onClick={() => navigate("/cart")}
      >
        <NavLink to="/cart">
          <HiShoppingCart />
        </NavLink>
        <span className="md:text-sm text-xs absolute top-0 md:left-5 left-[15px] block bg-red-500 text-white rounded-full md:px-1 px-1 font-BeVietnam">
          {totalCartQuantity}
        </span>
      </div>
    </div>
  );
}

export default CartOverview;
