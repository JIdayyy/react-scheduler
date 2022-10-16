import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function MainLayout({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <Flex w="100vw" h="100vh">
            {children}
        </Flex>
    );
}
