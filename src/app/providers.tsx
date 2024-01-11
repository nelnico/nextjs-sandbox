"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";

const proTheme = extendTheme(theme);
const extenstion = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
};
const myTheme = extendTheme(extenstion, proTheme);

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={myTheme}>{children}</ChakraProvider>;
}
