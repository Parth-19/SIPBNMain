import React from "react";
import { motion } from "framer-motion";
import { Title } from "@/components/common/Title";

const Index = () => {
  return (
    <div
      style={{
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start", // Align content to the left to give more room for text
        alignItems: "flex-start",
        background: "linear-gradient(135deg, #000000, #2575fc)",
        color: "#fff",
        padding: "3rem",
        position: "relative", // to position the images
        flexDirection: "row", // Arrange items horizontally in a row
        gap: "3rem", // Space between text and images
        flexWrap: "wrap", // Allow the layout to wrap on smaller screens
      }}
    >
      {/* Content Section (Text) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          maxWidth: "70%", // Text section takes up 70% of the width
          textAlign: "left", // Left align the text
          flex: "1", // Allow the content to take up available space
          marginBottom: "2rem", // Space below text section
        }}
      >
        <Title title="Trade & Investment Mission to India" />
        <p style={{ marginTop: "15px", fontSize: "1.2rem", lineHeight: "1.6" }}>
          Get ready for an incredible opportunity to take your business to new heights! 
          We’re thrilled to invite you to our Trade & Investment Mission to India, 
          happening from Monday, 7 April 2025, to Sunday, 13 April 2025.
        </p>

        <h2 style={{ marginTop: "2rem", fontSize: "1.6rem", fontWeight: "bold" }}>
          India: A Market of Boundless Opportunities
        </h2>
        <p style={{ marginTop: "10px", fontSize: "1.1rem", lineHeight: "1.6" }}>
          With one of the fastest-growing economies in the world, India is the perfect 
          destination to explore, connect, and expand your business. Over the past three years, 
          more than 150 delegates and business leaders from India have joined our #CapTech Summit 
          in Sydney, building game-changing partnerships and unlocking new markets for Australian businesses.
        </p>

        <h3 style={{ marginTop: "2rem", fontSize: "1.4rem", fontWeight: "bold" }}>
          🚀 Seats are limited, so don’t miss your chance to:
        </h3>
        <ul style={{ textAlign: "left", marginTop: "10px", fontSize: "1.1rem", lineHeight: "1.6" }}>
          <li>✅ Forge Strategic Connections with CEOs, Chairmans and Decision Makers of India’s leading business</li>
          <li>✅ Establish Powerful Business Partnerships</li>
          <li>✅ Create Tailored Opportunities Aligned with Your Business Needs</li>
        </ul>

        <h3 style={{ marginTop: "2rem", fontSize: "1.4rem", fontWeight: "bold" }}>
          🌍 Why India? Why Now?
        </h3>
        <p style={{ marginTop: "5px", fontSize: "1.1rem" }}>Focused Sectors:</p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            border: "2px solid white",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "8px", border: "1px solid white" }}>Category</th>
              <th style={{ textAlign: "left", padding: "8px", border: "1px solid white" }}>Subcategory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", border: "1px solid white" }}>1) Food & Beverages</td>
              <td style={{ padding: "8px", border: "1px solid white" }}>
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li>Beer 🍺</li>
                  <li>Wine 🍷</li>
                  <li>Wool 🐑</li>
                  <li>Cotton 🌾</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: "1px solid white" }}>2) Healthcare</td>
              <td style={{ padding: "8px", border: "1px solid white" }}>
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li>Hospitals 🏥</li>
                  <li>Diagnostics 🩺</li>
                  <li>
                    Devices and technology to support patient centricity 💻
                    <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                      <li>Point of care solutions</li>
                      <li>Telehealth opportunities</li>
                    </ul>
                  </li>
                  <li>Smart/sustainable healthcare 💡</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "5px", fontSize: "1.1rem" }}>
          There will be opportunities to meet with business leaders from leading organisations such as 
          Reliance Retail, ICICI Bank, ITC, Nature’s Basket, Apollo Hospitals, Tata Digital Health, 
          GE Healthcare, Sunpharma, and many more.
        </p>

        <h3 style={{ marginTop: "2rem", fontSize: "1.4rem", fontWeight: "bold" }}>
          Mission Highlights:
        </h3>
        <p style={{ textAlign: "left", marginTop: "10px", fontSize: "1.1rem", lineHeight: "1.6" }}>
          <strong>Mumbai:</strong> Explore India’s business ecosystem, connect with industry leaders, 
          and dive into curated B2B matchmaking events.<br />
          <strong>Chennai:</strong> Collaborate with top officials, attend high-impact networking sessions, 
          and discover strategic investment opportunities.<br />
          <strong>Hyderabad:</strong> Engage with key decision-makers and explore emerging opportunities 
          for collaboration.<br />
          <strong>Bonus:</strong> Guided tours to stunning cultural and historical landmarks for a mix of 
          business and pleasure!
        </p>

        <h3 style={{ marginTop: "2rem", fontSize: "1.4rem", fontWeight: "bold" }}>
          What You’ll Gain?
        </h3>
        <ul style={{ textAlign: "left", marginTop: "10px", fontSize: "1.1rem", lineHeight: "1.6" }}>
          <li>Build Your Network: Meet industry leaders, key officials, and decision-makers.</li>
          <li>Market Insights: Dive deep into India’s surging demand for Australian Beer, Wine, Wool, and Cotton.</li>
          <li>Tailored Opportunities: Create customized strategies to grow your business in this thriving market.</li>
          <li>Strategic Collaborations: Open doors to new partnerships and ventures.</li>
        </ul>

        <h3 style={{ marginTop: "2rem", fontSize: "1.4rem", fontWeight: "bold" }}>
          ⏳ Seats Are Limited—Act Now!
        </h3>
        <p style={{ marginTop: "5px", fontSize: "1.1rem" }}>
          Submit your Expression of Interest by 28 February 2025 to secure your spot.
        </p>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#2575fc",
              color: "#fff",
              fontSize: "1.2rem",
              padding: "12px 30px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => window.location.href = "https://forms.gle/MyHFHZjuUdsbxkbw6"}
          >
            Submit Your Expression of Interest
          </button>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "1.1rem" }}>
  📧 Contact us at:{" "}
  <a href="mailto:info@sipbn.com.au" style={{ color: "#fff", textDecoration: "underline" }}>
    info@sipbn.com.au
  </a>
  <br />
  📞 Call us at:{" "}
  <a href="tel:+61296594339" style={{ color: "#fff", textDecoration: "underline" }}>
    +61 2 9659 4339
  </a>
</p>

      </motion.div>

      {/* Image Gallery Section */}
      <div style={{
        display: "flex",
        justifyContent: "flex-start", // Align images to the right
        gap: "2rem", // Space between the columns
        width: "30%", // Image section takes up 30% of the width
        flexWrap: "wrap", // Allow images to wrap into two rows
      }}>
        {/* Beer Image Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <img
            src="images/Beer.avif"
            alt="Beer Image"
            style={{
              width: "200px", // Set image width to 200px
              borderRadius: "8px",
            }}
          />
          <img
            src="images/Healthcare.avif"
            alt="Healthcare Image"
            style={{
              width: "200px", // Set image width to 200px
              borderRadius: "8px",
            }}
          />
        </div>

        {/* BOM Image Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <img
            src="images/BOM.jpg"
            alt="Mumbai Image"
            style={{
              width: "200px", // Set image width to 200px
              borderRadius: "8px",
            }}
          />
          <img
            src="images/CHN.avif"
            alt="Chennai Image"
            style={{
              width: "200px", // Set image width to 200px
              borderRadius: "8px",
            }}
          />
          <img
            src="images/HYD.jpg"
            alt="Hyderabad Image"
            style={{
              width: "200px", // Set image width to 200px
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
