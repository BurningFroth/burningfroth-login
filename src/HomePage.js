import React from "react";
import * as fcl from "@onflow/fcl";
import { useNavigate } from "react-router-dom";
import "./App.css";

const HomePage = ({ user, logIn, logOut }) => {
  const navigate = useNavigate();

  return (
    <div className="container home-container">
      {/* ✅ Hero Section */}
      <div className="hero">
        <img src="/logo512.png" alt="Burning Froth Logo" className="logo" />
        <h1 className="hero-title">Burning Froth</h1>
        <p className="hero-text">Where milestones are forged in fire!</p>
      </div>

      {/* ✅ Login Section */}
      <div className="login-box">
        {user.loggedIn ? (
          <div>
            <p>Connected Wallet: {user.addr}</p>
            <button onClick={logOut} className="logout-button">Log Out</button>
          </div>
        ) : (
          <button onClick={logIn} className="connect-wallet-button">Connect Wallet</button>
        )}
      </div>

      {/* ✅ Features Section */}
      <div className="features">
        <div className="feature-box" onClick={() => navigate('/burn-froth')}>
          <img src="/assets/BeFunky-design Burn Froth Icon.png" alt="Burn Froth" className="feature-icon" />
          <h2 className="feature-title">Scorched Earth Protocol</h2>
          <h3 className="feature-subtitle">Reduce the supply of Froth and earn ranking points</h3>
          <p className="feature-description">A full-scale burning campaign—no Froth left behind</p>
        </div>
        <div className="feature-box" onClick={() => navigate('/leaderboard')}>
          <img src="/assets/BeFunky-design Compete on Leaderboards Icon.png" alt="Compete on Leaderboards" className="feature-icon" />
          <h2 className="feature-title">War Room The Leaderboard Campaign</h2>
          <h3 className="feature-subtitle">Show off your burning achievements</h3>
          <p className="feature-description">The battlefield where only the most ruthless burners rise to the top</p>
        </div>
        <div className="feature-box" onClick={() => navigate('/milestones')}>
          <img src="/assets/BeFunky-design Unlock Milestones Icon.png" alt="Unlock Milestones" className="feature-icon" />
          <h2 className="feature-title">Medal of Honor Burn Milestones</h2>
          <h3 className="feature-subtitle">Earn rewards and recognition for your contributions</h3>
          <p className="feature-description">Every burn is a mission completed—earn your stripes, soldier!</p>
        </div>
      </div>

      {/* ✅ Disclaimer Section */}
      <div className="disclaimer-container">
        <p className="disclaimer">
          <a href="/disclaimer">Disclaimer: Burning Froth tokens is irreversible. Ensure you understand the implications before proceeding.</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
