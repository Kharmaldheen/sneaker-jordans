import { useDispatch } from "react-redux";
import { addIndividualItemToCartFromWishlist } from "../Cart/cartSlice";
import { deleteItemFromWishlist } from "./wishlistSlice";
import toast from "react-hot-toast";

function AddWishlistItemButton({ product }) {
  const dispatch = useDispatch();

  const handleAddItemFromWishlistToCart = () => {
    dispatch(addIndividualItemToCartFromWishlist(product));
    dispatch(deleteItemFromWishlist(product.id));
    toast.success("Product added to cart sucessfully");
  };
  return (
    <button
      className="bg-black text-white p-2 rounded-lg text-sm md:text-base"
      onClick={handleAddItemFromWishlistToCart}
    >
      Add product to Cart
    </button>
  );
}

AddWishlistItemButton.propTypes = null;

export default AddWishlistItemButton;
