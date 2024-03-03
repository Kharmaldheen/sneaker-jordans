import { useNavigation } from "react-router-dom";
import Header from "../UI/Header";
import Slider from "../UI/Slider";
import { Loader } from "../UI/Loader";

function HomePage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-screen">
      {isLoading && <Loader />}

      <Header />
      <Slider />
    </div>
  );
}

export default HomePage;
