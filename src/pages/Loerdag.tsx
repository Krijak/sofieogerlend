import { Stack, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import TimeLineItem from "../Components/TimeLineItem";
import SydengateForan from "../../public/SofieErlend/SydengateForan.jpg";
import SydengateBak from "../../public/SofieErlend/SydengateBak.jpg";
import DayAndDate from "../Components/DayAndDate";
import AnimatedImage from "../Components/AnimatedImage";
import { PropsWithChildren } from "react";
import FullWidthStack from "../Components/FullWidthStack";
import AnimatedStack from "../Components/AnimatedStack";

const VielseBryllupsfest = ({
  time,
  header,
  children,
}: { time: string; header: string } & PropsWithChildren) => {
  return (
    <AnimatedStack>
      <Typography variant="h2">{time}</Typography>
      <Typography variant="h1">{header}</Typography>
      <Typography mb={10} mt={3}>
        {children}
      </Typography>
    </AnimatedStack>
  );
};

const TimeLine = () => {
  return (
    <Box>
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
    <>
      <Stack alignItems={"center"} mt={10}>
        <DayAndDate day="Lørdag" date="30 / 08 / 25">
          BRYLLUPSDAGEN
        </DayAndDate>

        <Stack
          style={{ maxWidth: "800px", minWidth: "200px" }}
          mt={10}
          flexDirection={"row"}
          justifyContent={"center"}
          gap={2}
        >
          <AnimatedImage
            justifyContent={"flex-end"}
            width={"50%"}
            alt="Erlend og Sofie på teplantasje"
            src={SydengateForan}
          />
          <AnimatedImage
            justifyContent={"flex-end"}
            width={"30%"}
            alt="Erlend og Sofie også på teplantasje"
            src={SydengateBak}
          />
        </Stack>

        <Stack maxWidth={"500px"} padding={7} pb={0}>
          <VielseBryllupsfest time="13 : 00" header="VIELSE">
            <Link href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
              Giske Kirke, Giskevegen 121, 6052 Giske
            </Link>
            <br />
            Vielsen blir ved vakre Giske Kirke. Det vil bli arrangert felles
            transport fra Ålesund sentrum.
          </VielseBryllupsfest>

          <VielseBryllupsfest time="14 : 30" header="BRYLLUPSFEST">
            <Link href="https://maps.app.goo.gl/yoWSAJcg2W5mFSXd8">
              Øygardshallen, Sjøvegen 77, 6052 Giske
            </Link>
            <br />
            Etter vielsen drar vi over til Øygardshallen hvor den store
            bryllupsfesten skal være.
            <br />
            <br />
            Her vil det serveres noe lett bespisning ved ankomst.
          </VielseBryllupsfest>
        </Stack>
        <FullWidthStack flexDirection={"column"} alignItems={"center"}>
          <TimeLine />
        </FullWidthStack>
      </Stack>
    </>
  );
};

export default Loerdag;
