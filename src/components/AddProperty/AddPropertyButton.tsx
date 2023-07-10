import { Button, useDisclosure } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import { AddPropertyDrawer } from "./AddPropertyDrawer";

export const AddPropertyButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        size="md"
        bg="red.500"
        color="white"
        onClick={onOpen}
      >
        Add Property
      </Button>
      <AddPropertyDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
