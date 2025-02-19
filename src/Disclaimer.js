import React from "react";
import PageTemplate from "./PageTemplate"; // ✅ Ensure import is correct

const Disclaimer = () => {
  return (
    <PageTemplate
      title="Burn Responsibly. No Respawns."
      content="Burning is irreversible – Once Froth is gone, it’s gone. No financial guarantees – Burning reduces supply, but results are unpredictable. Your responsibility – Make sure you understand the mission before you launch."
      image="/assets/disclaimer.png" // ✅ Correct path for the new image
    />
  );
};

export default Disclaimer;
