import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  heroSection: {
    // background: ` linear-gradient(rgba(121, 80, 242,0.6),rgba(121, 80, 242,0.6)), url("/images/hero-bg.jpg") no-repeat center / cover`,
    color: theme.white,
    position: "relative",
  },

  inputsContainer: {
    background: theme.white,
    borderRadius: theme.radius.sm,
    color: theme.black,
    height: 100,
    justifyContent: "center",
    display: "flex",
  },
}));
