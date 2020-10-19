//завдання 1
let cube = (a) => a * a * a;
console.log(cube(5));

//завдання 2
let numb = (a,b,c) => (a + b) / c;
console.log(numb(5, 7, 10));

//завдання 3 
let chooseDay = (numberDay) => {
    let dayOfWeek;
    switch(numberDay) {
        case 1:
            return dayOfWeek = `Понеділок`;
        case 2:
            return dayOfWeek = `Вівторок`;
        case 3:
            return dayOfWeek = `Середа`;
        case 4:
            return dayOfWeek = `Четвер`;
        case 5:
            return dayOfWeek = `П'ятниця`;
        case 6:
            return dayOfWeek = `Субота`;
        case 7:
            return dayOfWeek = `Неділя`;
    }
}
let dayOfWeek = chooseDay(5);
console.log(dayOfWeek);

//завдання 4

let sumFact;
function factorial (factNum) {
 if (factNum === 0) {
    sumFact = 1;
} else {
  sumFact = factNum * (factorial(factNum- 1));
}
  return sumFact;
}
console.log(factorial(9));

//завдання 5
let NumSec = (hours, minutes, seconds) => {
    let secInMinutes = 60;
    let secInHours = 3600;  
    let numInSeconds = hours * secInHours + minutes * secInMinutes + seconds;
    return numInSeconds;
}
let countSec = NumSec(5, 4, 30);
console.log(countSec);

//завдання 6
let getTime = (countOfSecond) => {
    let secondsInHours = 3600;
    let secondsInMinutes = 60;
    let hours = Math.floor(countOfSecond / secondsInHours);
    let minutes = Math.floor( (countOfSecond - hours * secondsInHours) / secondsInMinutes );
    let seconds = countOfSecond - hours * secondsInHours - minutes * secondsInMinutes;
    if(hours >= 24) {
        alert(`more than one day`)
    } else {
        return `${hours}:${minutes}:${seconds}`
    }
}
let time = getTime(90000);
console.log(time);