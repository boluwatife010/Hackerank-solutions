function dayOfProgrammer (year) {
let addedLeap = 244;
let addedYear = 243;
let date = 26;
let newLeapDate = 256 - addedLeap;
let newDateYear = 256 - addedYear;
if (year < 1918 ) {
    year % 4 === 0;
    return `${newLeapDate}.${'09'}.${year}`;
}
else if (year === 1918) {
return `${date}.${'09'}.${year.toString()}`;
}
else if (year > 1918) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${newLeapDate}.${'09'}.${year}`;
    }
    else {
        return `${newDateYear}.${'09'}.${year}`;
    }
}
}
console.log(dayOfProgrammer(1918));
/*
Leap year : if divisible by 4 and not 100, if divisible by 400.
The function above is expected to return the full date.
calculating the total number of months if leap year february is 29 days then subtract 
from the 256th day to get the day of the programmer.
*/

/*
function dayOfProgrammer(year) {
    // Write your code here
    let date = 0;
    let month = "09";
    if(year == 1918){
        date = 26;
    }else if(year < 1918){
        if(year % 4 == 0){
            date = 12;
        }else{
            date = 13;
        }
    }else{
        if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
            date = 12;
        }else{
            date = 13;
        }
    }
    return `${date}.${month}.${year}`;
}

*/