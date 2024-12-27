# MongoDB $inc operator bug
This repository demonstrates a bug related to the usage of the `$inc` operator in MongoDB update operations. The issue occurs when attempting to decrement a field's value using `$inc` when the current value is 0.  The `$inc` operator will not update the document if the current value is 0 and the increment is negative.

## Bug Description
The bug is demonstrated in `bug.js`. The `updateOne` operation attempts to decrement the `quantity` field by 1. If the `quantity` is 0 or less, the operation fails to update the document.

## Solution
The solution is provided in `bugSolution.js`. The solution uses the `$max` operator to ensure that the quantity doesn't go below 0.  If quantity is less than or equal to 0 it will not be updated. If quantity is above 0, it will be decreased by 1.
