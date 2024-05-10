import { DogPaws } from "../../../assets/icons";
export default function Photos() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-40 text-primary-1 -translate-x-5 translate-y-[7rem]">
        <DogPaws xTop={0} yTop={0} xBottom={200} yBottom={265} />
      </div>
      <div className="w-40 text-primary-1">
        <DogPaws xTop={320} yTop={0} xBottom={220} yBottom={342} />
      </div>
      <div className="w-40 text-primary-1">
        <DogPaws xTop={580} yTop={0} xBottom={220} yBottom={343} />
      </div>
      <div className="w-40 text-primary-1 translate-x-5 translate-y-[7rem]">
        <DogPaws xTop={0} yTop={370} xBottom={200} yBottom={264} />
      </div>
    </div>
  );
}
