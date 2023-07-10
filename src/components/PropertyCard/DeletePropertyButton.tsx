import { Property, useDeleteProperty } from "@/lib/api/property";
import { CloseButton } from "@chakra-ui/react";
import { FC } from "react";

interface DeletePropertyButtonProps {
  id: Property["id"];
}

export const DeletePropertyButton: FC<DeletePropertyButtonProps> = ({ id }) => {
  const { trigger, isMutating } = useDeleteProperty({});
  return (
    <CloseButton
      isDisabled={isMutating}
      size="md"
      margin="-2"
      onClick={() => trigger({ id })}
    />
  );
};
