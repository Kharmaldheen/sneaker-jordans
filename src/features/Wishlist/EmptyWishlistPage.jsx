import { Link } from "react-router-dom";

function EmptyWishlistPage() {
  return (
    <div className="md:px-14 lg:px-44 md:py-20 px-6 py-8 space-y-7">
      <Link
        to="/"
        className="animate-pulse text-base md:text-xl font-bold text-red-500"
      >
        &larr; Back to Shopping!
      </Link>

      <div className="flex flex-col justify-center items-center gap-8">
        <img src="/empty-wishlist.png" className="text-white" alt="" />

        <p className="font-semibold md:text-2xl text-xl text-center">
          Hey there, Your wishlist is still empty. Start adding some products :)
        </p>
      </div>

      <button className="flex justify-center items-centers mx-auto bg-red-500 text-white p-4 rounded-md text-sm md:text-base">
        <Link to="/">Go Back to Shopping</Link>
      </button>
    </div>
  );
}

export default EmptyWishlistPage;
