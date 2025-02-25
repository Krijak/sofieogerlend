import { Box, Stack, styled } from "@mui/material";
import SofieErlend from "../../public/SofieErlend.png";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <StyledStack
      className={isLoading ? "loader" : "loader-fade-out"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Box>
        <img src={SofieErlend} alt="Lukk sidemeny" width={"150px"} />
      </Box>
    </StyledStack>
  );
};

export default Loading;

const StyledStack = styled(Stack)({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "999999",
});
