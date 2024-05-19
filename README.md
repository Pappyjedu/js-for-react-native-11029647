# js-for-react-native-11029647
# Array Manipulation and User Profiles

Two JavaScript scripts that show how to create user profiles and manipulate arrays are included in this repository.

## arrayManipulation.js
The function `formatArrayStrings` in this file accepts two arrays as arguments:
- An array of strings.
- A numerical array that `processArray` has processed.
Every string is altered by the function according to its matching number:
- If the number is even, capitalise the entire string.
- Should the number be odd, change the string to lowercase.

## userInfo.js
The function createUserProfiles in this file does the following:

Accepts an array from Task 2 along with the array of names that have been changed.

Yields an array of objects, each with the following properties: id (auto-incremented from 1), modifiedName, and originalName.

