import { Flex, Divider } from "@chakra-ui/layout";
import { DateTime } from "luxon";
import React from "react";

type Props = {
    data: DateTime[];
    events: {
        id: string;
        title: string;
        start: DateTime;
        end: DateTime;
    }[];
};

const HOURS = Array(12)
    .fill(null)
    .map((_, i) => {
        const hour = i + 1;
        return hour < 3 ? `0${hour + 7}` : hour + 7;
    });

export default function DayMode({ data, events }: Props): JSX.Element {
    const datesWithEvents = data.map((date) => {
        const eventsForDate = events.filter((event) => {
            return event.start.hasSame(date, "day");
        });

        return {
            date,
            events: eventsForDate,
        };
    });

    console.log(datesWithEvents);

    return (
        <>
            {datesWithEvents.map((day) => (
                <Flex
                    w="full"
                    h="full"
                    cursor="pointer"
                    border="2px solid white"
                    flexDir="column"
                >
                    {day.date.weekdayLong} - {day.date.get("day")} -
                    {day.date.monthLong}
                    {HOURS.map((hour) => (
                        <Flex
                            flexDir="column"
                            _hover={{ backgroundColor: "gray" }}
                        >
                            <Flex p={5}>{hour}</Flex>
                            {
                                day.events.filter((event) => {
                                    return event.start.hasSame(
                                        day.date.set({ hour: +hour }),
                                        "hour",
                                    );
                                })[0]?.title
                            }
                            <Divider />
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    );
}
