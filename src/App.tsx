import { Route, Routes } from "react-router-dom";

import { QueryClient } from "react-query";
import TestDeepLink from "./pages/PersonalExercises/TestDeeplink";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<TestDeepLink path={window.location.href} />}
        />

        <Route
          path="/chat"
          element={<TestDeepLink path={window.location.href} />}
        />

        <Route
          path="/meeting"
          element={<TestDeepLink path={window.location.href} />}
        />

        <Route
          path="/task"
          element={<TestDeepLink path={window.location.href} />}
        />
      </Routes>
    </div>
  );
}

export default App;
// "homepage": "https://tramhuuducvn.github.io/web-nang-cao-19-3/",

// https://web-nang-cao-19-3-ymeb.vercel.app/web-nang-cao-19-3/chat
