import { Stack, Typography, Link } from "@mui/material";
import { StyledBox, StyledLeftSideStack, PraktiskInfoP } from "./Fredag";
import { Box, styled } from "@mui/system";
import SEBaat from "../../public/SEBaat.jpg";
import TimeLineItem from "../Components/TimeLineItem";

const Loerdag = () => {
  return (
    <>
      <Stack alignItems={"center"} mt={10}>
        <Stack
          alignItems={"flex-end"}
          padding={5}
          width={"100%"}
          maxWidth={"500px"}
        >
          <Typography variant="h1" fontSize={"0.8rem"}>
            LØRDAG
          </Typography>
          <Typography variant="h2" fontSize={"1rem"}>
            30 / 08 / 25
          </Typography>

          <Stack sx={{ marginTop: 10 }} alignSelf={"flex-start"}>
            <Typography variant="h1" mb={3}>
              BRYLLUPSDAGEN
            </Typography>
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          width={"100%"}
          mt={3}
          padding={5}
        >
          <Stack
            gap={3}
            maxWidth={"600px"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            flexDirection={"row"}
          >
            <Box maxWidth={"400px"}>
              <TimeLineItem
                header={
                  <>
                    <Typography variant="h2">13 : 00</Typography>
                    <Typography variant="h1">VIELSE</Typography>
                  </>
                }
              >
                <Typography mb={10} mt={2}>
                  <Link href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
                    Giske Kirke,  Giskevegen 121, 6052 Giske
                  </Link>
                  <br />
                  <b>LØRDAG 30.08, kl 13:00</b>
                  <br />
                  Vielsen blir ved  vakre Giske Kirke.Det vil bli arrangert
                  felles transport fra Ålesund sentrum.
                </Typography>
              </TimeLineItem>
              <TimeLineItem
                header={
                  <>
                    <Typography variant="h2">14 : 30</Typography>
                    <Typography variant="h1">BRYLLUPSFEST</Typography>
                  </>
                }
              >
                <Typography marginBottom={10} mt={2}>
                  <Link href="https://maps.app.goo.gl/yoWSAJcg2W5mFSXd8">
                    Øygardshallen, Sjøvegen 77, 6052 Giske
                  </Link>
                  <br />
                  Etter vielsen drar vi over til Øygardshallen hvor den store
                  bryllupsfesten skal være. Her vil det serveres noe lett
                  bespisning ved ankomst.
                </Typography>
              </TimeLineItem>
              <TimeLineItem
                header={<Typography variant="h2">14 : 30</Typography>}
              >
                <Typography marginBottom={2}>Lett servering</Typography>
              </TimeLineItem>
              <TimeLineItem
                header={<Typography variant="h2">15 : 00</Typography>}
              >
                <Typography marginBottom={2}>Leker</Typography>
              </TimeLineItem>
              <TimeLineItem
                header={<Typography variant="h2">16 : 00</Typography>}
              >
                <Typography marginBottom={2}>Bordsetting</Typography>
              </TimeLineItem>
              <TimeLineItem
                header={<Typography variant="h2">20 : 00</Typography>}
              >
                <Typography marginBottom={2}>Kaffe og kaker</Typography>
              </TimeLineItem>
              <TimeLineItem
                header={<Typography variant="h2">21 : 00</Typography>}
              >
                <Typography marginBottom={2}>Solnedgang ute</Typography>
              </TimeLineItem>
              <TimeLineItem
                header={<Typography variant="h2">21 : 30</Typography>}
              >
                <Typography marginBottom={2}>Fest og moro</Typography>
              </TimeLineItem>
              <TimeLineItem
                isLast
                header={<Typography variant="h2">02 : 00</Typography>}
              >
                <Typography marginBottom={2}>
                  Busstransport til Ålesund sentrum
                </Typography>
              </TimeLineItem>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Loerdag;
