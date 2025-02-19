import React from "react";
import { useNavigate } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import "./PageStyle.css";

const PageTemplate = ({ title, content, image }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  return (
    <div className="page-container">
      {/* ✅ BACK BUTTON IN TOP LEFT */}
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>

      {/* ✅ PAGE IMAGE */}
      {image && <img src={image} alt={title} className="page-image" />}

      {/* ✅ PAGE TITLE & CONTENT */}
      <h1 className="page-title">{title}</h1>
      <p className="page-content">{content}</p>

      {/* ✅ CONNECT WALLET BUTTON */}
      <div className="wallet-box">
        {user.loggedIn ? (
          <button onClick={() => fcl.unauthenticate()} className="logout-button">
            Log Out
          </button>
        ) : (
          <button onClick={() => fcl.authenticate()} className="connect-wallet-button">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
