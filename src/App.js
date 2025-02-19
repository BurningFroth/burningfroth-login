import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import "./fcl-config";
import "./App.css";
import BurnFroth from "./BurnFroth";
import Leaderboard from "./Leaderboard";
import Milestones from "./Milestones";
import Disclaimer from "./Disclaimer";
import HomePage from "./HomePage"; // ✅ Import the new HomePage component

function App() {
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  return (
    <Router>
      <Routes>
        {/* ✅ Use HomePage.js for the main page */}
        <Route path="/" element={<HomePage user={user} logIn={fcl.authenticate} logOut={fcl.unauthenticate} />} />

        {/* ✅ Other pages */}
        <Route path="/burn-froth" element={<BurnFroth />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}

export default App;
