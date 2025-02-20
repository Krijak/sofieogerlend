import { Stack, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import TimeLineItem from "../Components/TimeLineItem";
import Flowers from "../../public/Flowers.png";

const Loerdag = () => {
  return (
    <>
      <Stack alignItems={"center"} mt={10}>
        <Stack
          alignItems={"flex-end"}
          padding={6}
          paddingBottom={3}
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
            <Typography variant="h1">BRYLLUPSDAGEN</Typography>
          </Stack>
        </Stack>

        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          width={"100%"}
          padding={5}
        >
          <Stack
            gap={3}
            maxWidth={"600px"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            flexDirection={"row"}
          >
            <Stack
              maxWidth={"400px"}
              padding={7}
              paddingBottom={0}
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
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
                    Giske Kirke, Giskevegen 121, 6052 Giske
                  </Link>
                  <br />
                  Vielsen blir ved vakre Giske Kirke. Det vil bli arrangert
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
                  bryllupsfesten skal være.
                  <br />
                  <br />
                  Her vil det serveres noe lett bespisning ved ankomst.
                </Typography>
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
              <Box
                alignSelf={"flex-end"}
                justifySelf={"flex-end"}
                mt={3}
                mb={-2}
                mr={-3}
              >
                <img src={Flowers} width={"200px"} />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Loerdag;
