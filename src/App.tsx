import "./App.css";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Fredag from "./pages/Fredag";
import Main from "./pages/Main";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <HashRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fredag" element={<Fredag />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
