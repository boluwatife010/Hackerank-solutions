function timeConversion(string) {
    let hours, minutes, second, period;
    hours = parseInt(string.slice(0, 2)) ;
    period = string.slice(8, 10); 
    minutes = string.slice(2, 5);
    second = string.slice(5,8);
    if (hours < 12 && period === 'PM') {
        hours += 12;
    }
    else if (hours === 12 && period == 'AM') {
        hours = 0;
    }
    else if (hours === 12 && period == 'PM') {
      hours = 12;
    }
    return `${hours}${minutes}${second}`;
}
console.log(timeConversion('12:40:22AM'));
/*
function timeConversion(string) {
    if (string === '12:00:00 AM') {
        return '00:00:00';
    }
    else if (string === '12:00:00 PM') {
        return '12:00:00';
    }
    else  {
        let converted;
       converted = Number(string);
    }
    return string;
}
console.log(timeConversion('07:05:42 AM'));
*/