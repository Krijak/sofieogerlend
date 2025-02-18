import { Box, Stack, Typography } from "@mui/material";
import SETeTwo from "../../public/SETeTwo.png";
import Azores from "../../public/Azores.png";
import Foss from "../../public/SofieErlend/Foss.png";

const TransportOgOvernatting = () => {
  return (
    <>
      <Stack alignItems={"center"} mt={10}>
        <Box
          style={{ maxWidth: "400px", minWidth: "100px" }}
          paddingLeft={9}
          paddingRight={9}
        >
          <img alt="Erlend og Sofie på båt" src={Foss} width={"100%"} />
        </Box>
        <Stack maxWidth={"600px"} mt={4} padding={6}>
          <Typography variant="h1">OVERNATTING</Typography>
          <Typography mt={3}>
            Det finnes flere overnattingsmuligheter i nærheten av Ålesund og
            Giske. Sjekk ut hotellene i Ålesund Sentrum og hva som finnes for
            eksempel på AirBnB rundt Giske, Godøya og Ålesund. Det er også mulig
            å telte eller sove i bil ved Øygardshallen.
          </Typography>
        </Stack>
        <Stack
          style={{ maxWidth: "800px", minWidth: "200px" }}
          mt={10}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={2}
        >
          <img
            alt="Erlend og Sofie på teplantasje "
            src={SETeTwo}
            width={"50%"}
          />
          <img
            alt="Erlend og Sofie også på teplantasje"
            src={Azores}
            width={"30%"}
            height={"30%"}
          />
        </Stack>
        <Stack alignItems={"center"}>
          <Box maxWidth={"500px"} mt={5} padding={6}>
            <Typography variant="h1">TRANSPORT</Typography>
            <Typography mt={3}>
              For å gjøre dagen så enkel som mulig for alle, har vi arrangert
              noen transportmuligheter:
            </Typography>
          </Box>
        </Stack>
        <Stack
          flexDirection={"row"}
          mt={5}
          flexWrap={"wrap"}
          justifyContent={"center"}
          width={"100%"}
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            padding: 5,
            color: "white",
          }}
        >
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
                Kirke før seremonien, og som kjører gjester tilbake på slutten
                av kvelden. Tidspunkter og oppmøtested vil bli oppdatert nærmere
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
                det er mulig. Det er fullt mulig å la bilen stå til dagen
                etter. 
              </Typography>
            </Box>
            <Box maxWidth={"300px"} width={"100%"}>
              <Typography mb={1}>
                <b>Taxi og annen transport</b>
              </Typography>
              <Typography>
                Ålesund Taxi: 70 10 30 00 <br /> Norgestaxi:  08 000 <br />{" "}
                FRAM: Kollektivtransport i Ålesund
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TransportOgOvernatting;
