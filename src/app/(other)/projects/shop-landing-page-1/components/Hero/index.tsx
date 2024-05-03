import Image from "next/image";
import HeroImage from "../../assets/images/hero.jpg";
import HeroImage1 from "../../assets/images/hero-1.jpg";
import HeroImage2 from "../../assets/images/hero-2.jpg";
import HeroImage3 from "../../assets/images/hero-3.jpg";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 grid-rows-1 relative">
      <div className="absolute inset-0 bg-black opacity-50 z-10">
        <div className="h-full flex justify-center items-center">
          <h1 className="text-white text-8xl font-bold md:text-9xl lg:text-[12rem]">
            abShop
          </h1>
        </div>
      </div>
      <div className="col-start-1 col-span-1 row-start-1 row-span-1 z-0 flex">
        <Image
          src={HeroImage}
          alt="Piece of clothing"
          className="md:hidden max-h-96 w-full object-cover"
          width={1920}
          height={1080}
        />
        <Image
          src={HeroImage1}
          alt="Middle age man clothing"
          className="hidden md:block max-h-[32rem] w-full object-cover"
          width={1920}
          height={1080}
        />
        <Image
          src={HeroImage2}
          alt="Young man clothing"
          className="hidden md:block max-h-[32rem] w-full object-cover"
          width={1920}
          height={1080}
        />
        <Image
          src={HeroImage3}
          alt="Woman clothing"
          className="hidden md:block max-h-[32rem] w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
}
