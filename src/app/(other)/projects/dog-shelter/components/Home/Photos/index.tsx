import { DogPaws } from "../../../assets/icons";
import Image from "next/image";
import Dog1 from "../../../assets/images/dog1.png";
import Dog2 from "../../../assets/images/dog2.png";
import Dog3 from "../../../assets/images/dog3.png";
import Dog4 from "../../../assets/images/dog4.png";

export default function Photos() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-40 text-primary-1 -translate-x-5 translate-y-[7rem] relative">
        <DogPaws xTop={0} yTop={0} xBottom={200} yBottom={265} />

        <Image
          src={Dog1}
          alt="Dog 1"
          width={200}
          height={200}
          className="absolute top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2 h-34 w-auto"
        />
      </div>
      <div className="w-40 text-primary-1 relative">
        <DogPaws xTop={320} yTop={0} xBottom={220} yBottom={342} />
        <Image
          src={Dog2}
          alt="Dog 2"
          width={200}
          height={200}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-24 w-auto"
        />
      </div>
      <div className="w-40 text-primary-1 relative">
        <DogPaws xTop={580} yTop={0} xBottom={220} yBottom={343} />
        <Image
          src={Dog3}
          alt="Dog 3"
          width={200}
          height={200}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-24 w-auto"
        />
      </div>
      <div className="w-40 text-primary-1 translate-x-5 translate-y-[7rem] relative">
        <DogPaws xTop={0} yTop={370} xBottom={200} yBottom={264} />
        <Image
          src={Dog4}
          alt="Dog 4"
          width={200}
          height={200}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-24 w-auto"
        />
      </div>
    </div>
  );
}
