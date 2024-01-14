import dayjs from "dayjs";

const customDurationFormats = (locale, extendStr = '') => {
    if(locale === 'tr') {
        return {
            s: () => (`saniye ${extendStr}`),
            m: () => (`dakika ${extendStr}`),
            h: () => (`saat`)
        }
    }

    if(locale === 'en') {
        return {
            s: (n) => (n <= 1 ? `second ${extendStr}` : `seconds ${extendStr}`),
            m: (n) => (n <= 1 ? `minute ${extendStr}` : `minutes ${extendStr}`),
            h: (n) => (n <= 1 ? `hour` : `hours`),
        }
    }
};

export function formatSeconds(second, locale = 'tr', extendStr = ''){
    const formats = customDurationFormats(locale, extendStr);
    let secondsObject = dayjs.duration(second, 'seconds');

    if(second < 60)
        return secondsObject.format(`s [${formats.s(second)}]`);
    else if (second < 3600)
        return secondsObject.format(`m [${formats.m(second)}]`)
    else
        return secondsObject.format(`H [${formats.h(second)}] m [${formats.m(second)}]`);
}