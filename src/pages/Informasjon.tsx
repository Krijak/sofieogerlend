import { Link, Stack, Typography } from "@mui/material";
import Kajakk from "../../public/Kajakk.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";

const Informasjon = () => {
  return (
    <PageWrapper>
      <Stack flexDirection={"row"} gap={1} marginLeft={8} marginRight={8}>
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt="Erlend og Sofie på båt"
          src={Kajakk}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt="Erlend og Sofie på båt"
          src={Kajakk}
        />
        <AnimatedImage
          style={{ maxWidth: "400px", minWidth: "100px" }}
          alt="Erlend og Sofie på båt"
          src={Kajakk}
        />
      </Stack>
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Typography variant="h1">INFORMASJON</Typography>
          <Typography variant="h2" mt={3}>SPØRSMÅL?</Typography>
          <Typography mt={1}>
            Ta kontakt med{" "}
            <Link href="mailto:evastveit@gmail.com">evastveit@gmail.com</Link>
          </Typography>
          <Typography variant="h2" mt={4}>
            TALER OG TOASTMASTER
          </Typography>
          <Typography mt={1}>Informasjon kommer</Typography>
          {/* <Typography variant="h2" mt={4}> */}
            {/* DRESSCODE
          </Typography>
          <Typography mt={1}>Noe helt sykt swag, takk</Typography> */}
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
