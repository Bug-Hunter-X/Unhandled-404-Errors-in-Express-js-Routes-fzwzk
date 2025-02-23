# Unhandled 404 Errors in Express.js Routes

This repository demonstrates a common but easily overlooked error in Express.js applications: unhandled 404 errors.  When a route handler doesn't explicitly send a response, Express.js implicitly sends a 404 response, but without any additional information that can help in debugging.

The `bug.js` file shows an example of this error.  The `bugSolution.js` file provides a solution that adds more informative error handling.

## How to reproduce the bug

1.  Clone the repository.
2.  Run `npm install` to install Express.js.
3.  Run `node bug.js`. 
4.  Make a request to `/users/someInvalidID` (or a user ID that doesn't exist).
5.  Notice that you get a 404 response, but there's no additional information to indicate what went wrong.

## Solution

The `bugSolution.js` file demonstrates how to properly handle this scenario.  It explicitly sends a 404 response with a more informative message, along with better error handling for cases where the `userId` might not be a number.
