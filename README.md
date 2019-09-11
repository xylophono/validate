# validate - vanilla js date validation function

### _View:_ https://xylophono.github.io/validate

_HTML:_ docs/index.html  
_Function:_ resources/js/validateDate.js  
_Tests (Jest):_ resources/js/validateDate.test.js  

```
 PASS  resources/js/validateDate.test.js
  √ Valid date returns true (4ms)
  √ Invalid date returns false
  √ Feb 29th is handelled appropriately on leap years (1ms)
  √ Anything outside of dd/mm/yyyy regex should be false

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.632s
Ran all test suites.
```