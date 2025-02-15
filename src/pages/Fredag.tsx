import { Box, Link, Stack, styled, Typography } from "@mui/material";
import MSBruvik from "../../public/MSBruvik.jpg";

const Fredag = () => {
  return (
    <>
      <Stack flexDirection={"row"} sx={{ marginTop: 20 }}>
        <StyledLeftSideStack>
          <Typography variant="h2">FREDAG</Typography>
          <Typography
            variant={"h1"}
            sx={{ fontSize: { xs: "1.2rem", sm: "1.6rem" } }}
            whiteSpace={"nowrap"}
          >
            29 / 08 / 25
          </Typography>
        </StyledLeftSideStack>
        <StyledBox>
          <Typography variant="h1" mb={3}>
            FJORD CRUISE - MS BRUVIK
          </Typography>
          <Typography maxWidth={"600px"} marginBottom={{ sm: 20, xs: 15 }}>
            Fredag ettermiddag drar vi ut på fjord cruise med MS Bruvik innover
            fantastiske Hjørundfjorden. Her vil man kunne se kremen av Sunnmøre
            - både fjord og fjell. Dette blir en fin anledning til å bli bedre
            kjent med bryllupsgjestene og vi ønsker at så mange som mulig tar
            seg tid til dette. Det blir servert en velkomstdrink og noe lett
            bespisning underveis. Båten har to salonger, bar på øvre dekk og et
            stort utedekk akter. Vi håper så mange som mulig vil bli med oss på
            turen!
          </Typography>
        </StyledBox>
      </Stack>
      <Stack flexDirection={"row"}>
        <StyledLeftSideStack>
          <Typography variant="h2" whiteSpace={"nowrap"}>
            17:00 - 21:00
          </Typography>
        </StyledLeftSideStack>
        <StyledBox>
          <Typography variant="h2" mb={1}>
            Praktisk info
          </Typography>
          <PraktiskInfoP>
            Sted for oppmøte: "Rådhuskaia" flytebrygge like ved Ålesund Cruise
            Terminal og Ålesund Bussterminal.{" "}
            <Link href="https://www.google.com/maps/place/Cruise+Service+Fjord+Tours/@62.4702321,6.1549915,383m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4616db8adff3c02f:0x8c2a9a50ff2ca49a!8m2!3d62.4702321!4d6.1549915!16s%2Fg%2F11svh66vns?entry=tts&g_ep=EgoyMDI1MDEyMi4wIPu8ASoASAFQAw%3D%3D">
              Klikk her for å se sted for oppmøtested i Google Maps.
            </Link>
          </PraktiskInfoP>
          <PraktiskInfoP>
            <b>Tidspunkt:</b> MS Bruvik segler kl 17:00, så møt i god tid før
            dette!
          </PraktiskInfoP>
          <PraktiskInfoP>
            <b>Varighet:</b> Turen varer en ca 4 timer.
          </PraktiskInfoP>
          <Typography sx={{ marginBottom: { sm: 30 } }}>
            <b>Bekledning:</b> Casual, ta gjerne med varme klær til å stå ute i.
          </Typography>
        </StyledBox>
      </Stack>
      <Stack flexDirection={"row"}>
        <Box sx={{ width: "150px", display: { xs: "none", sm: "block" } }} />
        <Stack
          alignItems={"flex-end"}
          sx={{
            width: { sm: "700px" },
            marginTop: { sm: "-150px" },
            paddingTop: { xs: 10 },
          }}
        >
          <Box
            ml={{ sm: 4, xs: 2 }}
            pl={4}
            style={{ maxWidth: "500px", minWidth: "300px" }}
          >
            <img alt="MS Bruvik" src={MSBruvik} width={"100%"} />
            <Typography width={"300px"} mt={3}>
              MS «Bruvik» er en av Norges best bevarte fjordpassasjerbåter,
              bygget i 1949 ved Glommen Mekaniske Verksted i Fredrikstad. Båten
              har plass til 153 passasjerer og tilbyr nostalgiske
              fjordopplevelser i vakker sunnmørsk natur. Mannskapet deler gjerne
              sin lokalkunnskap og båtens historie med passasjerene.{" "}
              <Link href="https://www.cruise-service.no/bruvik">
                Les mer om MS Bruvik her.
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Fredag;

const StyledLeftSideStack = styled(Stack)({
  minWidth: "100px",
  maxWidth: "100px",
  alignItems: "flex-end",
});

const StyledBox = styled(Stack)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  marginLeft: theme.spacing(4),
  borderLeft: "1px solid",
  borderColor: theme.palette.primary.main,
}));

const PraktiskInfoP = styled(Typography)(({ theme }) => ({
  maxWidth: "400px",
  marginBottom: theme.spacing(2),
}));
