"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let num;
let str;
let bool;
let empty;
let notParam;
num = 10;
str = "hello";
bool = false;
empty = null;
notParam = undefined;
let person = "Max";
let arr = [];
arr = [9, 343, 78, 99];
let arrAny = [];
arrAny = ["askja", 333, { name: "Vasa" }, ["Vassar", 398, true]];
let arrObj;
arrObj = [{ name: "Dasha" }, { name: "Kate" }];
arrObj[0].age = 4;
console.log(arrObj);
let some;
some = "hello";
some = 10;
some = true;
let boolean;
if (typeof some === "boolean") {
    boolean = some;
}
let tuple;
tuple = [1, true];
tuple.push(false);
console.log(tuple);
var ChoiceOneOf;
(function (ChoiceOneOf) {
    ChoiceOneOf[ChoiceOneOf["FIRST"] = 0] = "FIRST";
    ChoiceOneOf[ChoiceOneOf["SECOND"] = 1] = "SECOND";
    ChoiceOneOf[ChoiceOneOf["BOTH"] = 2] = "BOTH";
})(ChoiceOneOf || (ChoiceOneOf = {}));
const personAnswer = {
    firstQuestion: ChoiceOneOf.FIRST,
    secondQuestion: ChoiceOneOf.BOTH,
};
if (personAnswer.firstQuestion === ChoiceOneOf.FIRST) {
    console.log("first choice");
}
console.log("NOT first choice");
let oneOf;
oneOf = 494;
oneOf = "my string";
oneOf = true;
function combine(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        console.log(param1 + param2);
        return;
    }
    console.log(param1.toString() + param2.toString());
}
combine(3, 6);
combine("first", "second");
combine("first", 56);
let active;
active = "start";
function print() {
    console.log('just print smth in console and return nothing from function is type "void"');
}
function customError() {
    throw new Error("my error");
}
let foo;
foo = () => { };
let myFunc;
myFunc = (name, surname) => {
    console.log(`Hi, ${name} ${surname}!`);
};
myFunc("Sasha", "Biber");
function calc(num1, num2, callback) {
    callback(num1, num2);
}
calc(3, 3, (num1, num2) => {
    console.log(num1 + num2);
    return num1 + num2;
});
const article1 = {
    title: "The awesome article",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const article2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map