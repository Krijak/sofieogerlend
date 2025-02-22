import { Box } from "@mui/material";
import SE from "../../public/SE.png";
import SofieOgErlend from "../../public/SofieOgErlend.svg";
import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";

const Main = () => {
  const images: string[] = Object.values(
    import.meta.glob("/public/SofieErlend/*.{png,jpg,jpeg}", { eager: true })
  ).map((module) => (module as any).default);

  const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
    <PageWrapper>
      <Box width={{ xs: "80px", sm: "100px" }}>
        <img src={SE} alt="Sofie + Erlend" width={"100%"} />
      </Box>
      <AnimatedImage
        src={images[randomImageIndex]}
        alt="Sofie og Erlend"
        style={{
          maxWidth: "500px",
          minWidth: "100px",
        }}
        padding={8}
        paddingBottom={{ xs: 2, sm: 6 }}
        paddingTop={{ xs: 2, sm: 4 }}
      />
      <Box width={{ xs: "200px", sm: "250px" }}>
        <img src={SofieOgErlend} alt="Sofie og Erlend" width={"100%"} />
      </Box>
    </PageWrapper>
  );
};

export default Main;
