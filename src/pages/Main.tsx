import { Box, Stack } from "@mui/material";
import SE from "../../public/SE.png";
import SofieOgErlend from "../../public/SofieOgErlend.svg";
import Grein from "../../public/SofieErlend/Grein.png";
import KlatringKyss from "../../public/SofieErlend/KlatringKyss.png";
import SEBaat from "../../public/SofieErlend/SEBaat.png";
import FjellBak from "../../public/SofieErlend/FjellBak.png";
import FjellForan from "../../public/SofieErlend/FjellForan.png";
import Sydenbaat from "../../public/SofieErlend/Sydenbaat.jpg";
import SydenbaatTwo from "../../public/SofieErlend/SydenbaatTwo.jpg";
import Fisk from "../../public/SofieErlend/Fisk.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import { useEffect } from "react";

const Main = () => {
  const images: string[] = [
    Grein,
    KlatringKyss,
    SEBaat,
    FjellBak,
    FjellForan,
    Sydenbaat,
    SydenbaatTwo,
    Fisk,
  ];
  const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
    <Stack alignItems={"center"} mt={10}>
      <Box width={{ xs: "80px", sm: "100px" }}>
        <img src={SE} alt="Sofie + Erlend" width={"100%"} />
      </Box>
      <AnimatedImage
        src={images[randomImageIndex]}
        alt="Sofie og Erlend"
        style={{
          maxWidth: "600px",
          minWidth: "100px",
        }}
        padding={8}
        paddingBottom={{ xs: 2, sm: 6 }}
        paddingTop={{ xs: 2, sm: 4 }}
      />
      <Box width={{ xs: "200px", sm: "250px" }}>
        <img src={SofieOgErlend} alt="Sofie og Erlend" width={"100%"} />
      </Box>
    </Stack>
  );
};

export default Main;
