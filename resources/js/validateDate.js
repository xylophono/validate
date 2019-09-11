export default function(date) {
    
    //First we'll check the pattern is correct - only accepting dd/mm/yyyy
    let regex = RegExp("^([0-3][0-9])([\/])([0-1][0-9])([\/])([0-9]{4})$");
    if(!regex.test(date)) {
        return false;
    }

    date = date.split('/');

    //Lets deal with the number of days in each month with an object that's keyed to the month number
    //This could also be an array if we trimmed the leading 0 etc when querying it, but I prefer this because it's easier to find september when they're explicit pairs...
    let days = {
        '01': 31,
        '02': 28,
        '03': 31,
        '04': 30,
        '05': 31,
        '06': 30,
        '07': 31,
        '08': 31,
        '09': 30,
        '10': 31,
        '11': 30,
        '12': 31
    };

    //Is it a leap year? if so amend feb to 29 days
    if(new Date(date[2], 1, 29).getDate() === 29) {
        days['02'] = 29;
    }

    //So, if date[0] is > 0 and =< the days in the month it's valid, else invalid
    let day = parseInt(date[0]);
    if(day < 1 || day > days[date[1]]) { 
        return false;
    }
    
    return true;
}