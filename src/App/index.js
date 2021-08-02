import { GameScreen, WelcomeScreen, LobbyScreen } from "./components";
import Store from "./state/store";

import { useGameState } from "./hooks";

function App() {
  return (
    <div className="App">
      <Store>
        <WelcomeScreen />
        <LobbyScreen />
        <Header />
        <GameScreen />
      </Store>
    </div>
  );
}

function Header() {
  const { turnState } = useGameState();
  return (
    <div>
      {/* <h1>{`${turnState}'s turn`}</h1> */}
    </div>
  );
}

export default App;
