import { useTypedSearchParam } from "./useTypedSearchParam";

export const Filter = {
  Apartment: "apartment",
  House: "house",
} as const;
export type Filter = (typeof Filter)[keyof typeof Filter];

export const useFilterState = () => {
  const sortKeyState = useTypedSearchParam("filter", Object.values(Filter), "");

  return {
    filterValue: sortKeyState.value,
    setFilterValue: sortKeyState.setValue,
  };
};
