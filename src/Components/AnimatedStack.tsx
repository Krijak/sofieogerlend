import { Stack, StackProps, styled } from "@mui/material";

export const AnimatedStack = (props: StackProps) => {
  return (
    <StyledStack {...props} className="apply-scroll-animation">
      {props.children}
    </StyledStack>
  );
};

export default AnimatedStack;

const StyledStack = styled(Stack)({
  "@keyframes enter-animation": {
    "0%": {
      transform: "translateY(30px)",
      opacity: " 0",
    },
    "100%": {
      transform: "translateY(0)",
      opacity: "1",
    },
  },

  " @media (prefers-reduced-motion: no-preference)": {
    ".scroll-animation": {
      animation: "enter-animation 1s 0.8",
    },
  },
});
