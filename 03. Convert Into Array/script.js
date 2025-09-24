"use strict";

/* ******************************************** */
/* ANCHOR                    PROBLEM                   */
/* 
Write a JavaScript function to split a string and convert it into an array of words.

Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/
/* ******************************************** */

/* ANCHOR ================= SOLUTION 1================= */
console.log("===Solution 1===");

const string_to_array = function (str) {
    return str.trim().split(" ");
};

console.log(string_to_array("Robin Singh"));

/* ANCHOR ================= SOLUTION 1================= */
console.log("===Solution 2===");

const string_to_array_2 = function (str) {
    let arr = [];

    let word = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word = word + str[i];
        } else if (str[i] === " ") {
            arr.push(word);
            word = "";
        }
    }

    if (word.length > 0) {
        arr.push(word);
    }

    return arr;
};

console.log(string_to_array_2("Robin Singh"));
