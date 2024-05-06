import Image from "next/image";
import centralImage from "../../assets/images/central-image.jpg";

export default function CentralImage() {
  return (
    <section className="relative">
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black/60 to-black/10" />
      <div className="absolute top-0 w-full h-full bg-gradient-to-l from-black/60 to-black/10" />
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
