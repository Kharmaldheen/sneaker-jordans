import { useNavigate, useNavigation, useRouteError } from "react-router-dom";
import { Loader } from "./Loader";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="font-montserrat">
      {isLoading && <Loader />}
      <div className="flex flex-col gap-4 h-screen items-center justify-center text-xl md:text-2xl text-center">
        <img
          src="/warning-sign-icon-transparent-background-free-png.png"
          alt=""
          className="animate-bounce h-80"
        />
        <h1>Ooops!! Something went wrong 😢</h1>
        <p className="text-red-500 font-bold">{error.data || error.message}</p>

        <button
          className="border-[1px] border-red-400 p-1 hover:bg-red-500 text-black hover:text-white transition-colors duration-300"
          onClick={() => navigate(-1)}
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default Error;
