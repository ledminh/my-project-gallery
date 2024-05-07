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
    </main>
  );
}
