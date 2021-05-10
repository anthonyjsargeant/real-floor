# European to US floor converter

---

## Overview
In some buildings in the USA, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

More information can be found [here](https://en.wikipedia.org/wiki/Storey#European_scheme).

## Task
In order to know which floor I am on, as a developer I would like to write a JavaScript function that takes a floor number in the American scheme and returns the floor number in the European scheme.

### Acceptance Criteria
- With the first floor being replaced by the ground floor, and the 13th floor being removed, floor numbers must move down to take their place.
- All floors above the 13th floor must move down by two to account for there being two omitted floors.
- Basement floors which are denoted by negative floor numbers, must stay the same as they would be in both schemes.

#### Examples
```
 1  =>  0
 0  =>  0
 5  =>  4
15  =>  13
-3  =>  -3
```

---

## Top Tips
To help get you started, a skeleton project has been setup with the necessary dependencies.

- Run the following command before starting:
```bash
npm install
```

- Be sure to check that everything is working before you write any code by running this command:
```bash
npm test
```
If all is well, you should see something similar to this output:
```
> jest

 PASS  src/index.test.js
  Converting the lift floor
    ✓ should return zero for the ground floor (3 ms)
    ✓ should return zero for the first floor

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.63 s, estimated 1 s
Ran all test suites.
```

- Make sure your code is tested! To this end, [Jest](https://jestjs.io/docs/getting-started) has been installed to run your unit tests.
