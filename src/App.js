// src/App.js
import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import "./fcl-config"; // Import FCL config

function App() {
  const [user, setUser] = useState({ loggedIn: false, addr: "" });

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const logIn = () => fcl.authenticate();
  const logOut = () => fcl.unauthenticate();

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Flow Wallet Login</h1>

      {user.loggedIn ? (
        <div>
          <p>Connected: {user.addr}</p>
          <button onClick={logOut} style={buttonStyle}>Log Out</button>
        </div>
      ) : (
        <button onClick={logIn} style={buttonStyle}>Log In</button>
      )}
    </div>
  );
}

// Simple button styling
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "10px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  background: "#007bff",
  color: "#fff",
};

export default App;
