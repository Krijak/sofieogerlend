import { Link, Stack, Typography } from "@mui/material";
import Motorsykkel1 from "../../public/motorsykkel_01.gif";
import Motorsykkel2 from "../../public/motorsykkel_02.gif";
import Motorsykkel3 from "../../public/motorsykkel_03.gif";

import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";

const Informasjon = () => {
  return (
    <PageWrapper>
      <Stack flexDirection={"row"} gap={1} marginLeft={8} marginRight={8}>
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt="Erlend og Sofie i Indonesia"
          src={Motorsykkel1}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt="Erlend og Sofie i Indonesia"
          src={Motorsykkel2}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt="Erlend og Sofie i Indonesia"
          src={Motorsykkel3}
        />
      </Stack>
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Typography variant="h2">SPØRSMÅL?</Typography>
        <Typography mt={1}>
          Ta kontakt med{" "}
          <Link href="mailto:evastveit@gmail.com">evastveit@gmail.com</Link>
        </Typography>
        <Typography variant="h2" mt={4}>
          TALER OG TOASTMASTER
        </Typography>
        <Typography mt={1}>Har du lyst til å holde tale, fremføre et innslag eller si noen ord?</Typography>
        <Typography mt={1}>Ta kontakt med vår eminente toastmaster Hans Olav Hilsen på e-post <Link href="mailto:hahilsen@gmail.com">hahilsen@gmail.com</Link> innen 30. juni.</Typography>
        <Typography mt={1}><i>*maks fire minutter per innlegg</i></Typography>
        <Typography variant="h2" mt={4}>
          DRESSCODE
        </Typography>
        <Typography mt={1}>
          Mørk dress. Ta gjerne med klær for å nyte solnedgangen ved stranden
          senere på kvelden.
        </Typography>
        <Typography variant="h2" mt={4}>
          KAN JEG TA MED BARN?
        </Typography>
        <Typography mt={1}>
          Vi ønsker å feire dagen vår i voksent selskap, og håper barna kan være
          igjen hos en barnevakt akkurat denne dagen.
        </Typography>
      </Stack>
    </PageWrapper>
  );
};

export default Informasjon;
