import "./App.css";
import { useEffect } from "react";
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
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("image-animation");
      } else {
        entry.target.classList.remove("image-animation");
      }
    });
  });

  useEffect(() => {
    const viewbox = document.querySelectorAll(".image");
    viewbox.forEach((image) => {
      observer.observe(image);
    });
  });

  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
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
