function daysInMonth(month, year){

    let days= (year, month) => {
       return new Date (year, month, 0).getDate();
    }

    let numberOfDays = days(year,month);

    console.log(numberOfDays)

}
daysInMonth(2, 2021)