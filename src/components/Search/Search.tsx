import { FC } from "react";
import { SortSelect } from "./SortSelect";
import { Box, Button, HStack, Hide, Show } from "@chakra-ui/react";
import { FilterSelect } from "./FilterSelect";
import { SearchInput } from "./SearchInput";
import { AddPropertyButton } from "../AddProperty";

export const Search: FC = () => {
  return (
    <HStack spacing={4} justify="flex-start" shouldWrapChildren wrap="wrap">
      <SearchInput />
      <FilterSelect />
      <SortSelect />
      <AddPropertyButton />
    </HStack>
  );
};
