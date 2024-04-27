import TopMessage from "./components/TopMessage";
import Logo from "./components/Logo";
import MainMenu from "./components/MainMenu";
import SideMenu from "./components/SideMenu";
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
    <>
      <TopMessage />
      <header>
        <Logo />
        <MainMenu />
        <SideMenu />
      </header>
      <main>
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
    </>
  );
}

// https://dribbble.com/shots/24074241-E-Commerce-Landing-page-Design
