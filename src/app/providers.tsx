"use client";
import { theme } from "@chakra-ui/pro-theme";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const proTheme = extendTheme(theme);
const extenstion = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
};
const queryClient = new QueryClient();
const myTheme = extendTheme(extenstion, proTheme);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={myTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  );
}
