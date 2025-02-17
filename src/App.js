import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import "./fcl-config";
import "./App.css";
import BurnFroth from "./BurnFroth";
import Leaderboard from "./Leaderboard";
import Milestones from "./Milestones";
import Disclaimer from "./Disclaimer";

function App() {
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const logIn = () => fcl.authenticate();
  const logOut = () => fcl.unauthenticate();

  return (
    <Router>
      {/* Routes for Additional Pages */}
      <Routes>
        <Route path="/burn-froth" element={<BurnFroth />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route
          path="/"
          element={
            <div className="container">
              {/* Hero Section */}
              <div className="hero">
                <img src="/logo512.png" alt="Burning Froth Logo" className="logo" />
                <h1 className="hero-title">Burning Froth</h1>
                <p className="hero-text">Where milestones are forged in fire!</p>
              </div>

              {/* Login Section */}
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

              {/* Features Section */}
              <div className="features">
                <div className="feature-box">
                  <Link to="/burn-froth">
                    <img src="/assets/BeFunky-design Burn Froth Icon.png" alt="Burn Froth" className="feature-icon" />
                    <h2 className="feature-title">Scorched Earth Protocol</h2>
                    <h3 className="feature-subtitle">Reduce the supply of Froth and earn ranking points</h3>
                    <p className="feature-description">A full-scale burning campaign—no Froth left behind</p>
                  </Link>
                </div>
                <div className="feature-box">
                  <Link to="/leaderboard">
                    <img src="/assets/BeFunky-design Compete on Leaderboards Icon.png" alt="Compete on Leaderboards" className="feature-icon" />
                    <h2 className="feature-title">War Room The Leaderboard Campaign</h2>
                    <h3 className="feature-subtitle">Show off your burning achievements</h3>
                    <p className="feature-description">The battlefield where only the most ruthless burners rise to the top</p>
                  </Link>
                </div>
                <div className="feature-box">
                  <Link to="/milestones">
                    <img src="/assets/BeFunky-design Unlock Milestones Icon.png" alt="Unlock Milestones" className="feature-icon" />
                    <h2 className="feature-title">Medal of Honor Burn Milestones</h2>
                    <h3 className="feature-subtitle">Earn rewards and recognition for your contributions</h3>
                    <p className="feature-description">Every burn is a mission completed—earn your stripes, soldier!</p>
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="disclaimer">
                <Link to="/disclaimer">
                  <p>Disclaimer: Burning Froth tokens is irreversible. Ensure you understand the implications before proceeding.</p>
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
