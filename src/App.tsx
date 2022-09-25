import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import GomokuGame from "./pages/PersonalExercises/GomokuGame/GomokuGame";


function App() {
  return (

    <div>
      {/* <h1>Hello</h1> */}
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/web-nang-cao-19-3" element={<Home />}/>
        <Route path="/web-nang-cao-19-3/gomoku-game" element={<GomokuGame />}/>
      </Routes>
    </div>
  );
}

export default App;
