import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/tr';

dayjs.extend(utc);
dayjs.extend(timezone);

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const formatDate = (date, locale = 'tr', format = "DD.MM.YYYY HH:mm") => {
    dayjs.locale(locale);
    return dayjs.utc(date).tz(userTimeZone).format(format)
};