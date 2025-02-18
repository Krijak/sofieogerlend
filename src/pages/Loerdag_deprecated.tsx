import { Stack, Typography, Link } from "@mui/material";
import { StyledBox, StyledLeftSideStack, PraktiskInfoP } from "./Fredag";
import { Box, styled } from "@mui/system";
import SEBaat from "../../public/SEBaat.jpg";

const Loerdag = () => {
  return (
    <>
      <Stack alignItems={"center"} mt={10}>
        <Stack flexDirection={"row"}>
          <StyledLeftSideStack>
            <Typography variant="h2">LØRDAG</Typography>
            <Typography
              variant={"h1"}
              sx={{ fontSize: { xs: "1rem" } }}
              whiteSpace={"nowrap"}
            >
              30 / 08 / 25
            </Typography>
          </StyledLeftSideStack>
          <StyledBox>
            <Typography variant="h1" mb={15}>
              Bryllupsdagen
            </Typography>
          </StyledBox>
        </Stack>
        <Stack flexDirection={"row"}>
          <StyledLeftSideStack>
            <Typography
              variant="button"
              sx={{ color: (theme) => theme.palette.primary.main }}
              mb={1}
            >
              VIELSE
            </Typography>
            <Typography variant="h1" fontWeight={"bold"} whiteSpace={"nowrap"}>
              13 : 00
            </Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              GISKE KIRKE
            </Typography>
          </StyledLeftSideStack>
          <StyledBox>
            <PraktiskInfoP sx={{ marginBottom: { sm: 10, xs: 10 } }}>
              <Link href="https://maps.app.goo.gl/TfHGsWy8UKy9Mvbm8">
                Giske Kirke,  Giskevegen 121, 6052 Giske
              </Link>
              <br />
              <b>LØRDAG 30.08, kl 13:00</b>
              <br />
              Vielsen blir ved  vakre Giske Kirke.Det vil bli arrangert felles
              transport fra Ålesund sentrum.
            </PraktiskInfoP>
          </StyledBox>
        </Stack>
        <Stack flexDirection={"row"}>
          <StyledLeftSideStack>
            <Typography
              variant="button"
              sx={{ color: (theme) => theme.palette.primary.main }}
              mb={1}
            >
              BRYLLUPSFEST
            </Typography>
            <Typography variant="h1" fontWeight={"bold"} whiteSpace={"nowrap"}>
              14 : 30
            </Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              ØYGÅRDSHALLEN
            </Typography>
          </StyledLeftSideStack>
          <StyledBox>
            <PraktiskInfoP sx={{ marginBottom: { sm: 15, xs: 10 } }}>
              <Link href="https://maps.app.goo.gl/yoWSAJcg2W5mFSXd8">
                Øygardshallen, Sjøvegen 77, 6052 Giske
              </Link>
              <br />
              Etter vielsen drar vi over til Øygardshallen hvor den store
              bryllupsfesten skal være. Her vil det serveres noe lett bespisning
              ved ankomst.
            </PraktiskInfoP>
          </StyledBox>
        </Stack>
        <Stack flexDirection={"row"}>
          <StyledStyledLeftSideStack>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              14 : 30
            </Typography>
            <Typography>Lett servering</Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              15 : 00
            </Typography>
            <Typography>Leker</Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              16 : 00
            </Typography>
            <Typography>Bordsetting</Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              20 : 00
            </Typography>
            <Typography>Kaffe og kaker</Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              21 : 30
            </Typography>
            <Typography>Fest og moro</Typography>
            <Typography variant="h2" whiteSpace={"nowrap"}>
              02 : 00
            </Typography>
            <Typography>Busstransport til Ålesund sentrum</Typography>
          </StyledStyledLeftSideStack>
          <StyledBox>
            <Box
              ml={{ sm: 10, xs: 0 }}
              pl={{ sm: 4, xs: 0 }}
              style={{ maxWidth: "500px", minWidth: "300px" }}
            >
              <img alt="Erlend og Sofie på båt" src={SEBaat} width={"100%"} />
            </Box>
          </StyledBox>
        </Stack>
      </Stack>
    </>
  );
};

export default Loerdag;

const StyledStyledLeftSideStack = styled(StyledLeftSideStack)({
  marginBottom: "200px",
  p: {
    marginBottom: "20px",
    textAlign: "right",
  },
});
