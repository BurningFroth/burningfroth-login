import * as fcl from "@onflow/fcl";
import { init } from "@onflow/fcl-wc";

const fclConfigInfo = {
  testnet: {
    accessNode: "https://rest-testnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/testnet/authn",
    discoveryAuthnEndpoint: "https://fcl-discovery.onflow.org/api/testnet/authn",
  },
};

const network = "testnet";

// ✅ Declare this variable OUTSIDE of init() to avoid syntax errors
const WALLET_CONNECT_PROJECT_ID = "c530854490dd68d9e4888f64afa9d8d2"; 

fcl.config({
  "app.detail.title": "BurningFroth",
  "app.detail.icon": "/logo192.png", // Ensure logo is inside 'public/' folder
  "flow.network": network,
  "accessNode.api": fclConfigInfo[network].accessNode,
  "discovery.wallet": fclConfigInfo[network].discoveryWallet,
  "discovery.authn.endpoint": fclConfigInfo[network].discoveryAuthnEndpoint,
});

init({
  projectId: WALLET_CONNECT_PROJECT_ID, 
  metadata: {
    name: "BurningFroth",
    description: "Burn Froth tokens and achieve milestones",
    url: "https://burningfroth.com",
    icons: ["http://localhost:3000/logo512.png"], // ✅ Use the full URL
  },
  includeBaseWC: true,
}).then(({ FclWcServicePlugin }) => {
  fcl.pluginRegistry.add(FclWcServicePlugin);
});
