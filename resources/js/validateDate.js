/**
 * Returns true/false if input is a valid dd/mm/yyyy string
 *  */ 
export default function(input) {
    
    //First we'll check the pattern is correct - only accepting 0-31/01-12/YYYY
    let regex = RegExp("^([0-2][0-9]|(3)[0-1])([\/])(((0)[0-9])|((1)[0-2]))([\/])([0-9]{4})$");
    if(!regex.test(input)) {
        return false;
    }

    let date = input.split('/');

    //Lets deal with the number of days in each month with an object that's keyed to the month number
    //This could also be an array if we trimmed the leading 0 etc when querying it, but I prefer this because it's more readable when trying to find a specific month...
    let months = {
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

    //If the month supplied doesn't correspond to a key in days then it's invalid
    // - This test is redundant now that the regex has been updated to better match months -
    // if(!days.hasOwnProperty(date[1])) {
    //     return false;
    // }

    //Is it a leap year? if so amend feb to 29 days
    if(new Date(date[2], 1, 29).getDate() === 29) {
        months['02'] = 29;
    }

    //So, if date[0] is > 0 and =< the days in the month it's valid, else invalid
    let day = parseInt(date[0], 10);
    if(day < 1 || day > months[date[1]]) { 
        return false;
    }
    
    return true;
}