"use strict";

/* ******************************************** */
/* ANCHOR                    PROBLEM                   */
/* 
Write a JavaScript function to check whether a string is blank or not.

Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
*/
/* ******************************************** */

/* ANCHOR ================= SOLUTION 1================= */
console.log("===Solution 1===");

const is_Blank = function (str) {
    return str.length < 1;
};

console.log(is_Blank(""));
console.log(is_Blank("abc"));

/* ANCHOR ================= SOLUTION 2================= */
console.log("===Solution 1===");

const is_Blank_2 = function (str) {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(is_Blank_2(""));
console.log(is_Blank_2("abc"));

/* ANCHOR ================= SOLUTION 3================= */
console.log("===Solution 3===");

const is_Blank_3 = function (str) {
    let strNew = str.trim();
    if (strNew.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(is_Blank_3(""));
console.log(is_Blank_3("abc"));
