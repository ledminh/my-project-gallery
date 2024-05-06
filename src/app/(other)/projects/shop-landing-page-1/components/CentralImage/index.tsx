import Image from "next/image";
import centralImage from "../../assets/images/central-image.jpg";
import { RightArrowHeadIcon } from "../../assets/icons";

export default function CentralImage() {
  return (
    <section className="relative">
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black/60 to-black/10" />
      <div className="absolute top-0 w-full h-full bg-gradient-to-l from-black/60 to-black/10" />
      <div className="absolute top-0 w-full h-full">
        <div className="flex flex-col justify-center items-center h-full text-white gap-2 p-2">
          <h1 className="text-5xl font-bold">Spring Collection</h1>
          <p className="text-center">
            Time to jazz up your wardrobe with a mix of styles to make dressing
            up effortless and fun
          </p>
          <button className="px-4 py-2 mt-4 bg-white text-black rounded-lg flex justify-between items-center gap-2">
            <span>Shop Now</span>
            <div className="w-6 h-6">
              <RightArrowHeadIcon />
            </div>
          </button>
        </div>
      </div>
      <Image
        src={centralImage}
        alt="Central Image"
        width="1680"
        height="580"
        className="w-full h-[34rem] object-cover"
      />
    </section>
  );
}
