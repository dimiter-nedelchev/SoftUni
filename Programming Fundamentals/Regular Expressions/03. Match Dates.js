function matchDates(input){

    const pattern= /\b(?<day>\d{2})(.|-|\/)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g

    let dates= pattern.exec(input);

    while(dates) {
        
        let day= dates.groups['day'];
        let month= dates.groups['month'];
        let year= dates.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        dates= pattern.exec(input);
    }

}
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])