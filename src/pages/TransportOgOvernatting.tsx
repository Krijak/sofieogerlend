import { Box, Stack, Typography } from "@mui/material";
import SETeTwo from "../../public/SETeTwo.jpg";
import Azores from "../../public/Azores.jpg";
import Foss from "../../public/Foss.jpg";
import FullWidthStack from "../Components/FullWidthStack";
import AnimatedImage from "../Components/AnimatedImage";
import PageWrapper from "../Components/PageWrapper";

const TransportOgOvernatting = () => {
  return (
    <PageWrapper>
      <AnimatedImage
        style={{ maxWidth: "500px", minWidth: "100px" }}
        paddingLeft={9}
        paddingRight={9}
        alt="Erlend og Sofie på båt"
        src={Foss}
      />
      <Stack maxWidth={"600px"} mt={4} padding={6}>
        <Typography variant="h1">OVERNATTING</Typography>
        <Typography mt={3}>
          Det finnes flere overnattingsmuligheter i nærheten av Ålesund og
          Giske. Sjekk ut hotellene i Ålesund Sentrum og hva som finnes for
          eksempel på AirBnB rundt Giske, Godøya og Ålesund. Det er også mulig å
          telte eller sove i bil ved Øygardshallen.
        </Typography>
      </Stack>
      <Stack
        style={{ maxWidth: "800px", minWidth: "200px" }}
        mt={10}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={2}
      >
        <AnimatedImage
          width={"50%"}
          alt="Erlend og Sofie på teplantasje "
          src={SETeTwo}
        />
        <AnimatedImage width={"30%"} alt="Azorene " src={Azores} />
      </Stack>
      <Stack alignItems={"center"}>
        <Box maxWidth={"500px"} mt={5} padding={6}>
          <Typography variant="h1">TRANSPORT</Typography>
          <Typography mt={3}>
            For å gjøre dagen så enkel som mulig for alle, har vi arrangert noen
            transportmuligheter:
          </Typography>
        </Box>
      </Stack>
      <FullWidthStack>
        <Stack
          gap={4}
          maxWidth={"900px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Box maxWidth={"300px"}>
            <Typography mb={1}>
              <b>Buss til og fra bryllupet</b>
            </Typography>
            <Typography>
              Vi har satt opp en buss som kjører fra Ålesund sentrum til Giske
              Kirke før seremonien, og som kjører gjester tilbake på slutten av
              kvelden. Tidspunkter og oppmøtested vil bli oppdatert nærmere
              bryllupet.
            </Typography>
          </Box>
          <Box maxWidth={"300px"}>
            <Typography mb={1}>
              <b>Parkering</b>
            </Typography>
            <Typography>
              Det er gode parkeringsmuligheter ved både ved Giske Kirke og
              bryllupslokalet Øygardshallen. Vi oppfordrer til samkjøring der
              det er mulig. Det er fullt mulig å la bilen stå til dagen etter. 
            </Typography>
          </Box>
          <Box maxWidth={"300px"} width={"100%"}>
            <Typography mb={1}>
              <b>Taxi og annen transport</b>
            </Typography>
            <Typography>
              Ålesund Taxi: 70 10 30 00 <br /> Norgestaxi:  08 000 <br /> FRAM:
              Kollektivtransport i Ålesund
            </Typography>
          </Box>
        </Stack>
      </FullWidthStack>
    </PageWrapper>
  );
};

export default TransportOgOvernatting;
