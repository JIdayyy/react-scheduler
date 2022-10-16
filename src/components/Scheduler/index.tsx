import { Button, Flex } from "@chakra-ui/react";
import { DateTime, DateTime as DT } from "luxon";
import { useCallback, useEffect, useState } from "react";
import {
    getDaysInDayMode,
    getDaysInMonthMode,
    getDaysInWeekMode,
    getDifferenceByMode,
    getNextMode,
    Mode,
} from "./utils/date";
import DayMode from "./Views/DayMode";
import MonthMode from "./Views/MonthMode";
import WeekMode from "./Views/WeekMode";

const EVENTS = [
    {
        id: "1",
        title: "Vélo 20km",
        start: DT.fromJSDate(new Date()).startOf("day").set({ hour: 9 }),
        end: DT.fromJSDate(new Date()).startOf("day").set({ hour: 10 }),
    },
    {
        id: "2",
        title: "Piscine 10 x 100m",
        start: DT.fromJSDate(new Date()).startOf("day").set({ hour: 11 }),
        end: DT.fromJSDate(new Date()).startOf("day").set({ hour: 12 }),
    },
];

export default function Scheduler(): JSX.Element {
    const today = DT.fromJSDate(new Date()).startOf("day");
    const [mode, setMode] = useState(Mode.MONTH);
    const [dates, setDates] = useState<DateTime[]>([]);
    const [cursorDate, setCursorDate] = useState(today);

    useEffect(() => {
        if (mode === Mode.MONTH) {
            setDates(getDaysInMonthMode(cursorDate));
        }

        if (mode === Mode.DAY) {
            setDates(getDaysInDayMode(cursorDate));
        }

        if (mode === Mode.WEEK) {
            const days = getDaysInWeekMode(cursorDate);
            console.log(days);
            setDates(days);
        }
    }, [cursorDate, mode]);

    const onClickPrev = useCallback(() => {
        setCursorDate(cursorDate.minus(getDifferenceByMode(mode)));
    }, [setCursorDate, mode, cursorDate]);

    const onClickSwitch = useCallback(() => {
        setMode(getNextMode(mode));
    }, [setMode, getNextMode, mode]);

    const onClickNext = useCallback(() => {
        setCursorDate(cursorDate.plus(getDifferenceByMode(mode)));
    }, [setCursorDate, mode, cursorDate]);

    const ComponentByMode = {
        [Mode.MONTH]: MonthMode,
        [Mode.DAY]: DayMode,
        [Mode.WEEK]: WeekMode,
    };

    return (
        <Flex
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="row"
            flexWrap="wrap"
            w="full"
            h="full"
        >
            {ComponentByMode[mode]({
                data: dates,
                today: today,
                events: EVENTS,
            })}

            <Button onClick={onClickNext}>NEXT</Button>
            <Button onClick={onClickPrev}>PREV</Button>
            <Button onClick={onClickSwitch}>Switch</Button>
        </Flex>
    );
}
