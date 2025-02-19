import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import "./PageStyle.css";

const PageTemplate = ({ title, content, image }) => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [user, setUser] = useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const handleBackClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 400); // ✅ Matches fade-out timing
  };

  return (
    <div className={`page-container ${fadeOut ? "fade-out" : ""}`}>
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      {image && <img src={image} alt={title} className="page-image" />}
      <h1 className="page-title">{title}</h1>
      <p className="page-content">{content}</p>

      {/* ✅ Restored Connect Wallet Button */}
      <div className="wallet-box">
        {user.loggedIn ? (
          <p className="wallet-address">Connected: {user.addr}</p>
        ) : (
          <button className="connect-wallet-button" onClick={() => fcl.authenticate()}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
