import { useTranslations } from "next-intl";
import { ProgressProps } from "./progress-data";

export function ProgressItem({ name, status }: ProgressProps) {
  const t = useTranslations("Progress");
  let statusColor;

  switch (status) {
    case "✅":
      statusColor = "text-green-500";
      break;
    case "❌":
      statusColor = "text-red-500";
      break;
    case "🛠️":
      statusColor = "text-yellow-500";
      break;
    default:
      statusColor = "text-gray-500";
  }
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-700">
      <span className="text-white">{t(name)}</span>
      <span className={`${statusColor}`}>{status}</span>
    </div>
  );
}
