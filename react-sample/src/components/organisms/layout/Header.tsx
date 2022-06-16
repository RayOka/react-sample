import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";

import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), [navigate]);
  const onClickMyPage = useCallback(() => navigate("/users"), [navigate]);
  const onClickSetting = useCallback(() => {}, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickMyPage}>マイページ</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickMyPage={onClickMyPage}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
