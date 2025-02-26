import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import AppWrapper from "./Components/AppWrapper";
import Topbar from "./Components/Topbar";
import Fredag from "./pages/Fredag";
import Informasjon from "./pages/Informasjon";
import Loading from "./pages/Loading";
import Loerdag from "./pages/Loerdag";
import Main from "./pages/Main";
import TransportOgOvernatting from "./pages/TransportOgOvernatting";
import theme from "./theme";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <AppWrapper setIsLoaded={setIsLoaded} setShowLoading={setShowLoading}>
        <ThemeProvider theme={theme}>
          {!isLoaded && <Loading isLoading={showLoading} />}
          <Topbar />
          {isLoaded && (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/fredag" element={<Fredag />} />
              <Route path="/lørdag" element={<Loerdag />} />
              <Route path="/informasjon" element={<Informasjon />} />
              <Route
                path="/transportogovernatting"
                element={<TransportOgOvernatting />}
              />
            </Routes>
          )}
        </ThemeProvider>
      </AppWrapper>
    </HashRouter>
  );
}

export default App;
