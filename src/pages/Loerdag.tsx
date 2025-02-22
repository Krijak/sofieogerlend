import { Stack, Typography, Link, Box } from "@mui/material";
import TimeLineItem from "../Components/TimeLineItem";
import SydengateForan from "../../public/SydengateForan.jpg";
import SydengateBak from "../../public/SydengateBak.jpg";
import DayAndDate from "../Components/DayAndDate";
import AnimatedImage from "../Components/AnimatedImage";
import AnimatedStack from "../Components/AnimatedStack";
import PageWrapper from "../Components/PageWrapper";

const TimeLine = () => {
  return (
    <Box padding={6} pt={3}>
      <TimeLineItem header={<Typography variant="h2">15 : 00</Typography>}>
        <Box mb={4}>
          <Typography variant="h2">VIELSE</Typography>
          <Link mb={4} href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
            Giske Kirke, Giskevegen 121, 6052 Giske
          </Link>
        </Box>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">14 : 30</Typography>}>
        <Box pb={4}>
          <Typography variant="h2">BRYLLUPSFEST</Typography>
          <Link href="https://maps.app.goo.gl/yoWSAJcg2W5mFSXd8">
            Øygardshallen, Sjøvegen 77, 6052 Giske
          </Link>
        </Box>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">15 : 00</Typography>}>
        <Typography marginBottom={2}>Leker</Typography>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">16 : 00</Typography>}>
        <Typography marginBottom={2}>Bordsetting</Typography>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">20 : 00</Typography>}>
        <Typography marginBottom={2}>Kaffe og kaker</Typography>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">21 : 00</Typography>}>
        <Typography marginBottom={2}>Solnedgang ute</Typography>
      </TimeLineItem>
      <TimeLineItem header={<Typography variant="h2">21 : 30</Typography>}>
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
  );
};

const Loerdag = () => {
  return (
    <PageWrapper>
      <Stack>
        <DayAndDate
          day="Lørdag"
          date="30 / 08 / 25"
          pl={{ xs: 6, sm: 6, lg: 0 }}
        >
          BRYLLUPSDAGEN
        </DayAndDate>
        <Box
          ml={{ xs: 6, sm: 6, lg: 0 }}
          mr={{ xs: 6, sm: 6, lg: 0 }}
          maxWidth={"500px"}
        >
          <Typography>
            Vielsen blir ved vakre Giske Kirke. Det vil bli arrangert felles
            transport fra Ålesund sentrum. Etter vielsen drar vi over til
            Øygardshallen hvor den store bryllupsfesten skal være. Her vil det
            serveres noe lett bespisning ved ankomst.
          </Typography>
        </Box>

        <Stack
          style={{ maxWidth: "800px", minWidth: "200px" }}
          mt={10}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={2}
        >
          <Stack width={"50%"}>
            <AnimatedImage
              className="scroll-animation"
              alt="Erlend og Sofie på teplantasje"
              src={SydengateForan}
            />
          </Stack>
          <Stack width={{ xs: "30%", sm: "30%", lg: "50%" }}>
            <AnimatedImage
              className="scroll-animation"
              justifyContent={"flex-end"}
              alt="Erlend og Sofie også på teplantasje"
              src={SydengateBak}
            />
            <Box pt={4} display={{ xs: "none", sm: "none", lg: "flex" }}>
              <TimeLine />
            </Box>
          </Stack>
        </Stack>

        <AnimatedStack
          display={{ xs: "flex", sm: "flex", lg: "none" }}
          maxWidth={"800px"}
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={{ xs: "center", sm: "center", lg: "flex-start" }}
          alignContent={{ xs: "center", sm: "center", lg: "flex-start" }}
          flexDirection={{ xs: "column", sm: "column", lg: "row" }}
          mt={7}
          pb={0}
        >
          <TimeLine />
        </AnimatedStack>
      </Stack>
    </PageWrapper>
  );
};

export default Loerdag;
