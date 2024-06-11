import Button from "@/components/modules/home/button";
import GlitchSection from "@/components/modules/home/glitch-section";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-screen">
      <GlitchSection
        text="CyberTankz"
        description=" It's time to embark on a journey across the battlefield where the
        past meets the present. The game will take you from 2017 to 2020 and
        offer you an unforgettable experience. With over 31 ranks to achieve,
        each map offers familiar yet new battles and challenges. Plenty of
        special quests and unique rewards await you to make you stand out on the
        battlefield. The future of CyberTankz will be developed based on your
        feedback, but rest assured that both new and old fan-favourite features
        are in store. Join us as we embark on a rewritten past with CyberTankz!"
      />

<div id="mainContainer">
  <div className="margin-body">
    <div>
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>

    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="wpb_text_column wpb_content_element">
          <div className="wpb_wrapper">
            <div className="title-h1 text-center">
              <span><span className="light">Reserve your</span> nick</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
        <div className="pricing-column">
          <div className="pricing-price-row">
            <div className="pricing-price-wrapper">
              <div className="pricing-price">
                <div className="pricing-cost">Free</div>
              </div>
            </div>
          </div>
          <div className="pricing-row-title"><span style={{ color: "#00bcd4" }}>Free Nickname</span></div>
          <figure className="pricing-row">Free nickname and access to the forum.</figure>
          <figure className="pricing-row"><span>Guaranteed in-game name with 3-20 letters.</span></figure>
          <figure className="pricing-row"><span>Access to game after the game's release.</span></figure>
          <figure className="pricing-row"><span>Special Paint "Free Nick" in-game.</span></figure>
          <div className="pricing-footer">
            <div className="gem-button-container gem-button-position-center">
              <a href="https://www.cybertankzforum.com/register/" className="gem-button gem-green">reserve now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
        <div className="pricing-column">
          <div className="pricing-price-row">
            <div className="pricing-price-wrapper">
              <div className="pricing-price">
                <div className="pricing-cost">$15</div>
              </div>
            </div>
          </div>
          <div className="pricing-row-title"><span style={{ color: "#a637ec" }}>Premium Nickname</span></div>
          <figure className="pricing-row">Unique two-letter/number name.</figure>
          <figure className="pricing-row"><span>Guaranteed in-game name with 2 letters.</span></figure>
          <figure className="pricing-row"><span style={{ color: "#5f727f" }}>Early access to the game (July 2024).</span></figure>
          <figure className="pricing-row">Special Paint "Premium Nick."</figure>
          <div className="pricing-footer">
            <div className="gem-button-container gem-button-position-center">
              <a href="https://buy.stripe.com/5kA9DF4NE6bYe3edQV" className="gem-button gem-orange">reserve now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-3 pricing-column-wrapper">
        <div className="pricing-column">
          <div className="pricing-price-row">
            <div className="pricing-price-wrapper">
              <div className="pricing-price">
                <div className="pricing-cost">$30</div>
              </div>
            </div>
          </div>
          <div className="pricing-row-title"><span style={{ color: "#ee417c" }}>Elite Nickname</span></div>
          <figure className="pricing-row">Unique one-letter/number name.</figure>
          <figure className="pricing-row"><span style={{ color: "#5f727f" }}>Guaranteed in-game name with 1 letter.</span></figure>
          <figure className="pricing-row"><span style={{ color: "#5f727f" }}>Early access to the game (July 2024).</span></figure>
          <figure className="pricing-row">Special Paint "Elite Nickname."</figure>
          <div className="pricing-footer">
            <div className="gem-button-container gem-button-position-center">
              <a href="https://buy.stripe.com/fZecPRcg61VI3oAcMS" className="gem-button gem-yellow">reserve now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </main>
  );
}
