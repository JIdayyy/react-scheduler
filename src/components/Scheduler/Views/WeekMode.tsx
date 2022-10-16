import { Flex } from "@chakra-ui/layout";
import { DateTime } from "luxon";
import React from "react";

type Props = {
    data: DateTime[];
    today: DateTime;
};

export default function WeekMode({ data, today }: Props): JSX.Element {
    return (
        <>
            {data.map((day) => (
                <Flex
                    bg={
                        day.toISO() === today.toISO()
                            ? "red.500"
                            : "transparent"
                    }
                    w={150}
                    h={150}
                    _hover={{ backgroundColor: "gray" }}
                    cursor="pointer"
                    border="2px solid white"
                >
                    {/* {day.toISODate()} */}
                    {day.weekdayLong} - {day.get("day")} - {day.monthLong}
                </Flex>
            ))}
        </>
    );
}
