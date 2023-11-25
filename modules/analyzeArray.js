function analyzeArray(numArray) {
    const min = (() => {
        let min = numArray[0];
        for (let num of numArray) min = Math.min(min, num);
        return min;
    })();

    const max = (() => {
        let max = numArray[0];
        for (let num of numArray) max = Math.max(max, num);
        return max;
    })();

    const average = (() => {
        return Math.floor((min + max) / 2);
    })();

    const length = (() => {
        return numArray.length;
    })();

    return {
        min,
        max,
        average,
        length
    };
}

export default analyzeArray;