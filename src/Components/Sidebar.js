import React from "react";
import { Box, Flex, Icon, useColorModeValue, Link } from "@chakra-ui/react";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const LinkItems = [
  { name: "0", icon: HiOutlineDesktopComputer },
  { name: "1", icon: HiOutlineDesktopComputer },
  { name: "2", icon: HiOutlineDesktopComputer },
];

export default function SimpleSidebar({ changeServer, children }) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent changeServer={changeServer} />
      <Box ml="8%" p="2" bg="black">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ changeServer, onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={"8%"}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="4"></Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} changeServer={changeServer}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ changeServer, icon, children, ...rest }) => {
  return (
    <Link
      onClick={() => {
        changeServer(children);
      }}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
