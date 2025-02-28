import { Box, Link, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import Gress from "../../public/Gress.jpg";
import SofieErlendTeSelfie from "../../public/SofieErlendTeSelfie.jpg";
import Telt from "../../public/Telt.jpg";
import AnimatedImage from "../Components/AnimatedImage";
import FullWidthStack from "../Components/FullWidthStack";
import PageWrapper from "../Components/PageWrapper";

const DifferentTransport = ({
  header,
  children,
}: PropsWithChildren & { header: string }) => {
  return (
    <Box maxWidth={"300px"} width={"100%"}>
      <Typography mb={1} className={"apply-scroll-animation"}>
        <b>{header}</b>
      </Typography>
      <Typography className={"apply-scroll-animation"}>{children}</Typography>
    </Box>
  );
};

const TransportOgOvernatting = () => {
  return (
    <PageWrapper>
      <AnimatedImage
        style={{ minWidth: "100px" }}
        maxWidth={{ xs: "400px", sm: "400px", lg: "500px" }}
        paddingLeft={9}
        paddingRight={9}
        alt="Erlend og Sofie på båt"
        src={SofieErlendTeSelfie}
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
          Vi har fått avtale med noen av hotellene i byen: 
        </Typography>
        <Typography mt={1}>
        <b>Hotel Brosundet:</b> Booking gjøres via linken under innen 20. juli.{" "}
        </Typography>
          <Link href="https://app.mews.com/distributor/a863cd3f-e75f-4f79-bf8c-b16900836992?mewsAvailabilityBlockId=5fd2996b-52cc-42be-a3b5-b29000996b74&mewsStart=2025-08-29&mewsEnd=2025-08-31">
            Booking Hotel Brosundet
          </Link>
        <Typography mt={1}>
        <b>Quality Hotel Waterfront:</b> Booking gjøres via linken under innen 27. juni.{" "}
        </Typography>
          <Link href="https://app.mews.com/distributor/cc78698f-2e14-44d4-8e26-b059008ecc39?mewsAvailabilityBlockId=63aaef69-15c2-4362-a37f-b27b0139f66c&mewsStart=2025-08-29&mewsEnd=2025-08-31">
            Booking Quality Hotel Waterfront
          </Link>
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
          style={{ transform: "rotateY(180deg)" }}
          src={Gress}
        />
        <AnimatedImage width={"30%"} alt="Azorene " src={Telt} />
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
        <DifferentTransport header="Buss til og fra bryllupet">
          Vi setter opp en buss som kjører fra Ålesund sentrum til Giske Kirke
          før seremonien, og som kjører gjester tilbake på slutten av kvelden.
          Tidspunkter og oppmøtested vil bli oppdatert nærmere bryllupet. Svar
          under RSVP om du ønsker transport.
        </DifferentTransport>
        <DifferentTransport header="Parkering">
          Det er gode parkeringsmuligheter ved både ved Giske Kirke og
          bryllupslokalet Øygardshallen. Vi oppfordrer til samkjøring der det er
          mulig. Det er fullt mulig å la bilen stå til dagen etter.
        </DifferentTransport>
        <DifferentTransport header="Taxi og annen transport">
          Ålesund Taxi: 70 10 30 00 <br /> Norgestaxi:  08 000 <br /> FRAM:
          Kollektivtransport i Ålesund
        </DifferentTransport>
      </FullWidthStack>
    </PageWrapper>
  );
};

export default TransportOgOvernatting;
