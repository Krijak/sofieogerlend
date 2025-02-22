import { Box, Stack } from "@mui/material";
import SE from "../../public/SE.png";
import SofieOgErlend from "../../public/SofieOgErlend.svg";
import Grein from "../../public/SofieErlend/Grein.png";
import KlatringKyss from "../../public/SofieErlend/KlatringKyss.png";
import SEBaat from "../../public/SofieErlend/SEBaat.png";
import FjellBak from "../../public/SofieErlend/FjellBak.png";
import FjellForan from "../../public/SofieErlend/FjellForan.png";

const Main = () => {
  const images: string[] = [Grein, KlatringKyss, SEBaat, FjellBak, FjellForan];
  const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
    <Stack alignItems={"center"}>
      <Box width={{ xs: "100px", sm: "100px" }}>
        <img src={SE} alt="Sofie + Erlend" width={"100%"} />
      </Box>
      <Box
        style={{
          maxWidth: "600px",
          minWidth: "100px",
        }}
        padding={6}
        paddingBottom={{ xs: 2, sm: 6 }}
        paddingTop={{ xs: 2, sm: 4 }}
      >
        <img
          className="image-animation"
          alt="Sofie og Erlend"
          src={images[randomImageIndex]}
          width={"100%"}
        />
      </Box>
      <Box width={{ xs: "170px", sm: "250px" }}>
        <img src={SofieOgErlend} alt="Sofie og Erlend" width={"100%"} />
      </Box>
    </Stack>
  );
};

export default Main;
