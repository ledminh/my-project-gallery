import { topMessageConfig } from "../../config";
import Timer from "./Timer";

export default function TopMessage() {
  if (!topMessageConfig.display) {
    return null;
  }

  return (
    <div className="bg-black text-center p-2 text-sm">
      <span className="text-gray-200">{topMessageConfig.message}</span>
      {topMessageConfig.timer.display && (
        <>
          <span> </span>
          <Timer />
        </>
      )}
    </div>
  );
}
