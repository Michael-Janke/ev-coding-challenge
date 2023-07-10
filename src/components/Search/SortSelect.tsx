import { FC } from "react";
import { SortTypes, useSortState } from "@/lib/hooks/useSortState";
import { Select } from "@chakra-ui/react";

export const SortSelect: FC = () => {
  const { sortValue, setSortValue } = useSortState();
  return (
    <Select
      placeholder="Sort"
      value={sortValue}
      variant="flushed"
      onChange={(event) => setSortValue(event.target.value as SortTypes)}
    >
      <option value={SortTypes.AddressAsc}>Address Ascending</option>
      <option value={SortTypes.AddressDesc}>Address Descending</option>
      <option value={SortTypes.PriceAsc}>Price Ascending</option>
      <option value={SortTypes.PriceDesc}>Price Descending</option>
    </Select>
  );
};
