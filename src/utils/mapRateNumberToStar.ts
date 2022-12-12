import { StarType } from "../helper/types/starForUiType";

export const mapRateNumberToStar = (rate: number) => {
    let result: StarType[] = [];
    let i;

    for (i = 1; i <= 5; i++) {
        result.push({ id: i, fill: i <= rate });
    }
    return result;
};
