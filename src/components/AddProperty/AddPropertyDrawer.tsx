import {
  CreateProperty,
  Property,
  useCreateProperty,
} from "@/lib/api/property";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  FormLabel,
  Select,
  InputGroup,
  InputRightElement,
  DrawerFooter,
  Button,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";

import { FC, useState } from "react";

interface AddPropertyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPropertyDrawer: FC<AddPropertyDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [newProperty, setNewProperty] = useState<Partial<CreateProperty>>({});
  const { trigger, isMutating, error } = useCreateProperty({
    onSuccess: onClose,
  });

  const parsedNewProperty = CreateProperty.safeParse(newProperty);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">New Property</DrawerHeader>

        <DrawerBody>
          <Stack spacing={4}>
            <Text as="b" size="sm">
              Property Details
            </Text>
            <Box>
              <FormLabel htmlFor="title">Property Title</FormLabel>
              <Input
                id="title"
                value={newProperty.title}
                onChange={(event) =>
                  setNewProperty((property) => ({
                    ...property,
                    title: event.target.value,
                  }))
                }
              />
            </Box>

            <Box>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                id="address"
                onChange={(event) =>
                  setNewProperty((property) => ({
                    ...property,
                    address: event.target.value,
                  }))
                }
              />
            </Box>

            <Box>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Select
                id="type"
                value={newProperty.type}
                placeholder="Select property type"
                onChange={(event) =>
                  setNewProperty((property) => ({
                    ...property,
                    type: event.target.value as Property["type"],
                  }))
                }
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </Select>
            </Box>

            <Box>
              <FormLabel htmlFor="price">Price</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  onChange={(event) =>
                    setNewProperty((property) => ({
                      ...property,
                      price: event.target.value,
                    }))
                  }
                />
                <InputRightElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                >
                  €
                </InputRightElement>
              </InputGroup>
            </Box>

            <Box>
              <FormLabel htmlFor="rooms">Rooms</FormLabel>
              <Input
                type="number"
                id="rooms"
                onChange={(event) =>
                  setNewProperty((property) => ({
                    ...property,
                    rooms: event.target.value,
                  }))
                }
              />
            </Box>

            {newProperty.type === "house" && (
              <Box>
                <FormLabel htmlFor="plotsize">Plot Size</FormLabel>

                <InputGroup>
                  <Input
                    type="number"
                    onChange={(event) =>
                      setNewProperty((property) => ({
                        ...property,
                        plotSize: event.target.value,
                      }))
                    }
                  />
                  <InputRightElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="0.8em"
                  >
                    m²
                  </InputRightElement>
                </InputGroup>
              </Box>
            )}

            {newProperty.type === "apartment" && (
              <Box>
                <FormLabel htmlFor="floor">Floor</FormLabel>
                <Input
                  type="number"
                  id="floor"
                  onChange={(event) =>
                    setNewProperty((property) => ({
                      ...property,
                      floor: parseInt(event.target.value) || 0,
                    }))
                  }
                />
              </Box>
            )}
            {!parsedNewProperty.success &&
              parsedNewProperty.error?.issues.map((error) => (
                <Text key={error.path + error.message} color="red.500">
                  {error.path} {error.message}
                </Text>
              ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            isDisabled={!parsedNewProperty.success}
            colorScheme="blue"
            isLoading={isMutating}
            onClick={() =>
              parsedNewProperty.success && trigger(parsedNewProperty.data)
            }
          >
            Submit
          </Button>
        </DrawerFooter>
        {error && <Text color="red.500">{error.message}</Text>}
      </DrawerContent>
    </Drawer>
  );
};
