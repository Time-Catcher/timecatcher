
export function minutesToDate(minutes:number):Date{
const time = new Date();

    const second =60*minutes;
    time.setSeconds(time.getSeconds()+second);
    return time;
}