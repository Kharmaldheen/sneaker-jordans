import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearWishlist,
  getTotalWishlistPrice,
} from "../features/Wishlist/wishlistSlice";
import { addToCartFromWishlist } from "../features/Cart/cartSlice";
import toast from "react-hot-toast";
import { formatCurrency } from "../utilities/helpers";
import WishlistItem from "../features/Wishlist/WishlistItem";
import EmptyWishlistPage from "../features/Wishlist/EmptyWishlistPage";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist.wishlist);
  const totalWishlistPrice = useSelector(getTotalWishlistPrice);

  const handleAddtoCartFromWishList = () => {
    dispatch(addToCartFromWishlist(wishlist));
    dispatch(clearWishlist());
    toast.success("wishlists added to cart successfully");
  };

  const handleClearWishList = () => {
    dispatch(clearWishlist());
    toast.success("wishlist sucessfully cleared");
  };

  if (!wishlist.length) return <EmptyWishlistPage />;

  return (
    <div className="md:px-14 lg:px-44 md:py-20 px-6 py-8 flex flex-col gap-4 md:gap-6">
      <Link
        className="text-red-500 font-bold animate-pulse text-sm md:text-base"
        to="/products"
      >
        &larr; Back to Shopping
      </Link>

      <div className="flex justify-between items-center mt-7 ">
        <h2 className="text-base md:text-xl font-semibold ">Your WishList</h2>
        <h2 className="text-base md:text-lg font-bold">
          Total: {formatCurrency(totalWishlistPrice)}
        </h2>
      </div>

      <ul className="divide-y divide-stone-200 border-b mt-3 pb-6">
        {wishlist.map((item) => (
          <WishlistItem product={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <button
          className="bg-black text-white rounded-md p-3 md:p-4 text-sm md:text-base"
          onClick={handleAddtoCartFromWishList}
        >
          Add to Cart
        </button>

        <button
          onClick={handleClearWishList}
          className="bg-red-500 text-white rounded-md p-3 md:p-4 text-sm md:text-base"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
