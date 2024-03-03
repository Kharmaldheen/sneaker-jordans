import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { deleteItem, updateItemSize } from "./cartSlice";
import { useState } from "react";

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
function CartItem({ item }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState("UK-6");

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    dispatch(updateItemSize({ id: item.id, size: newSize }));
    setSize(newSize);
  };

  return (
    <li className="flex gap-6 md:gap-10 py-8 md:py-7">
      <div className="w-[20%]">
        <img src={item.image1} alt="image of the cart item" />
      </div>

      <div className="w-[80%] flex justify-between">
        <div>
          <div className="flex flex-col gap-1.5">
            <h1 className="font-bold capitalize text-base md:text-xl">
              {item.modelName}
            </h1>
            <p className="capitalize text-gray-500 text-sm md:text-base">{`${item.category}'s shoes`}</p>
          </div>

          <div className="flex justify-between mt-6 md:hidden">
            <p className="font-bold text-sm">
              {formatCurrency(item.totalPrice)}
            </p>
            <button
              className="text-sm text-red-500 font-bold "
              onClick={() => dispatch(deleteItem(item.id))}
            >
              Remove
            </button>
          </div>

          <div className="mt-10 md:mt-20 flex justify-between w-[60%] gap-10 ">
            <div className="flex gap-0.5 items-center">
              <span className="text-sm md:text-base">Size</span>
              <select
                value={item.size ? item.size : "UK-6"}
                onChange={handleSizeChange}
              >
                {sizeObject.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <UpdateItemQuantity id={item.id} quantity={item.quantity} />
            </div>
          </div>
        </div>

        <div className="md:flex flex-col  justify-between hidden ">
          <p className="font-bold text-base">
            {formatCurrency(item.totalPrice)}
          </p>
          <button
            className="text-base text-red-500 font-bold "
            onClick={() => dispatch(deleteItem(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = null;

export default CartItem;
