import "./App.css";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import Topbar from "./Components/Topbar";
import Main from "./pages/Main";
import Fredag from "./pages/Fredag";
import Loerdag from "./pages/Loerdag";
import TransportOgOvernatting from "./pages/TransportOgOvernatting";
import theme from "./theme";
import Rsvp from "./pages/Rsvp";
import Submited from "./pages/Submited";

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Topbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/submited" element={<Submited />} />
          <Route path="/fredag" element={<Fredag />} />
          <Route path="/lørdag" element={<Loerdag />} />
          <Route
            path="/transportogovernatting"
            element={<TransportOgOvernatting />}
          />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
