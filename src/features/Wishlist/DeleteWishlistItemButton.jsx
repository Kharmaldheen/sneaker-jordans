import { useDispatch } from "react-redux";
import { deleteItemFromWishlist } from "./wishlistSlice";
import toast from "react-hot-toast";

function DeleteWishlistItemButton({ id }) {
  const dispatch = useDispatch();
  const handleDeleteItemFromWishlist = () => {
    dispatch(deleteItemFromWishlist(id));
    toast.success("Product deleted from the wishlist sucessfully");
  };
  return (
    <button
      className="bg-red-500 text-white p-2 rounded-lg text-sm md:text-base"
      onClick={handleDeleteItemFromWishlist}
    >
      delete
    </button>
  );
}

DeleteWishlistItemButton.propTypes = null;

export default DeleteWishlistItemButton;
