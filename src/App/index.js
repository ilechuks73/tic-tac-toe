import { GameScreen, WelcomeScreen, LobbyScreen, Chat } from "./components";
import Store from "./state/store";

function App() {
  return (
    <div className="App">
      <Store>
        <WelcomeScreen />
        <LobbyScreen />
        <GameScreen />
      </Store>
    </div>
  );
}

export default App;
