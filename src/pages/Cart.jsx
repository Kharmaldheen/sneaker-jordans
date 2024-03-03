import { useDispatch, useSelector } from "react-redux";
import CartItem from "../features/Cart/CartItem";
import { clearCart, getTotalProductPrice } from "../features/Cart/cartSlice";
import { formatCurrency } from "../utilities/helpers";
import EmptyCart from "../features/Cart/EmptyCart";

function Cart() {
  const carts = useSelector((store) => store.cart.cart);
  const totalCartPrice = useSelector(getTotalProductPrice);

  const dispatch = useDispatch();

  if (!carts.length) return <EmptyCart />;

  return (
    <div className="md:px-14 lg:px-44 md:py-20 px-6 py-8 flex flex-col gap-5 md:gap-10">
      <div className="flex items-center flex-col gap-4">
        <h1 className="capitalize text-white mt-8 py-2 md:w-80 w-48 text-center bg-black md:text-3xl text-xl  font-BeVietnam">
          Shopping Cart
        </h1>
        <span className="w-20 h-[3px] bg-black mb-6"></span>
      </div>

      <div className="flex md:justify-between md:flex-row flex-col justify-normal md:gap-4 gap-10 ">
        <div className="md:w-[50%] w-full flex flex-col gap-6">
          <div className="flex justify-between">
            <h2 className="text-lg md:text-xl font-bold">Cart Items</h2>
            <button
              className="p-1.5 md:p-2 bg-red-500 text-white font-bold rounded-md text-sm md:text-base"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
          <ul className="divide-y divide-stone-300">
            {carts.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
        <div className="md:w-[30%] w-full flex flex-col gap-8 md:gap-12">
          <h2 className="text-lg md:text-xl font-bold">Summary</h2>

          <div className="bg-gray-100 p-6 rounded-3xl flex flex-col gap-8 md:gap-12 w-full">
            <div className="flex justify-between">
              <h3 className="uppercase font-bold text-sm md:text-base">
                Subtotal
              </h3>
              <p className="font-bold text-sm md:text-base">
                {formatCurrency(totalCartPrice)}
              </p>
            </div>

            <p className="text-justify text-sm md:text-base leading-6 md:leading-7">
              The subtotal reflects the total price of your order, including
              taxes, duties and discounts. However, it does not include delivery
              costs and international transaction fees
            </p>
          </div>

          <div className="w-full">
            <button className="bg-black p-4 md:p-5 rounded-full text-white w-full text-sm md:text-base">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
