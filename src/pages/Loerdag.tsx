import { Stack, Typography, Link, Box, StackProps } from "@mui/material";
import TimeLineItem from "../Components/TimeLineItem";
import SydengateForan from "../../public/SydengateForan.jpg";
import SydengateBak from "../../public/SydengateBak.jpg";
import DayAndDate from "../Components/DayAndDate";
import AnimatedImage from "../Components/AnimatedImage";
import { PropsWithChildren } from "react";
import AnimatedStack from "../Components/AnimatedStack";
import PageWrapper from "../Components/PageWrapper";

type VielseBryllupsfestType = {
  time: string;
  header: string;
} & PropsWithChildren &
  StackProps;

const VielseBryllupsfest = ({
  time,
  header,
  children,
  ...restProps
}: VielseBryllupsfestType) => {
  return (
    <Stack className="scroll-animation" width={"300px"} {...restProps}>
      <Typography variant="h2">{time}</Typography>
      <Typography variant="h1">{header}</Typography>
      <Typography mb={10} mt={3}>
        {children}
      </Typography>
    </Stack>
  );
};

const Bryllupsfest = (props: StackProps) => {
  return (
    <VielseBryllupsfest time="14 : 30" header="BRYLLUPSFEST" {...props}>
      <Link href="https://maps.app.goo.gl/yoWSAJcg2W5mFSXd8">
        Øygardshallen, Sjøvegen 77, 6052 Giske
      </Link>
      <br />
      Etter vielsen drar vi over til Øygardshallen hvor den store bryllupsfesten
      skal være.
      <br />
      <br />
      Her vil det serveres noe lett bespisning ved ankomst.
      <TimeLine />
    </VielseBryllupsfest>
  );
};

const Vielse = (props: StackProps) => {
  return (
    <VielseBryllupsfest time="13 : 00" header="VIELSE" {...props}>
      <Link href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
        Giske Kirke, Giskevegen 121, 6052 Giske
      </Link>
      <br />
      Vielsen blir ved vakre Giske Kirke. Det vil bli arrangert felles transport
      fra Ålesund sentrum.
    </VielseBryllupsfest>
  );
};

const TimeLine = () => {
  return (
    <Box mt={10}>
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
          ml={{ xs: 6, sm: 6, lg: 0 }}
        >
          BRYLLUPSDAGEN
        </DayAndDate>

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
              justifyContent={"flex-end"}
              alt="Erlend og Sofie på teplantasje"
              src={SydengateForan}
            />
            <Vielse mt={4} display={{ xs: "none", sm: "none", lg: "flex" }} />
          </Stack>
          <Stack
            width={{ xs: "30%", sm: "30%", lg: "50%" }}
            justifyContent={"flex-end"}
          >
            <AnimatedImage
              className="scroll-animation"
              justifyContent={"flex-end"}
              alt="Erlend og Sofie også på teplantasje"
              src={SydengateBak}
            />
            <Bryllupsfest
              mt={4}
              display={{ xs: "none", sm: "none", lg: "flex" }}
            />
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
          <Vielse />
          <Bryllupsfest />
        </AnimatedStack>
      </Stack>
    </PageWrapper>
  );
};

export default Loerdag;
