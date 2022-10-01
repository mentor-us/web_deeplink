import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BTCN_1 from "./pages/PersonalExercises/BTCN1/GomokuGame";
import BTCN_2 from "./pages/PersonalExercises/BTCN2/GomokuGame";

function App() {
  return (

    <div>
      {/* <h1>Hello</h1> */}
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/web-nang-cao-19-3" element={<Home />}/>
        <Route path="/web-nang-cao-19-3/btcn1" element={<BTCN_1 />}/>
        <Route path="/web-nang-cao-19-3/btcn2" element={<BTCN_2 />}/>
      </Routes>
    </div>
  );
}

export default App;
