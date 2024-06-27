import { ProgressItem } from "./porgress-item";
import { progressData } from "./progress-data";

export default function Progress() {
  return (
    <div className="bg-gray-900 p-4 rounded-3xl w-full">
      <h1 className="text-2xl text-white mb-4">Game Development Progress</h1>
      {progressData.map((item, index) => (
        <ProgressItem key={index} name={item.name} status={item.status} />
      ))}
    </div>
  );
}
