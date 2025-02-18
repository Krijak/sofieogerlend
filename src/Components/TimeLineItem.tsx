import { PropsWithChildren, ReactNode } from "react";
import { Box, Stack, styled } from "@mui/material";

type TimelineItemType = {
  header: ReactNode;
  isLast?: boolean;
} & PropsWithChildren;

export const TimeLineItem = ({
  header,
  isLast,
  children,
}: TimelineItemType) => {
  return (
    <Stack flexDirection={"row"}>
      <Stack whiteSpace={"nowrap"} paddingRight={2} marginLeft={-2}>
        <Dot />
        {!isLast && <Line />}
      </Stack>
      <Box>
        <Box>{header}</Box>
        <Box>{children}</Box>
      </Box>
    </Stack>
  );
};

export default TimeLineItem;

const Dot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  marginLeft: "-2px",
  marginBottom: "4px",
  marginTop: "4px",
}));

const Line = styled("span")({
  borderLeft: "1px solid",
  borderColor: "#56012e33",
  height: "calc(100% - 4px)",
});
