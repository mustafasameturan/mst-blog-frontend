import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/tr';
import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export function formatDate(date, locale = 'tr', format = "DD.MM.YYYY HH:mm"){
    dayjs.locale(locale);
    return dayjs.utc(date).tz(userTimeZone).format(format)
};

