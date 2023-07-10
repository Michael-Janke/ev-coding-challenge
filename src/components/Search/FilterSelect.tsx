import { FC } from "react";
import { Select } from "@chakra-ui/react";
import { Filter, useFilterState } from "@/lib/hooks/useFilterState";

export const FilterSelect: FC = () => {
  const { filterValue, setFilterValue } = useFilterState();
  return (
    <Select
      placeholder="Filter"
      value={filterValue}
      variant="flushed"
      onChange={(event) => setFilterValue(event.target.value as Filter)}
    >
      <option value={Filter.Apartment}>Apartment</option>
      <option value={Filter.House}>House</option>
    </Select>
  );
};
