import React from "react";
import * as fcl from "@onflow/fcl";
import "./fcl-config";
import "./App.css"; // Ensure CSS is linked

function App() {
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const logIn = () => fcl.authenticate();
  const logOut = () => fcl.unauthenticate();

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <img src="/logo512.png" alt="BurningFroth Logo" />
        <h1>Welcome to BurningFroth</h1>
        <p>Burn Froth tokens, climb leaderboards, and unlock milestones!</p>
      </div>

      {/* ✅ Tighter Login Box */}
      <div className="login-box">
        {user.loggedIn ? (
          <div>
            <p>Connected Wallet: {user.addr}</p>
            <button onClick={logOut} className="logout-button">
              Log Out
            </button>
          </div>
        ) : (
          <button onClick={logIn}>Connect Wallet</button>
        )}
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-box">
          <img src="/assets/BeFunky-design Burn Froth Icon.png" alt="Burn Froth" />
          <h2>Burn Froth</h2>
          <p>Reduce the supply of Froth and earn ranking points.</p>
        </div>
        <div className="feature-box">
          <img src="/assets/BeFunky-design Compete on Leaderboards Icon.png" alt="Compete on Leaderboards" />
          <h2>Compete on Leaderboards</h2>
          <p>Show off your burning achievements.</p>
        </div>
        <div className="feature-box">
          <img src="/assets/BeFunky-design Unlock Milestones Icon.png" alt="Unlock Milestones" />
          <h2>Unlock Milestones</h2>
          <p>Earn rewards and recognition for your contributions.</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer">
        <p>Disclaimer: Burning Froth tokens is irreversible. Ensure you understand the implications before proceeding.</p>
      </div>
    </div>
  );
}

export default App;
