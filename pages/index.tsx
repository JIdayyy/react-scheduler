import React from "react";
import { Flex } from "@chakra-ui/react";
import Scheduler from "@components/Scheduler";
import MainLayout from "@components/Layouts/MainLayout";

const Home = (): JSX.Element => {
    return (
        <Flex direction="column" w="full" h="full">
            {/* <Weekdays /> */}
            <Scheduler />
        </Flex>
    );
};

Home.Layout = MainLayout;

export default Home;
