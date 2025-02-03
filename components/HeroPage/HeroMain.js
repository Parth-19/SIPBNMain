import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

function HeroMain() {
  const eventId = "iaEHed2PE5Te0BmBwku3"; //pelase add eventid here
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div
      className="heroContainer"
      style={{
        background: "linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3))",
        padding: "5% 0",
      }}
    >
      <video className="bgVideo" autoPlay muted loop playsInline>
        <source src="/videos/CapTech2025.mp4" type="video/mp4" />
      </video>
      <div className="heroContent">
        <div className="box" data-aos="fade-right">
          <h2>
            #CapTech2025 <br />
            13th November 2025
          </h2>
          <Link href={`https://sipbn-com-au-events.zohobackstage.in/CapTech2025#/tickets?lang=en`}>
            <button className="secondary-button">Buy Tickets</button>
          </Link>
          <div style={{ display: "flex" }}>
            <button
              className="button-primary"
              onClick={() =>
                window.open("/#CapTech2025 Partnership Proposal.pdf", "_blank")
              }
            >
              Download Brochure
            </button>
          </div>
        </div>
        <div className="box" data-aos="fade-left">
          <div className="mediaHolder">
            <div className="brandImageHolder">
              <img src="/images/sipbnLogo.png" className="brandImage" alt="" />
              <div className="brandTextHolder">
                <h2>#CapTech2025</h2>
                <p>November 2025</p>
                <hr />
                <i>Hyatt Regency, Sydney</i>
              </div>
            </div>
            <video style={{ width: "60%", borderRadius: "10px" }} controls>
              <source src="/videos/CapTech2025.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
