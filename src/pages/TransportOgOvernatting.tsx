import { Box, Link, Stack, Typography } from "@mui/material";
import Azores from "../../public/Azores.jpg";
import Foss from "../../public/Foss.jpg";
import SETeTwo from "../../public/SETeTwo.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import FullWidthStack from "../Components/FullWidthStack";
import PageWrapper from "../Components/PageWrapper";

const TransportOgOvernatting = () => {
  return (
    <PageWrapper>
      <AnimatedImage
        style={{ minWidth: "100px" }}
        maxWidth={{ xs: "400px", sm: "400px", lg: "500px" }}
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
          eksempel på AirBnB rundt Giske, Godøya/Alnes og Ålesund. Det er også
          mulig å telte eller sove i bil ved Øygardshallen.
        </Typography>
        <Typography mt={3}>
          Vi har fått avtale med noen av hotellene i byen: Quality Hotel
          Waterfront. Booking gjøres via linken under innen 27. juni.{" "}
          <Link href="https://app.mews.com/distributor/cc78698f-2e14-44d4-8e26-b059008ecc39?mewsAvailabilityBlockId=63aaef69-15c2-4362-a37f-b27b0139f66c&mewsStart=2025-08-29&mewsEnd=2025-08-31">
            Booking Quality Hotel Waterfront
          </Link>
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
            <Typography mb={1} className={"apply-scroll-animation"}>
              <b>Buss til og fra bryllupet</b>
            </Typography>
            <Typography className={"apply-scroll-animation"}>
              Vi setter opp en buss som kjører fra Ålesund sentrum til Giske
              Kirke før seremonien, og som kjører gjester tilbake på slutten av
              kvelden. Tidspunkter og oppmøtested vil bli oppdatert nærmere
              bryllupet. Svar under RSVP om du ønsker transport.
            </Typography>
          </Box>
          <Box maxWidth={"300px"}>
            <Typography mb={1} className={"apply-scroll-animation"}>
              <b>Parkering</b>
            </Typography>
            <Typography className={"apply-scroll-animation"}>
              Det er gode parkeringsmuligheter ved både ved Giske Kirke og
              bryllupslokalet Øygardshallen. Vi oppfordrer til samkjøring der
              det er mulig. Det er fullt mulig å la bilen stå til dagen etter. 
            </Typography>
          </Box>
          <Box maxWidth={"300px"} width={"100%"}>
            <Typography mb={1} className={"apply-scroll-animation"}>
              <b>Taxi og annen transport</b>
            </Typography>
            <Typography className={"apply-scroll-animation"}>
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
