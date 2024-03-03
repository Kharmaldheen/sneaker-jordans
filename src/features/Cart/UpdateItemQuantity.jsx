import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button
        className="inline-block text-sm rounded-full bg-gray-500  font-semibold uppercase -tracking-wide text-white transition-colors duration-300 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed py-1 md:px-3.5 md:py-2 px-2.5"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>

      <p className="font-medium text-sm">{quantity}</p>

      <button
        className="inline-block text-sm rounded-full bg-gray-500  font-semibold uppercase -tracking-wide text-white transition-colors duration-300 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed py-1 md:px-3.5 md:py-2 px-2.5"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}

UpdateItemQuantity.propTypes = null;

export default UpdateItemQuantity;
