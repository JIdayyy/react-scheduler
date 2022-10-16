import { Flex } from "@chakra-ui/react";
import { Info } from "luxon";

const Weekdays = (): JSX.Element => (
    <Flex w="full">
        {Info.weekdays("short").map((weekDay, i) => (
            <Flex w={150} key={i}>
                <strong>{weekDay.slice(0, 2)}</strong>
            </Flex>
        ))}
    </Flex>
);

export default Weekdays;
