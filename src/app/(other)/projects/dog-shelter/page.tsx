import Photos from "./components/Home/Photos";
import Header from "./components/Home/Header";
import MainButtonLink from "./components/commons/MainButtonLink";
import CircleButtonLink from "./components/commons/CircleButtonLink";

export default function DogShelter() {
  return (
    <main>
      <Photos />
      <Header />
      <MainButtonLink />
      <CircleButtonLink>FB</CircleButtonLink>
      <CircleButtonLink>TW</CircleButtonLink>
      <div className="bg-primary-1 w-40 h-40 group" />
      <div className="bg-primary-2 w-40 h-40 group-hover:bg-black" />
      <div className="bg-primary-3 w-40 h-40" />
    </main>
  );
}

// https://dribbble.com/shots/24130813-Dog-Shelter-Showcase-Slider-for-WordPress
