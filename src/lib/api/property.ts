import useSWR from "swr";
import { z } from "zod";
import { jsonDelete, jsonPost, zodFetcher } from "./fetch";
import { useSearchState } from "../hooks/useSearchState";
import { useFilterState } from "../hooks/useFilterState";
import { SortTypes, useSortState } from "../hooks/useSortState";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

export const Property = z.object({
  name: z.string().optional(),
  price: z.union([z.number(), z.string()]),
  createdAt: z.coerce.date(),
  id: z.string(),
  floor: z.number().optional(),
  plotSize: z.union([z.number(), z.string()]).optional(),
  rooms: z.union([z.number(), z.string()]),
  address: z.string(),
  title: z.string().optional(),
  type: z.enum(["House", "house", "apartment"]),
});

export type Property = z.infer<typeof Property>;

const getProperties = zodFetcher(z.array(Property));

export type GetPropertiesParams = {
  search?: string;
};

const path = "/properties";

export const useGetProperties = () => {
  const swrResponse = useSWR<Property[]>(path, getProperties);
  const { searchValue } = useSearchState();
  const { filterValue } = useFilterState();
  const { sortValue } = useSortState();

  const filteredAndSortedData =
    swrResponse.data &&
    swrResponse.data
      .filter((property) => {
        if (searchValue) {
          return property.title
            ? property.title.toLowerCase().includes(searchValue.toLowerCase())
            : false;
        }
        return true;
      })
      .filter((property) => {
        if (filterValue) {
          return property.type
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }
        return true;
      })
      .sort((a, b) => {
        if (sortValue === SortTypes.AddressAsc) {
          if (!a.address && !b.address) {
            return 0;
          }
          if (!a.address) {
            return 1;
          }
          if (!b.address) {
            return -1;
          }
          return a.address.localeCompare(b.address);
        }

        if (sortValue === SortTypes.AddressDesc) {
          if (!a.address && !b.address) {
            return 0;
          }
          if (!a.address) {
            return 1;
          }
          if (!b.address) {
            return -1;
          }
          return b.address.localeCompare(a.address);
        }

        if (sortValue === SortTypes.PriceAsc) {
          return parseInt(a.price.toString()) - parseInt(b.price.toString());
        }

        if (sortValue === SortTypes.PriceDesc) {
          return parseInt(b.price.toString()) - parseInt(a.price.toString());
        }

        return 0;
      });

  return { ...swrResponse, data: filteredAndSortedData };
};

export const CreateProperty = Property.omit({ id: true, createdAt: true });
export type CreateProperty = z.infer<typeof CreateProperty>;

const createProperty = (url: string, { arg }: { arg: CreateProperty }) =>
  jsonPost(url, arg).then(Property.parse);

export const useCreateProperty = (
  config: SWRMutationConfiguration<Property, Error, typeof path, CreateProperty>
) => {
  const mutation = useSWRMutation(path, createProperty, config);
  return mutation;
};

export const DeleteProperty = Property.pick({ id: true });
export type DeleteProperty = z.infer<typeof DeleteProperty>;

const deleteProperty = (url: string, { arg }: { arg: DeleteProperty }) =>
  jsonDelete(`${url}/${arg.id}`).then(Property.parse);

export const useDeleteProperty = (
  config: SWRMutationConfiguration<Property, Error, typeof path, DeleteProperty>
) => {
  const mutation = useSWRMutation(path, deleteProperty, config);
  return mutation;
};
