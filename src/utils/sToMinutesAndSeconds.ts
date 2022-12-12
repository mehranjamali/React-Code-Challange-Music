export function sToMinutesAndSeconds(totalSeconds: number) {

    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    function padTo2Digits(num: number) {
        const result = num.toString().padStart(2, '0')
        return result !== '00' ? result : '0';
    }

    // ✅ format as MM:SS
    const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    return result
}