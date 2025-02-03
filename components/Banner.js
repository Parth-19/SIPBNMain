import React from "react";
import { Title, TitleSm, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <h2 className="bannerTitle">Secure your #CapTech2025 ticket!</h2>{" "}
            <br />
            { <p> Buy tickets at 50% Discount with code SIPBN50. </p> }
            { <p> Offer valid until March 31st, 2025.</p> }
          </div>
          <div>
            <button
              className="button-primary"
              onClick={() => {
                window.location.href = `/https://sipbn-com-au-events.zohobackstage.in/CapTech2025#/tickets?lang=en`;
              }}
            >
              Book now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
