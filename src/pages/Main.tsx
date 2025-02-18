import { Box, Stack } from "@mui/material";
import SofieErlend from "../../public/SofieErlend.png";
import Foss from "../../public/SofieErlend/Foss.png";
import Grein from "../../public/SofieErlend/Grein.png";
import KlatringKyss from "../../public/SofieErlend/KlatringKyss.png";
import SEBaat from "../../public/SofieErlend/SEBaat.png";
import FjellBak from "../../public/SofieErlend/FjellBak.png";
import FjellForan from "../../public/SofieErlend/FjellForan.png";

const Main = () => {
  const images: string[] = [
    Foss,
    Grein,
    KlatringKyss,
    SEBaat,
    FjellBak,
    FjellForan,
  ];
  const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
    <Stack alignItems={"center"}>
      <Box width={{ xs: "170px", sm: "250px" }}>
        <img src={SofieErlend} alt="Sofie + Erlend" width={"100%"} />
      </Box>
      <Box
        style={{
          maxWidth: "500px",
          minWidth: "100px",
        }}
        padding={6}
        paddingTop={4}
      >
        <img
          alt="Sofie og Erlend"
          src={images[randomImageIndex]}
          width={"100%"}
        />
      </Box>
    </Stack>
  );
};

export default Main;
