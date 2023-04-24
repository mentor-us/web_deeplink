import { Route, Routes } from "react-router-dom";

import { QueryClient } from "react-query";
import TestDeepLink from "./pages/PersonalExercises/TestDeeplink";
import { useEffect } from "react";
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <p>Hello MentorUS-er</p>
      <Routes>
        <Route
          path="/"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3/chat"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3/btcn2"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3/btcn3"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3/btcn4"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3/btcn5"
          element={<TestDeepLink path={window.location.href} />}
        />
        <Route
          path="/web-nang-cao-19-3/test-deeplink"
          element={<TestDeepLink path={window.location.href} />}
        />
      </Routes>
    </div>
  );
}

export default App;
// "homepage": "https://tramhuuducvn.github.io/web-nang-cao-19-3/",
