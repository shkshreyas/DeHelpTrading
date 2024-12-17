const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "grey",
        backgroundColor: "#191919",
        paddingTop: "30px",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        fontSize: "small",
        paddingBottom: "15px",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "underline",
            fontSize: "medium",
          }}
        >
          Advertise on DhelpScreener | Claim Your Token Profile
        </a>
      </p>
      <div>
        Copyright 2024 Dhelp Dog LLC All Rights Reserved. Built by
        Dhelp.Tech. Design by @Blaakke and @RAF{" "}
      </div>
      <div>
        DISCLAIMER: DhelpSCREENER IS NOT AFFILIATED WITH DhelpSWAP OR Dhelp
        LABS. IT IS AN INDEPENDENT PROJECT.
      </div>{" "}
      <div>
        {" "}
        ALL DATA IS SOURCED DIRECTLY FROM THE Dhelp BLOCKCHAIN. TRADING
        CRYPTOCURRENCY INVOLVES THE RISK OF LOSS. USE THIS TOOL AT YOUR OWN
        RISK. DATA PRESENTED ON THIS WEBSITE IS FOR INFORMATIONAL PURPOSES ONLY.
      </div>
      {/* Add more lines as needed */}
    </div>
  );
};

export default Footer;
