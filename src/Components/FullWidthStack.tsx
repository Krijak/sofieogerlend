import { Stack, StackProps } from "@mui/material";

export const FullWidthStack = (props: StackProps) => {
  return (
    <Stack
      flexDirection={"row"}
      mt={5}
      flexWrap={"wrap"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: 5,
      }}
      {...props}
    >
      <Stack
        gap={4}
        maxWidth={"900px"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        flexDirection={"row"}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

export default FullWidthStack;
