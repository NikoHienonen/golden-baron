import "@fontsource/smooch";
import "@fontsource-variable/roboto-mono";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  gold: {
    main: "#B0903D",
    light: "#D5BF85",
    dark: "#6A5724",
  },
  black: {
    main: "#0D160B",
  },
  offWhite: {
    main: "#E9E3E6",
  },
  green: {
    main: "#17b890",
  },
  red: {
    main: "#F97068",
  },
};

const fonts = {
  heading: `'Smooch', 'cursive'`,
  body: `'Roboto Mono Variable', 'monospace'`,
};

export const theme = extendTheme({ colors, fonts });
