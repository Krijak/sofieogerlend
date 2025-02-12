import { Box, Button, Stack, Typography } from "@mui/material";

const Fredag = () => {
  const leftSideWidth = "300px";
  return (
    <>
      <Stack flexDirection={"row"}>
        <Stack alignItems={"flex-end"} width={leftSideWidth}>
          <Typography variant="h2">FREDAG</Typography>
          <Typography variant="h1" whiteSpace={"nowrap"}>
            29 / 08 / 25
          </Typography>
        </Stack>
        <Box
          pl={4}
          ml={4}
          sx={{
            borderLeft: (theme) => `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h1">FJORD CRUISE - MS BRUVIK</Typography>
          <Typography>
            Fredag ettermiddag drar vi ut på fjord cruise med MS Bruvik innover
            fantastiske Hjørundfjorden. Her vil man kunne se kremen av Sunnmøre
            - både fjord og fjell. Dette blir en fin anledning til å bli bedre
            kjent med bryllupsgjestene og vi ønsker at så mange som mulig tar
            seg tid til dette.  Det blir servert en velkomstdrink og noe lett
            bespisning underveis. Båten har to salonger, bar på øvre dekk og et
            stort utedekk akter. Vi håper så mange som mulig vil bli med oss på
            turen! 
          </Typography>
        </Box>
      </Stack>
      <Stack flexDirection={"row"}>
        <Stack alignItems={"flex-end"} width={leftSideWidth}>
          <Typography variant="h2" whiteSpace={"nowrap"}>
            17:00 - 21:00
          </Typography>
        </Stack>
        <Box
          pl={4}
          ml={4}
          sx={{
            borderLeft: (theme) => `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h2">Praktisk info</Typography>
          <Typography>
            Sted for oppmøte: "Rådhuskaia" flytebrygge like ved Ålesund Cruise
            Terminal og Ålesund Bussterminal. Klikk her for å se sted for
            oppmøte i Google Maps.  Tidspunkt: MS Bruvik segler kl 17:00, så møt
            i god tid før dette!  Varighet: Turen varer en ca 4 timer. 
            Bekledning: Casual, ta gjerne med varme klær til å stå ute i.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Fredag;
