import { useDispatch } from "react-redux";
import {
  decreaseWishlistItemQuantity,
  increaseWishlistItemQuantity,
} from "./wishlistSlice";

function UpdateWishlistItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button
        className="inline-block rounded-full bg-gray-500  font-semibold uppercase -tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-tertiary-color focus:ring-offset-2 disabled:cursor-not-allowed py-1 md:px-3.5 md:py-2 px-2.5 text-sm"
        onClick={() => dispatch(decreaseWishlistItemQuantity(id))}
      >
        -
      </button>

      <p className="='font-medium text-sm">{quantity}</p>

      <button
        className="inline-block rounded-full bg-gray-500  font-semibold uppercase -tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-tertiary-color focus:ring-offset-2 disabled:cursor-not-allowed py-1 md:px-3.5 md:py-2 px-2.5 text-sm"
        onClick={() => dispatch(increaseWishlistItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}

UpdateWishlistItemQuantity.propTypes = null;

export default UpdateWishlistItemQuantity;
