import Button from "@/components/modules/home/button";
import GlitchSection from "@/components/modules/home/glitch-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Image
        src="/wallpaper-new.png"
        alt="hero_wallpaper"
        width={1920}
        height={1080}
        className="absolute h-screen opacity-10 -z-10"
      />
      <GlitchSection
        text="CyberTankz"
        description=" It's time to embark on a journey across the battlefield where the
        past meets the present. The game will take you from 2020 to 2024 and
        offer you an unforgettable experience. With over 31 ranks to achieve,
        each map offers familiar yet new battles and challenges. Plenty of
        special quests and unique rewards await you to make you stand out on the
        battlefield. The future of CyberTankz will be developed based on your
        feedback, but rest assured that both new and old fan-favourite features
        are in store. Join us as we embark on a rewritten past with CyberTankz!"
      />

<div id="mainContainer">
  <!-- Dust particle -->
  <div class="margin-body">
    <div>
      <div class="starsec"></div>
      <div class="starthird"></div>
      <div class="starfourth"></div>
      <div class="starfifth"></div>
    </div>
    <!-- Dust particle end -->

    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="wpb_text_column wpb_content_element">
          <div class="wpb_wrapper">
            <div class="title-h1 text-center"><span><span class="light">Pricing </span> Table</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4 col-md-4 pricing-column-wrapper">
        <div class="pricing-column">
          <div class="pricing-price-row">
            <div class="pricing-price">
              <div class="pricing-cost">Free</div>
              <div class="time">Price</div>
            </div>
          </div>
          <div class="pricing-row-title">Free Nickname</div>
          <figure class="pricing-row">Guaranteed in-game name.</figure>
          <figure class="pricing-row">3-20 letters/numbers.</figure>
          <figure class="pricing-row">Access to game after the game's release.</figure>
          <div class="pricing-footer">
            <div class="gem-button-container gem-button-position-center"><a href="#" class="gem-button gem-green">Order Now</a></div>
          </div>
        </div>
      </div>

      <div class="col-sm-4 col-md-4 pricing-column-wrapper">
        <div class="pricing-column">
          <div class="pricing-price-row">
            <div class="pricing-price">
              <div class="pricing-cost">$15</div>
              <div class="time">Price</div>
            </div>
          </div>
          <div class="pricing-row-title">Premium Nickname</div>
          <figure class="pricing-row">Unique two-letter/number name.</figure>
          <figure class="pricing-row">Guaranteed in-game name with 2 letters.</figure>
          <figure class="pricing-row">Early access to the game (July 2024).</figure>
          <figure class="pricing-row">Special Paint "Premium Nick."</figure>
          <div class="pricing-footer">
            <div class="gem-button-container gem-button-position-center"><a href="#" class="gem-button gem-orange">Order Now</a></div>
          </div>
        </div>
      </div>

      <div class="col-sm-4 col-md-4 pricing-column-wrapper">
        <div class="pricing-column">
          <div class="pricing-price-row">
            <div class="pricing-price">
              <div class="pricing-cost">$30</div>
              <div class="time">Price</div>
            </div>
          </div>
          <div class="pricing-row-title">Elite Nickname</div>
          <figure class="pricing-row">Unique one-letter/number name.</figure>
          <figure class="pricing-row">Guaranteed in-game name with 1 letter.</figure>
          <figure class="pricing-row">Early access to the game (July 2024).</figure>
          <figure class="pricing-row">Special Paint "Elite Nickname."</figure>
          <div class="pricing-footer">
            <div class="gem-button-container gem-button-position-center"><a href="#" class="gem-button gem-yellow">Order Now</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
    </main>
  );
}
