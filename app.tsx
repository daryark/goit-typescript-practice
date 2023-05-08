const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener("click", function () {
	console.log(add(+input1.value, +input2.value));
});

//c: -----------------Lesson 2-----------------------------------------

let num: number;
let str: string;
let bool: boolean;
let empty: null;
let notParam: undefined;

num = 10;
str = "hello";
bool = false;
empty = null;
notParam = undefined;

let person = "Max"; //if you assign smth at the same time you create the variable,
// you don't need to write the type, it'll be assigned automatically.
// /err: person = 4;  <=cause u can't re-assign the other type to the same variable.

//----------------------------------------------------------------------
let arr: number[] = [];
arr = [9, 343, 78, 99];

let arrAny: any[] = []; //it's better don't do this. As, usually we have the array with the same type of data inside.
arrAny = ["askja", 333, { name: "Vasa" }, ["Vassar", 398, true]];

let arrObj: { name: string; age?: number }[];
arrObj = [{ name: "Dasha" }, { name: "Kate" }];
arrObj[0].age = 4;
console.log(arrObj);
//----------------------------------------------------------------------
let some: unknown;
some = "hello";
some = 10;
some = true;

let boolean: boolean; //you can't just assign some to the boolean, cause the type of some is still unknown. You need to check it with if (type guard);
if (typeof some === "boolean") {
	boolean = some;
}
//----------------------------------------------------------------------
let tuple: [number, boolean]; //strictly assigned positions in the array
tuple = [1, true];
tuple.push(false); //but the problem is - when you push smth other (from one of this types), it will allow it
console.log(tuple);

//----------------------------------------------------------------------
enum ChoiceOneOf {
	FIRST,
	SECOND,
	BOTH,
}

const personAnswer = {
	firstQuestion: ChoiceOneOf.FIRST,
	secondQuestion: ChoiceOneOf.BOTH,
};

if (personAnswer.firstQuestion === ChoiceOneOf.FIRST) {
	console.log("first choice");
}
console.log("NOT first choice");
//----------------------------------------------------------------------
let oneOf: number | string | boolean; //now u can assign one of these three types to this variable //?:(union type)
oneOf = 494;
oneOf = "my string";
oneOf = true;

function combine(param1: string | number, param2: string | number) {
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

let active: "start" | "end"; //you can literally type only one or another variant into your variable //? (literal type)
active = "start";
//----------------------------------------------------------------------
function print(): void {
	console.log('just print smth in console and return nothing from function is type "void"');
}
//----------------------------------------------------------------------
function customError(): never {
	throw new Error("my error");
}
//----------------------------------------------------------------------

let foo: Function;
foo = () => {}; //but this message doesn't tell us anything about the type of the function(what do we need to pass inside it (params), what will we get out of it (void, never or some type of data))

let myFunc: (name: string, surname: string) => void;
myFunc = (name: string, surname: string) => {
	console.log(`Hi, ${name} ${surname}!`);
};
myFunc("Sasha", "Biber");

function calc(num1: number, num2: number, callback: (num1: number, num2: number) => number) {
	callback(num1, num2);
}
calc(3, 3, (num1, num2) => {
	console.log(num1 + num2);
	return num1 + num2;
});
//----------------------------------------------------------------------
type Article = {
	title: string;
	likes: number;
	accounts: string[];
	status: "open" | "close";
	details?: {
		readonly createAt: Date;
		readonly updateAt: Date;
	};
};

const article1: Article = {
	title: "The awesome article",
	likes: 100,
	accounts: ["Max", "Anton", "Nikita"],
	status: "open",
	details: {
		createAt: new Date("2021-01-01"),
		updateAt: new Date("2021-05-01"),
	},
};

const article2: Article = {
	title: "Python or Js",
	likes: 5,
	accounts: ["Alex"],
	status: "close",
};
//c: ----------------------------Lesson 3------------------------------------------
