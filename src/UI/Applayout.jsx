import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import FooterComponent from "./Footer";
import { Loader } from "./Loader";

import { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const ref = useRef();

  useEffect(() => ref.current.scrollTo(0, 0));

  return (
    <div
      ref={ref}
      className="h-screen w-full font-montserrat overflow-y-scroll  overflow-x-hidden flex flex-col"
    >
      {isLoading && <Loader />}

      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <FooterComponent />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "blue",
            color: "white",
          },
        }}
      />
    </div>
  );
}

export default Applayout;
