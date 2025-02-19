import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as fcl from "@onflow/fcl";
import "./fcl-config";
import "./App.css";
import BurnFroth from "./BurnFroth";
import Leaderboard from "./Leaderboard";
import Milestones from "./Milestones";
import Disclaimer from "./Disclaimer";
import HomePage from "./HomePage";

function AnimatedRoutes() {
  const location = useLocation();
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage user={user} logIn={fcl.authenticate} logOut={fcl.unauthenticate} />} />
        <Route path="/burn-froth" element={<BurnFroth />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
