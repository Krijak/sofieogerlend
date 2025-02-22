import { Link, Stack, Typography } from "@mui/material";
import Kajakk from "../../public/Kajakk.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";

const Informasjon = () => {
  return (
    <PageWrapper>
      <AnimatedImage
        style={{ maxWidth: "400px", minWidth: "100px" }}
        paddingLeft={9}
        paddingRight={9}
        alt="Erlend og Sofie på båt"
        src={Kajakk}
      />
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Typography variant="h1">SPØRSMÅL?</Typography>
        <Typography mt={1}>
          Ta kontakt med{" "}
          <Link href="mailto:evastveit@gmail.com">evastveit@gmail.com</Link>
        </Typography>
        <Typography variant="h1" mt={4}>
          TOASTMASTER OG TALER
        </Typography>
        <Typography mt={1}>Informasjon kommer</Typography>
        <Typography variant="h1" mt={4}>
          DRESSCODE
        </Typography>
        <Typography mt={1}>Noe helt sykt swag, takk</Typography>
        <Typography variant="h1" mt={4}>
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
