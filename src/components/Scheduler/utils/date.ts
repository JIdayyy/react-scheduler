import { DateTime } from "luxon";

export const getDaysInMonthMode = (date: DateTime): DateTime[] => {
    return Array(date.daysInMonth)
        .fill(null)
        .map((_, i) => date.set({ day: 1 }).plus({ days: i }));
};

export const getMonthsInYearMode = (date: DateTime): DateTime[] =>
    Array(12)
        .fill(null)
        .map((_, i) => date.startOf("year").plus({ months: i }));

export const getDaysInWeekMode = (date: DateTime): DateTime[] =>
    Array(7)
        .fill(null)
        .map((_, i) => date.startOf("week").plus({ days: i }));

export const getDaysInDayMode = (date: DateTime): DateTime[] =>
    Array(1)
        .fill(null)
        .map((_, i) => date.startOf("day").plus({ days: i }));

export const getYearsInDecadeMode = (date: DateTime): DateTime[] => {
    const startYear = Math.floor(date.year / 10) * 10 - 1;
    return Array(12)
        .fill(null)
        .map((_, i) => date.set({ year: startYear + i }).startOf("year"));
};

export const getDecadeModeTitle = (date: DateTime): string => {
    const startYear = Math.floor(date.year / 10) * 10 - 1;
    return `${startYear}-${startYear + 11}`;
};

export const roundTen = (x: number): number => Math.floor(x / 10) * 10;

export const getDifferenceByMode = (mode: Mode): Record<string, unknown> =>
    mode === Mode.MONTH
        ? { months: 1 }
        : mode === Mode.DAY
        ? { days: 1 }
        : mode === Mode.WEEK
        ? { days: 7 }
        : { days: 0 };

export const getNextMode /* Mode => Mode */ = (mode: Mode): Mode => {
    const nextModeMap = {
        [Mode.MONTH]: Mode.WEEK,
        [Mode.WEEK]: Mode.DAY,
        [Mode.DAY]: Mode.MONTH,
    };

    return nextModeMap[mode];
};

export enum Mode {
    MONTH = "MONTH",
    WEEK = "WEEK",
    DAY = "DAY",
}
