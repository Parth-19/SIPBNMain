import React, { useState } from "react";
import { Title, TitleSm } from "../common/Title";
import Link from "next/link";

function TicketPage() {
  return (
    <>
      <div className="purposeContainer">
        <Title title="TICKET AVAILABILITY IS LIMITED " />
        <Title title="GET YOURS TODAY" />
        <hr style={{ width: "20%", border: 0, borderTop: "1px solid #ccc" }} />
         <h2>OFFER : Valid Until 31st March 2025!</h2>
        <h3>50% Discount valid until 31st March 2025</h3> 
      </div>

      <div className="ticketContent">
        {/* First Ticket (959) */}
        <div className="ticketCard">
          <h3>#CapTech2025 + Post Networking</h3>
          <div
            className="customHr"
            style={{ background: "linear-gradient(135deg, #dcdcdc, #f5f5f5)" }}
          ></div>
          <h3>
            Regular Price: <br />
          </h3>
          <h2>$1,199</h2>
          {/* <h4>Regular Price: $1,199</h4> */}
          <CardDropDown
            content={{
              l1: "#CapTech2025 Summit on Thursday 13 November 2025 at Hyatt Regency",
              l2: "#CapTech2025 Summit on Thursday 13 November 2025 post networking drinks",
            }}
            maxHeight="300px"
          />
          <Link href={`https://sipbn-com-au-events.zohobackstage.in/CapTech2025#/buyTickets?ticketClassId=34954000000015206`}>
            <button className="ticketButton">Buy Now</button>
          </Link>
        </div>

        {/* Second Ticket (1199) */}
        <div className="ticketCard">
          <h3>#CapTech2025 Summit + Welcome Drinks</h3>
          <div
            className="customHr"
            style={{ background: "linear-gradient(135deg, #f9d423, #ff4e50)" }}
          ></div>
          <h3>
            Regular Price: <br />
          </h3>
          <h2>$1,499</h2>
          {/* <h4>Regular Price: $1,499</h4> */}
          <CardDropDown
            content={{
              l1: "Welcome Drinks at NSW Parliament House",
              l2: "#CapTech2025 Summit on Thursday 13 November 2025 at Hyatt Regency",
              l3: "#CapTech2025 Summit on Thursday 13 November 2025 post networking drinks",
            }}
            maxHeight="400px"
          />
          <Link href={`https://sipbn-com-au-events.zohobackstage.in/CapTech2025#/buyTickets?ticketClassId=34954000000015214`}>
            <button className="ticketButton">Buy Now</button>
          </Link>
        </div>

        {/* Third Ticket (2250) */}
        <div className="ticketCard">
          <h3>#CapTech2025 SUMMIT PASS</h3>
          <div
            className="customHr"
            style={{ background: "linear-gradient(135deg, #b9fbc0, #00d2ff)" }}
          ></div>
          <h3>
            Regular Price: <br />
          </h3>
          <br />
          <h2>$2,250</h2>
          <CardDropDown
            content={{
              l1: "NSW Parliament Drinks",
              l2: "#CapTech2025 All Day Event + Post Event Drinks",
              l3: "VIP seating & check-in",
              l4: "Private Dinner",
              l5: "Two Days of Dedicated Business Matching Sessions",
        
            }}
            maxHeight="660px"
          />
          <Link href={`https://sipbn-com-au-events.zohobackstage.in/CapTech2025#/buyTickets?ticketClassId=34954000000015226`}>
            <button className="ticketButton">Buy Now</button>
          </Link>
        </div>

        {/* Fourth Ticket (9592) */}
        <div className="ticketCard">
          <h3>#CapTech2025 Corporate Table of 10</h3>
          <div
            className="customHr"
            style={{ background: "linear-gradient(135deg, #d50032, #c51162)" }}
          ></div>
          <h3>
            Regular Price: <br />
          </h3>
          <h2>$11,990</h2>
          {/* <h4>Regular Price: $11,990</h4> */}
          <CardDropDown
            content={{
              l1: "#CapTech2025 Summit on Thursday 13 November 2025 at Hyatt Regency, Sydney",
              l2: "#CapTech2025 Summit on Thursday 13 November 2025 post networking drinks",
            }}
            maxHeight="200px"
          />
          <Link href={`https://sipbn-com-au-events.zohobackstage.in/CapTech2025#/buyTickets?ticketClassId=34954000000015220`}>
            <button className="ticketButton">Buy Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export function CardDropDown({ content = {}, maxHeight = "0px" }) {
  const [checked, setChecked] = useState(false);

  const handleMouseEnter = () => {
    setChecked(true);
  };

  const handleMouseLeave = () => {
    setChecked(false);
  };

  const uniqueId = `accordian-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <ul className="accordian">
      <li>
        <input
          type="radio"
          name="accordian"
          id={uniqueId}
          checked={checked}
          readOnly
        />
        <label
          htmlFor={uniqueId}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Inclusions
        </label>
        <div
          className="accordianContent"
          style={{
            maxHeight: checked ? maxHeight : "0px",
            transition: "max-height 0.5s ease, padding 0.5s ease",
            overflow: "hidden",
          }}
        >
          <ul className="benefitList">
            {Object.values(content).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default TicketPage;
