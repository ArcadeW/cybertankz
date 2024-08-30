export interface ProgressProps {
  name: string;
  status: "✅" | "❌" | "🛠️";
}

export const progressData: ProgressProps[] = [
  { name: "Chat", status: "✅" },
  { name: "Chat icons", status: "🛠️" },
  { name: "News", status: "✅" },
  { name: "Shop", status: "🛠️" },
  { name: "Premium Account", status: "🛠️" },
  { name: "Promocodes", status: "🛠️" },
  { name: "Gifts", status: "❌" },
  { name: "Spectator Mode", status: "✅" },
  { name: "Special Missions", status: "🛠️" },
  { name: "Daily Missions", status: "✅" },
  { name: "Weekly Missions", status: "❌" },
  { name: "Challenges", status: "🛠️" },
  { name: "Clans Missions", status: "❌" },
  { name: "Firebird", status: "✅" },
  { name: "Freeze", status: "✅" },
  { name: "Isida", status: "✅" },
  { name: "Hammer", status: "🛠️" },
  { name: "Twins", status: "✅" },
  { name: "Ricochet", status: "✅" },
  { name: "Smoky", status: "✅" },
  { name: "Striker", status: "❌" },
  { name: "Vulcan", status: "🛠️" },
  { name: "Thunder", status: "✅" },
  { name: "Railgun", status: "✅" },
  { name: "Magnum", status: "❌" },
  { name: "Shaft", status: "✅" },
  { name: "Wasp", status: "✅" },
  { name: "Hornet", status: "✅" },
  { name: "Hunter", status: "✅" },
  { name: "Dictator", status: "✅" },
  { name: "Titan", status: "✅" },
  { name: "Mammoth", status: "✅" },
  { name: "Paints", status: "✅" },
  { name: "Animated Paints", status: "✅" },
  { name: "Repair Kit", status: "✅" },
  { name: "Double Armor", status: "✅" },
  { name: "Double Damage", status: "✅" },
  { name: "Nitro", status: "✅" },
  { name: "Mine", status: "✅" },
  { name: "Gold Box", status: "✅" },
  { name: "Containers", status: "🛠️" },
  { name: "Weekly Containers", status: "🛠️" },
  { name: "Skin Containers", status: "❌" },
  { name: "Rename Pass", status: "❌" },
  { name: "PRO Battle Pass", status: "❌" },
  { name: "Score Pass", status: "❌" },
  { name: "Begginner Pass", status: "❌" },
  { name: "Product Kits", status: "❌" },
  { name: "Clans", status: "❌" },
];
