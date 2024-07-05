export type DialValue = 1 | 2

export const getDialTime = (lunarDial: DialValue, earthDial: DialValue, solarDial: DialValue): number => {
    let total = lunarDial + earthDial + solarDial;

    if (solarDial === 1) {
        total -= earthDial;
    } else {
        if (earthDial === 2) {
            return 6;
        }

        total += earthDial + 2;
    }

    if (lunarDial === 1) {
        total -= 2;
    } else {
        total = Math.floor(total / 2);
    }


    return total;
}
export const getJupiterianHourName = (hour: number): string => {
    if (hour >= 0 && hour <= 2) {
        return 'mortin';
    } else if (hour === 3 || hour === 4) {
        return 'aprenoon';
    } else if (hour === 5) {
        return 'soirning';
    } else if (hour === 6) {
        return 'nuight';
    } else {
        throw new Error('Invalid hour');
    }
}

export const getHour  = (lunarDial: DialValue, earthDial: DialValue, solarDial: DialValue): string =>{
    const hour = getDialTime(lunarDial, earthDial, solarDial)
    return getJupiterianHourName(hour)
}