import { Box, Stack, styled } from "@mui/material";
import FlowerBlack from "../../public/FlowerBlack.png";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <StyledStack
      className={isLoading ? "loader" : "loader-fade-out"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Box width={{ xs: "50px", sm: "80px" }}>
        <img src={FlowerBlack} alt="Lukk sidemeny" width={"100%"} />
      </Box>
    </StyledStack>
  );
};

export default Loading;

const StyledStack = styled(Stack)(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "999999",
  backgroundColor: theme.palette.background.default,
}));
