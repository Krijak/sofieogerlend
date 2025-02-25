import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { HashRouter } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Fredag from "./pages/Fredag";
import Informasjon from "./pages/Informasjon";
import Loading from "./pages/Loading";
import Loerdag from "./pages/Loerdag";
import Main from "./pages/Main";
import Submited from "./pages/Submited";
import TransportOgOvernatting from "./pages/TransportOgOvernatting";
import theme from "./theme";

const Wrapper = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      }
    });
  });

  useLayoutEffect(() => {
    const viewbox = document.querySelectorAll(".apply-scroll-animation");
    viewbox.forEach((element) => {
      observer.observe(element);
    });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const preloadImages = (images: string[]): Promise<void[]> => {
  const imagePromises = images.map((src) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => reject(`Failed to load image: ${src}`);
    });
  });

  return Promise.all(imagePromises);
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const images: string[] = [
      ...Object.values(
        import.meta.glob("/public/*.{png,jpg,jpeg,gif}", { eager: true })
      ).map((module) => (module as any).default),
      ...Object.values(
        import.meta.glob("/public/SofieErlend/*.{png,jpg,jpeg}", {
          eager: true,
        })
      ).map((module) => (module as any).default),
    ];

    preloadImages(images)
      .then(() => {
        setTimeout(() => {
          setShowLoading(false);
          setTimeout(() => {
            setIsLoaded(true);
          }, 500);
        }, 500);
      })
      .catch(() => {
        setShowLoading(false);
        setIsLoaded(true);
      });
  }, [location.pathname]);

  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <Wrapper>
        <ThemeProvider theme={theme}>
          {!isLoaded && <Loading isLoading={showLoading} />}
          <Topbar />
          {isLoaded && (
            <Routes>
              <Route
                path="/"
                element={
                  <Box className="scroll-animation">
                    <Main />
                  </Box>
                }
              />
              <Route
                path="/main"
                element={
                  <Box className="scroll-animation">
                    <Main />
                  </Box>
                }
              />
              <Route path="/submited" element={<Submited />} />
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
      </Wrapper>
    </HashRouter>
  );
}

export default App;
