"use client";

import { Header } from "@/components/Header";
import { PropertyList } from "@/components/PropertyList";
import { Search } from "@/components/Search";
import { Box, Button, Stack, StackDivider } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight="100vh"
    >
      <Header />
      <Box
        as="main"
        flex={1}
        width={"100%"}
        display="flex"
        flexDir={"column"}
        bg="gray.100"
        overflow="hidden"
      >
        <Box height={{ base: 0, md: 68 }} shadow="base" />
        <Stack
          flex={1}
          padding={{ base: 4, md: 8 }}
          spacing={8}
          divider={<StackDivider />}
        >
          <Search />
          <PropertyList />
        </Stack>
      </Box>
    </Box>
  );
}
