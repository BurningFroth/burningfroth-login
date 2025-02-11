import React from "react";
import * as fcl from "@onflow/fcl";
import "./fcl-config";

function App() {
  const [user, setUser] = React.useState({ loggedIn: false, addr: "" });

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const logIn = () => fcl.authenticate();
  const logOut = () => fcl.unauthenticate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6"
         style={{ backgroundImage: "url('/assets/BeFunky-design Background Image (Hero Section).jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Hero Section */}
      <div className="text-center mb-8">
        <img src="/logo512.png" alt="BurningFroth Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold text-yellow-400">Welcome to BurningFroth</h1>
        <p className="mt-2 text-lg text-gray-300 max-w-xl mx-auto">
          A platform dedicated to burning Froth tokens and achieving milestones. Compete on leaderboards and climb to the top!
        </p>
      </div>

      {/* Login Section */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center w-full max-w-md">
        {user.loggedIn ? (
          <div>
            <p className="text-lg text-white mb-4">Connected Wallet: {user.addr}</p>
            <button onClick={logOut} className="bg-red-500 hover:bg-red-600 px-6 py-3 text-lg rounded-lg shadow-lg transition duration-300 transform hover:scale-105">Log Out</button>
          </div>
        ) : (
          <button onClick={logIn} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg rounded-lg shadow-lg transition duration-300 transform hover:scale-105">Log In</button>
        )}
      </div>

      {/* Features Section */}
      <div className="mt-10 grid gap-6 text-center max-w-2xl">
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center">
          <img src="/assets/BeFunky-design Burn Froth Icon.png" alt="Burn Froth Icon" className="w-16 h-16 mb-2" />
          <h2 className="text-3xl font-bold text-yellow-400">🔥 Burn Froth</h2>
          <p className="text-gray-200 text-lg">Reduce the supply of Froth and earn ranking points.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center">
          <img src="/assets/BeFunky-design Compete on Leaderboards Icon.png" alt="Compete on Leaderboards Icon" className="w-16 h-16 mb-2" />
          <h2 className="text-3xl font-bold text-yellow-400">🏆 Compete on Leaderboards</h2>
          <p className="text-gray-200 text-lg">Show off your burning achievements to the community.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center">
          <img src="/assets/BeFunky-design Unlock Milestones Icon.png" alt="Unlock Milestones Icon" className="w-16 h-16 mb-2" />
          <h2 className="text-3xl font-bold text-yellow-400">🎖️ Unlock Milestones</h2>
          <p className="text-gray-200 text-lg">Earn rewards and recognition for your contributions.</p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-10 text-sm text-gray-400 max-w-lg text-center border-t border-gray-600 pt-4">
        <p>
          Disclaimer: Burning Froth tokens is irreversible. Ensure you understand the implications before proceeding.
        </p>
      </div>
    </div>
  );
}

export default App;
