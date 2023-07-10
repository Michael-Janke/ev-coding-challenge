import { FC } from "react";
import Link from "next/link";
import { LogoSmall } from "./LogoSmall";
import { Box } from "@chakra-ui/react";

export const Header: FC = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      shadow="base"
      padding={4}
      zIndex="sticky"
      bg="white"
    >
      <div className="flex items-center justify-center">
        <Link href="/">
          <LogoSmall />
        </Link>
      </div>
    </Box>
  );
};
