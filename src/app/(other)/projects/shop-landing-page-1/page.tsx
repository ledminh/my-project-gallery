import TopMessage from "./components/TopMessage";
import Logo from "./components/Logo";
import MainMenu from "./components/MainMenu";
import SideMenu from "./components/SideMenu";
import PopUpMenu from "./components/PopUpMenu";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Tabs from "./components/Tabs";
import CentralImage from "./components/CentralImage";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import ShopAddresses from "./components/ShopAddresses";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

export default function ShopLandingPage1() {
  return (
    <div className="max-w-[1680px] mx-auto shadow-lg shadow-black">
      <TopMessage />
      <header className="flex justify-between items-center p-2 gap-4">
        <Logo />
        <div className="hidden md:block">
          <MainMenu />
        </div>
        <div className="hidden md:block">
          <SideMenu />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <PopUpMenu />
        </div>
      </header>
      <main className="flex flex-col gap-8">
        <Hero />
        <Categories />
        <Tabs />
        <CentralImage />
        <Brands />
        <Testimonials />
        <ShopAddresses />
      </main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </div>
  );
}

// https://dribbble.com/shots/24074241-E-Commerce-Landing-page-Design
