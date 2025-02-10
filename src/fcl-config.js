// src/fcl-config.js
import * as fcl from "@onflow/fcl";
import { init } from "@onflow/fcl-wc";

// Flow Testnet Configuration
const fclConfigInfo = {
  testnet: {
    accessNode: "https://rest-testnet.onflow.org",
    discoveryWallet: "https://fcl-discovery.onflow.org/testnet/authn",
    discoveryAuthnEndpoint: "https://fcl-discovery.onflow.org/api/testnet/authn",
  },
};

const network = "testnet";

fcl.config({
  "app.detail.title": "Flow Login DApp",
  "app.detail.icon": "https://example.com/icon.png",
  "flow.network": network,
  "accessNode.api": fclConfigInfo[network].accessNode,
  "discovery.wallet": fclConfigInfo[network].discoveryWallet,
  "discovery.authn.endpoint": fclConfigInfo[network].discoveryAuthnEndpoint,
});

const WALLET_CONNECT_PROJECT_ID = "c530854490dd68d9e4888f64afa9d8d2"; // Replace with your WalletConnect Project ID

init({
  projectId: WALLET_CONNECT_PROJECT_ID,
  metadata: {
    name: "Flow Login DApp",
    description: "A simple Flow DApp using WalletConnect",
    url: "https://example.com",
    icons: ["https://example.com/icon.png"],
  },
  includeBaseWC: true,
}).then(({ FclWcServicePlugin }) => {
  fcl.pluginRegistry.add(FclWcServicePlugin);
});
