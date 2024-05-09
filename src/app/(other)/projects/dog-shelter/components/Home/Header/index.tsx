import { DogPawIcon } from "../../../assets/icons";

export default function Header() {
  return (
    <header className="w-3/4 h-auto flex flex-col justify-center items-center">
      <div className="w-1/2 h-auto text-primary-1">
        <DogPawIcon />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h1 className="text-5xl font-bold text-primary-3">Find Your</h1>
          <h1 className="text-5xl font-bold text-primary-3">Furry Friend</h1>
        </div>
        <h5 className="text-xl font-bold text-secondary">
          Begin Your Adoption Journey Today!
        </h5>
      </div>
    </header>
  );
}
