import { useGetProperties } from "@/lib/api/property";
import {
  Card,
  Grid,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { PropertyCard } from "../PropertyCard";
import classNames from "classnames";

interface PropertyListProps {}

export const PropertyList: FC<PropertyListProps> = () => {
  const { data: properties, error, isLoading } = useGetProperties();
  console.log("properties", isLoading);
  if (error) {
    return <Text>Error fetching: {JSON.stringify(error)}</Text>;
  }
  if (isLoading) {
    <Grid gap={2} autoFlow="row dense">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Grid>;
  }
  if (!properties) {
    return <Text>Loading</Text>;
  }
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(360px, 1fr))"
    >
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </SimpleGrid>
  );
};
