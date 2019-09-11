import validateDate from './validateDate.js';

test('Valid date returns true', () => {
    expect(validateDate('01/02/2019')).toBeTruthy();
});

test('Invalid date returns false', () => {
    expect(validateDate('31/02/2019')).toBeFalsy();
    expect(validateDate('01/19/2019')).toBeFalsy();
});

test('Feb 29th is handelled appropriately on leap years', () => {
    expect(validateDate('29/02/2000')).toBeTruthy();
    expect(validateDate('29/02/2001')).toBeFalsy();
});

test('Anything outside of dd/mm/yyyy regex should be false', () => {
    expect(validateDate('1/1/19')).toBeFalsy();
    expect(validateDate('01-01-2000')).toBeFalsy();
    expect(validateDate('hello')).toBeFalsy();
});