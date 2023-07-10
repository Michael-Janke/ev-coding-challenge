import { useSearchParam } from "./useSearchParam";

export const useSearchState = () => {
  const searchKeyState = useSearchParam("search");

  return {
    searchValue: searchKeyState.value,
    setSearchValue: searchKeyState.setValue,
  };
};
