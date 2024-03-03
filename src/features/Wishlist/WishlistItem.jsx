import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utilities/helpers";
import UpdateWishlistItemQuantity from "./UpdateWishlistItemQuantity";
import AddWishlistItemButton from "./AddWishlistItemButton";
import DeleteWishlistItemButton from "./DeleteWishlistItemButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWishlistItemSize } from "./wishlistSlice";
import Size from "../../UI/Size";

const sizeObject = [
  "Uk-6",
  "Uk-6.5",
  "UK-7",
  "UK-7.5",
  "UK-8",
  "Uk-8.5",
  "UK-9",
  "UK-9.5",
  "UK-10",
  "UK-10.5",
  "UK-11",
  "UK-11.5",
];

function WishlistItem({ product }) {
  const navigate = useNavigate();
  const [showSize, setShoeSize] = useState("UK-6");
  const dispatch = useDispatch();
  const {
    id,
    modelName,
    category,
    image1,
    size,
    totalPrice,
    quantity,
    discount,
  } = product;

  const handleProductClick = () => {
    navigate(`/products/${id}`, {
      state: {
        product: product,
      },
    });
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    dispatch(updateWishlistItemSize({ id, size: newSize }));
    setShoeSize(newSize);
  };
  return (
    <li className="px-5 py-9 md:p-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-4 md:gap-6">
        <img src={image1} alt="" className=" h-10" />
        <p
          className="mb-1 sm:mb-0 cursor-pointer text-base md:text-lg"
          onClick={handleProductClick}
          title="product details font-bold"
        >
          {modelName} ({quantity})
        </p>
      </div>

      <div className="flex justify-between md:gap-8 mt-6 md:mt-0">
        <p className="text-base md:text-lg text-gray-500">
          {" "}
          {`${category}'s`} shoes
        </p>

        <div className="flex items-center">
          <span>Size</span>
          <select
            value={product.size ? product.size : showSize}
            onChange={handleSizeChange}
          >
            {sizeObject.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 mt-4 ">
        <p className="text-sm font-bold flex md:flex-col gap-10 md:gap-1">
          {formatCurrency(totalPrice)}
          {discount && (
            <>
              <br />
              <cite className="text-red-600">{discount}% Off</cite>
            </>
          )}
        </p>

        <UpdateWishlistItemQuantity quantity={quantity} id={id} />

        <AddWishlistItemButton product={product} />

        <DeleteWishlistItemButton id={id} />
      </div>
    </li>
  );
}

WishlistItem.propTypes = null;

export default WishlistItem;
