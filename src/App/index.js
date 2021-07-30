import { GameBoard, ScoreBoard } from "./components";
import Store from "./state/store";

import { useTurnState } from "./hooks";

function App() {
 return (
  <div className="App">
   <Store>
    <Header />
    <GameBoard />
    <ScoreBoard />
   </Store>
  </div>
 );
}

function Header() {
 const { turnState } = useTurnState();
 return (<div>
   <h1>{`${turnState}'s turn`}</h1>
 </div>
 );
}

export default App;
