"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: React.PropsWithChildren) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
