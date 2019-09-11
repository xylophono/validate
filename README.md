# validate - vanilla js date validation function

### _View:_ https://xylophono.github.io/validate

_HTML:_ docs/index.html  
_Function:_ resources/js/validateDate.js  
_Tests (Jest):_ resources/js/validateDate.test.js  

```
 PASS  resources/js/validateDate.test.js
  √ Valid date returns true (3ms)
  √ Invalid date returns false (1ms)
  √ Feb 29th is handelled appropriately on leap years
  √ Anything outside of dd/mm/yyyy regex should be false (1ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.389s
Ran all test suites.
```