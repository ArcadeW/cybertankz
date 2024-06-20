export interface Feature {
  text: string;
  style?: React.CSSProperties;
}

export interface PricingPlan {
  price: string;
  type: string;
  title: string;
  color: string;
  features: Feature[];
  link: string;
  buttonClass: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    price: "Free",
    title: "Free Nickname",
    type: "free",
    color: "#00bcd4",
    features: [
      { text: "Free nickname and access to the forum." },
      { text: "Guaranteed in-game name with 3-20 letters." },
      { text: "Access to game after the game's release." },
      { text: 'Special Paint "Free Nick" in-game.' },
    ],
    link: "https://en.cybertankzforum.com/register",
    buttonClass: "gem-green",
  },
  {
    price: "$15",
    title: "Premium Nickname",
    type: "premium",
    color: "#a637ec",
    features: [
      { text: "Unique two-letter/number name." },
      { text: "Guaranteed in-game name with 2 letters." },
      {
        text: "Early access to the game (July 2024).",
        style: { color: "#5f727f" },
      },
      { text: 'Special Paint "Premium Nick."' },
    ],
    link: "https://buy.stripe.com/5kA9DF4NE6bYe3edQV",
    buttonClass: "gem-orange",
  },
  {
    price: "$30",
    title: "Elite Nickname",
    type: "elite",
    color: "#ee417c",
    features: [
      { text: "Unique one-letter/number name." },
      {
        text: "Guaranteed in-game name with 1 letter.",
        style: { color: "#5f727f" },
      },
      {
        text: "Early access to the game (July 2024).",
        style: { color: "#5f727f" },
      },
      { text: 'Special Paint "Elite Nickname."' },
    ],
    link: "https://buy.stripe.com/fZecPRcg61VI3oAcMS",
    buttonClass: "gem-yellow",
  },
];
