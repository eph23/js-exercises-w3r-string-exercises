"use strict";

/* ******************************************** */
/* ANCHOR                    PROBLEM                   */
/* 
Write a JavaScript function to extract a specified number of characters from a string.

Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/
/* ******************************************** */

/* ANCHOR ================= SOLUTION 1================= */
console.log("===Solution 1===");

const truncate_string = function (str, StrLen) {
    let trunc = "";
    for (let i = 0; i < StrLen; i++) {
        trunc += str[i];
    }

    return trunc;
};
console.log(truncate_string("Robin Singh", 4));

/* ANCHOR ================= SOLUTION 2================= */
console.log("===Solution 2===");

const truncate_string_2 = function (str, StrLen) {
    return str.slice(0, StrLen);
};
console.log(truncate_string_2("Robin Singh", 4));
