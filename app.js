var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//c: -----------------Lesson 2-----------------------------------------
var num;
var str;
var bool;
var empty;
var notParam;
num = 10;
str = "hello";
bool = false;
empty = null;
notParam = undefined;
var person = "Max"; //if you assign smth at the same time you create the variable,
// you don't need to write the type, it'll be assigned automatically.
// /err: person = 4;  <=cause u can't re-assign the other type to the same variable.
//----------------------------------------------------------------------
var arr = [];
arr = [9, 343, 78, 99];
var arrAny = []; //it's better don't do this. As, usually we have the array with the same type of data inside.
arrAny = ["askja", 333, { name: "Vasa" }, ["Vassar", 398, true]];
var arrObj;
arrObj = [{ name: "Dasha" }, { name: "Kate" }];
arrObj[0].age = 4;
console.log(arrObj);
//----------------------------------------------------------------------
var some;
some = "hello";
some = 10;
some = true;
var boolean; //you can't just assign some to the boolean, cause the type of some is still unknown. You need to check it with if (type guard);
if (typeof some === "boolean") {
    boolean = some;
}
//----------------------------------------------------------------------
var tuple; //strictly assigned positions in the array
tuple = [1, true];
tuple.push(false); //but the problem is - when you push smth other (from one of this types), it will allow it
console.log(tuple);
//----------------------------------------------------------------------
var ChoiceOneOf;
(function (ChoiceOneOf) {
    ChoiceOneOf[ChoiceOneOf["FIRST"] = 0] = "FIRST";
    ChoiceOneOf[ChoiceOneOf["SECOND"] = 1] = "SECOND";
    ChoiceOneOf[ChoiceOneOf["BOTH"] = 2] = "BOTH";
})(ChoiceOneOf || (ChoiceOneOf = {}));
var personAnswer = {
    firstQuestion: ChoiceOneOf.FIRST,
    secondQuestion: ChoiceOneOf.BOTH,
};
if (personAnswer.firstQuestion === ChoiceOneOf.FIRST) {
    console.log("first choice");
}
console.log("NOT first choice");
//----------------------------------------------------------------------
var oneOf; //now u can assign one of these three types to this variable //?:(union type)
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
//----------------------------------------------------------------------
var active; //you can literally type only one or another variant into your variable //? (literal type)
active = "start";
//----------------------------------------------------------------------
function print() {
    console.log('just print smth in console and return nothing from function is type "void"');
}
//----------------------------------------------------------------------
function customError() {
    throw new Error("my error");
}
//----------------------------------------------------------------------
var foo;
foo = function () { }; //but this message doesn't tell us anything about the type of the function(what do we need to pass inside it (params), what will we get out of it (void, never or some type of data))
var myFunc;
myFunc = function (name, surname) {
    console.log("Hi, ".concat(name, " ").concat(surname, "!"));
};
myFunc("Sasha", "Biber");
function calc(num1, num2, callback) {
    callback(num1, num2);
}
calc(3, 3, function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
});
var article1 = {
    title: "The awesome article",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
var article2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//c: ----------------------------Lesson 3------------------------------------------
