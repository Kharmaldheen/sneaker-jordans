import CartOverview from "./CartOverview";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-white align-center md:px-14 px-8 md:h-20 h-14 border-b border-black w-full font-montserrat sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-4">
        <Logo />
        <Navbar />
        <div className="hidden md:block">
          <CartOverview />
        </div>
      </div>
    </header>
  );
}

export default Header;
