import { GameScreen, WelcomeScreen, LobbyScreen, Chat, Modal, Notification } from "./components";
import Store from "./state/store";

function App() {
  return (
    <div className="App">
      <Store>
        <WelcomeScreen />
        <LobbyScreen />
        <GameScreen />
        <Modal />
        {/* <Notification /> */}
      </Store>
    </div>
  );
}

export default App;
