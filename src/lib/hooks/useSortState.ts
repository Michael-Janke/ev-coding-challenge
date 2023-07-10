import { useTypedSearchParam } from "./useTypedSearchParam";

export const SortTypes = {
  AddressAsc: "address-asc",
  AddressDesc: "address-desc",
  PriceAsc: "price-asc",
  PriceDesc: "price-desc",
} as const;
export type SortTypes = (typeof SortTypes)[keyof typeof SortTypes];

export const useSortState = () => {
  const sortKeyState = useTypedSearchParam(
    "sort",
    Object.values(SortTypes),
    ""
  );

  return {
    sortValue: sortKeyState.value,
    setSortValue: sortKeyState.setValue,
  };
};
