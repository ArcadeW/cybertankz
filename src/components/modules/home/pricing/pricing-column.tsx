import { cn } from "@/lib/utils";
import { PricingPlan } from "./data";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export function PricingColumn({
  price,
  type,
  title,
  color,
  features,
  link,
  buttonClass,
}: PricingPlan) {
  const t = useTranslations("PricingPlans");

  return (
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
      <div className="pricing-column">
        <div className="pricing-price-row">
          <div className="pricing-price-wrapper">
            <div className="pricing-price">
              <div className="pricing-cost">{price}</div>
            </div>
          </div>
        </div>
        <div className="pricing-row-title">
          <span style={{ color }}>{t(`${type}.title`)}</span>
        </div>
        {features.map((feature, index) => (
          <figure className="pricing-row" key={index}>
            <span className="flex items-center">
              <Check className="text-foreground w-4 mr-1" style={{ color }} />
              {t(`${type}.features.${index}`)}
            </span>
          </figure>
        ))}
        <div className="pricing-footer">
          <div className="gem-button-container gem-button-position-center">
            {link ? (
              <a href={link} className={cn("gem-button", buttonClass)}>
                {t(`${type}.reserve`)}
              </a>
            ) : (
              <span
                className={cn(
                  "gem-button !cursor-auto",
                  buttonClass
                )}
              >
                {t(`${type}.reserve`)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
