import { Box, Link, Stack, styled, Typography } from "@mui/material";
import MSBruvik from "../../public/MSBruvik.jpg";
import TimeLineItem from "../Components/TimeLineItem";
import DayAndDate from "../Components/DayAndDate";
import AnimatedImage from "../Components/AnimatedImage";
import FullWidthStack from "../Components/FullWidthStack";
import PageWrapper from "../Components/PageWrapper";

const Fredag = () => {
  return (
    <PageWrapper>
      <Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"end"}
          flexWrap={"wrap-reverse"}
          justifyContent={"center"}
          mb={{ lg: 10 }}
        >
          <AnimatedImage
            mt={10}
            maxWidth={"700px"}
            alt="MS Bruvik"
            src={MSBruvik}
            className="scroll-animation"
          />
          <Stack pl={6} pr={6}>
            <DayAndDate day="Fredag" date="29 / 08 / 25">
              FJORD CRUISE
            </DayAndDate>

            <Stack width={"100%"} maxWidth={"700px"}>
              <Typography maxWidth={"600px"}>
                Fredag ettermiddag drar vi ut på fjord cruise med MS Bruvik
                innover fantastiske Hjørundfjorden. Her vil man kunne se kremen
                av Sunnmøre - både fjord og fjell. Dette blir en fin anledning
                til å bli bedre kjent med bryllupsgjestene og vi ønsker at så
                mange som mulig tar seg tid til dette. Det blir servert en
                velkomstdrink og noe lett bespisning underveis. Båten har to
                salonger, bar på øvre dekk og et stort utedekk akter. Vi håper
                så mange som mulig vil bli med oss på turen!
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          mt={5}
          ml={{ sm: 0, lg: "690px" }}
          padding={6}
          paddingTop={{ lg: 0 }}
          alignItems={{ sm: "center", lg: "flex-start" }}
        >
          <TimeLineItem>
            <Box>
              <Typography variant="h2" mb={2}>
                17 : 00
              </Typography>
              <PraktiskInfoP>
                Sted for oppmøte: "Rådhuskaia" flytebrygge like ved Ålesund
                Cruise Terminal og Ålesund Bussterminal.{" "}
                <Link href="https://www.google.com/maps/place/Cruise+Service+Fjord+Tours/@62.4702321,6.1549915,383m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4616db8adff3c02f:0x8c2a9a50ff2ca49a!8m2!3d62.4702321!4d6.1549915!16s%2Fg%2F11svh66vns?entry=tts&g_ep=EgoyMDI1MDEyMi4wIPu8ASoASAFQAw%3D%3D">
                  Klikk her for å se sted for oppmøtested i Google Maps.
                </Link>
              </PraktiskInfoP>
              <PraktiskInfoP>
                <b>Tidspunkt:</b> MS Bruvik segler kl 17:00, så møt i god tid
                før dette!
              </PraktiskInfoP>
              <PraktiskInfoP>
                <b>Varighet:</b> Turen varer ca 4 timer.
              </PraktiskInfoP>
              <Typography>
                <b>Bekledning:</b> Casual, ta gjerne med varme klær til å stå
                ute i.
              </Typography>
            </Box>
          </TimeLineItem>
        </Stack>

        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
          width={"100%"}
        ></Stack>
      </Stack>

      <FullWidthStack mt={{ xs: 0, sm: 0, lg: 10 }}>
        <Box maxWidth={"600px"}>
          <Typography padding={5}>
            MS «Bruvik» er en av Norges best bevarte fjordpassasjerbåter, bygget
            i 1949 ved Glommen Mekaniske Verksted i Fredrikstad. Båten har plass
            til 153 passasjerer og tilbyr nostalgiske fjordopplevelser i vakker
            sunnmørsk natur. Mannskapet deler gjerne sin lokalkunnskap og båtens
            historie med passasjerene.{" "}
            <Link href="https://www.cruise-service.no/bruvik">
              Les mer om MS Bruvik her.
            </Link>
          </Typography>
        </Box>
      </FullWidthStack>
    </PageWrapper>
  );
};

export default Fredag;

export const StyledLeftSideStack = styled(Stack)({
  minWidth: "100px",
  maxWidth: "100px",
  alignItems: "flex-end",
});

export const StyledBox = styled(Stack)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  marginLeft: theme.spacing(4),
  borderLeft: "1px solid",
  borderColor: theme.palette.primary.main,
}));

export const PraktiskInfoP = styled(Typography)(({ theme }) => ({
  maxWidth: "400px",
  marginBottom: theme.spacing(2),
}));
