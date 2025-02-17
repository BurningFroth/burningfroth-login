import React from "react";
import { Link } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import "./PageStyle.css";

function PageTemplate({ title, content, image }) {
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const logIn = () => fcl.authenticate();
  const logOut = () => fcl.unauthenticate();

  return (
    <div className="page-container">
      <Link to="/" className="back-button">← Back</Link>
      {image && <img src={image} alt={title} className="page-image" />}
      <h1 className="page-title">{title}</h1>
      <p className="page-content">{content}</p>

      {/* Wallet Connect Section */}
      <div className="wallet-section">
        {user.loggedIn ? (
          <div>
            <p>Connected Wallet: {user.addr}</p>
            <button onClick={logOut} className="logout-button">Log Out</button>
          </div>
        ) : (
          <button onClick={logIn} className="connect-wallet-button">Connect Wallet</button>
        )}
      </div>
    </div>
  );
}

export default PageTemplate;
