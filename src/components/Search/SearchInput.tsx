import { FC } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchState } from "@/lib/hooks/useSearchState";

export const SearchInput: FC = () => {
  const { searchValue, setSearchValue } = useSearchState();
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="grey.300" />
      </InputLeftElement>
      <Input
        placeholder="Search"
        bg="white"
        value={searchValue || ""}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </InputGroup>
  );
};
