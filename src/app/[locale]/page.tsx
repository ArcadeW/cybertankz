import GlitchSection from "@/components/modules/home/glitch-section";
import { pricingPlans } from "@/components/modules/home/pricing/data";
import { PricingColumn } from "@/components/modules/home/pricing/pricing-column";
import Progress from "@/components/modules/home/progress";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="relative flex flex-col w-full h-screen">
      <GlitchSection text="CyberTankz" description={t("description")} />

      <div id="mainContainer">
        <div className="margin-body">
          <div>
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <div className="title-h1 text-center">
                    <span>
                      <span className="light">{t("reservation")}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {pricingPlans.map((plan, index) => (
              <PricingColumn key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <Progress />
      </div>
    </main>
  );
}
