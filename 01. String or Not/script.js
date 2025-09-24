"use strict";

/* ******************************************** */
/* TODO                    PROBLEM                   */
/* Write a JavaScript function to check whether an 'input' is a string or not.

Test Data:
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false */
/* ******************************************** */

/* ANCHOR ================= SOLUTION 1================= */
console.log("===Solution-1===");

const is_string = function (input) {
    if (typeof input === "string") {
        return true;
    } else {
        return false;
    }
};

console.log(is_string("w3resource"));
console.log(is_string([1, 2, 4, 0]));

/* ANCHOR ================= SOLUTION 2================ */
console.log("===Solution-2===");

const is_string_2 = function (input) {
    return typeof input === "string";
};

console.log(is_string_2("w3resource"));
console.log(is_string_2([1, 2, 4, 0]));

/* ANCHOR ================= SOLUTION 3================ */
console.log("===Solution-3===");

const is_string_3 = function (input) {
    return Object.prototype.toString.call(input) === "[object String]";
};

console.log(is_string_3("w3resource"));
console.log(is_string_3([1, 2, 4, 0]));
