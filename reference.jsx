// ============================================================
//  JAVASCRIPT + REACT REFERENCE  ·  by Claude for Daniel
//  Read top to bottom — each concept builds on the last.
// ============================================================

// ────────────────────────────────────────────────────────────
//  1. VALUES
//  A value is a raw piece of data. There are several kinds:
// ────────────────────────────────────────────────────────────

"hello"          // String  — text, always wrapped in quotes
'hello'          // String  — single quotes work too, same thing
`hello`          // String  — backtick version (more powerful, see section 3)

42               // Number  — a whole number

true             // Boolean — yes / on  / correct
false            // Boolean — no  / off / incorrect

null             // Null    — intentionally empty, "nothing here"
undefined        // Undefined — the computer has no value for this yet

[]               // Array   — an ordered list of values (see section 5)
{}               // Object  — a collection of named values (see section 6)

// ────────────────────────────────────────────────────────────
//  2. VARIABLES
//  A variable is a named box that holds a value.
// ────────────────────────────────────────────────────────────

const color = "blue";
//    ^^^^^   ──────
//    name    value being stored
//
// const = sealed box. You CANNOT reassign it later:
// color = "red";  ← this would throw an error

let score = 0;
// let = open box. You CAN reassign it:
score = 10;   // ← this is fine

// ALL_CAPS is a convention for constants that never change:
const MAX_SIZE = 100;
const BASE_URL = "https://example.com";

// let is common inside loops, where the value is updated each iteration:
let total = 0;

// ────────────────────────────────────────────────────────────
//  3. TEMPLATE LITERALS  (the backtick string)
//  Regular strings can't do math or insert variables.
//  Template literals can — using ${ } inside them.
// ────────────────────────────────────────────────────────────

const userName = "Daniel";
const greeting = `Hello, ${userName}!`;
//  result → "Hello, Daniel!"
//  The ${ } is replaced with whatever is inside it.

const itemCount = 5;
const message = `You have ${itemCount} items`;
//  result → "You have 5 items"

// You can put any expression inside ${ }:
const summary = `${itemCount > 0 ? "some" : "no"} items`;
//  result → "some items"   (see section 7 for the ? : operator)

// Useful for building messages with dynamic values:
const confirmMessage = `Delete "${userName}"?`;
//  result → 'Delete "Daniel"?'

// Multi-line strings work naturally with backticks:
const poem = `
  Roses are red,
  Violets are blue,
  If i had a brick,
  I'd throw it at your head and laugh.
`;

// ────────────────────────────────────────────────────────────
//  4. OPERATORS
//  Operators are symbols that DO things to values.
// ────────────────────────────────────────────────────────────


// ── 4a. MATH OPERATORS ──────────────────────────────────────

10 + 3    // → 13   addition
10 - 3    // → 7    subtraction
10 * 3    // → 30   multiplication
10 / 3    // → 3.33 division
10 % 3    // → 1    modulo (the REMAINDER after dividing — 10÷3 is 3 remainder 1)
10 ** 3   // → 1000 exponent (10 to the power of 3)

// Modulo is handy for "every N items" logic:
// if (index % 2 === 0) → true for even indices (0, 2, 4...)


// ── 4b. ASSIGNMENT OPERATORS ────────────────────────────────
//  Shortcuts for "take this variable and change it"

let x = 10;
x = x + 5;   // long way:  x is now 15
x += 5;      // short way: same thing — "add 5 to x"
x -= 3;      // "subtract 3 from x"
x *= 2;      // "multiply x by 2"
x /= 4;      // "divide x by 4"
x++;         // "add 1 to x" (increment)
x--;         // "subtract 1 from x" (decrement)


// ── 4c. COMPARISON OPERATORS ────────────────────────────────
//  These compare two values and always return true or false.

5 === 5     // → true   strict equality (same value AND same type)
5 !== 3     // → true   strict NOT equal
5 === "5"   // → false  number 5 is NOT the same as string "5"
5 == "5"    // → true   loose equality (converts types first — AVOID this)

//  ⚠ Always use === and !== in your code. Never == or !=.
//    The double-equals has confusing type-conversion behavior.

5 > 3       // → true   greater than
5 < 3       // → false  less than
5 >= 5      // → true   greater than OR equal to
5 <= 4      // → false  less than OR equal to

// Common uses:
// i < items.length - 1      → "is this not the last item?"
// password !== storedHash   → "do these not match?"
// item.type === "folder"    → "is this item a folder?"


// ── 4d. LOGICAL OPERATORS ───────────────────────────────────
//  These combine true/false conditions.

true && true    // → true   AND: both sides must be true
true && false   // → false  AND: one side is false, so result is false
false || true   // → true   OR:  at least one side must be true
false || false  // → false  OR:  both are false
!true           // → false  NOT: flips it
!false          // → true   NOT: flips it

// AND — all conditions must pass:
const isLoggedIn = true;
const hasData = true;
const canShowApp = isLoggedIn && hasData;  // → true, both conditions met

// OR — used as a fallback (if left side is falsy, use right side):
const rawValue = null;
const safeValue = rawValue || [];
// "use rawValue, but if it's null/undefined/empty, use [] instead"

// NOT — flips a boolean, or checks if something is falsy:
const isEmpty = !hasData;  // → false
// if (!name) return;  ← "if name is empty/null/undefined, bail out"

// Chaining multiple conditions:
// isLoggedIn && hasPermission && isActive
//   → all three must be true


// ── 4e. THE SPREAD OPERATOR  ...  ───────────────────────────
//  Three dots that "unpack" an array or object into individual pieces.

const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "cherry"];
// result → ["apple", "banana", "cherry"]
// The ... unpacked "apple" and "banana" out of fruits, then "cherry" was added.

// Same thing with objects:
const user = { name: "Daniel", age: 28 };
const updatedUser = { ...user, age: 29 };
// result → { name: "Daniel", age: 29 }
// Spread copies all fields from user, then age: 29 OVERWRITES the old age.

// Common uses:
// [...existingArray, newItem]        → add item to end of array
// [newItem, ...existingArray]        → add item to start
// [...array1, ...array2]             → merge two arrays
// { ...existingObject, key: value }  → copy object and update one field
// { ...defaults, ...overrides }      → merge two objects (overrides win)


// ── 4f. OPTIONAL CHAINING  ?.  ──────────────────────────────
//  Safely access a property that might not exist.
//  Without it, accessing a property on null/undefined CRASHES the app.

const person = null;

// DANGEROUS — throws an error if person is null:
// const email = person.email;  ← "Cannot read properties of null"

// SAFE — returns undefined instead of crashing:
const email = person?.email;
// If person is null, email is just undefined. No crash.

// You can chain them:
const lowerEmail = person?.email?.toLowerCase();
// If person is null → undefined (no crash)
// If person exists but email is null → undefined (no crash)
// If both exist → "daniel@example.com"

// Common pattern — optional chain then fallback with ||:
const displayName = person?.name || "Anonymous";


// ── 4g. NULLISH COALESCING  ??  ─────────────────────────────
//  Like ||, but ONLY falls back for null or undefined.
//  (|| also falls back for 0, "", false — which is sometimes wrong)

const count2 = 0;
const displayA = count2 || "none";   // → "none" (WRONG — 0 is falsy!)
const displayB = count2 ?? "none";   // → 0      (CORRECT — 0 is valid)

// Use ?? when 0 or false or "" are valid values you want to keep.
// Use || when any "falsy" value should trigger the fallback.


// ── 4h. THE TERNARY OPERATOR  ? :  ──────────────────────────
//  A compact if/else that fits on one line.
//  Format:  condition ? valueIfTrue : valueIfFalse

const isAdmin = true;
const label = isAdmin ? "Admin" : "Guest";
// → "Admin"

// The same thing written as a normal if/else:
let label2;
if (isAdmin) {
  label2 = "Admin";
} else {
  label2 = "Guest";
}

// Common uses — toggling button text, labels, styles:
// loading ? "Saving…" : "Save"
// isOpen ? "Close menu" : "Open menu"
// count2 === 1 ? "1 item" : `${count2} items`

// Ternaries can be nested, but gets hard to read quickly:
// a.type === b.type ? 0 : a.type === "folder" ? -1 : 1
//   → if same type: 0 (equal)
//   → if a is a folder: -1 (folders sort first)
//   → otherwise: 1 (pages sort last)

// ────────────────────────────────────────────────────────────
//  5. ARRAYS
//  An ordered list of values. Index starts at 0, not 1.
// ────────────────────────────────────────────────────────────

const colors = ["red", "green", "blue"];
//               [0]      [1]      [2]   ← positions (called "indices")

colors[0]           // → "red"
colors[2]           // → "blue"
colors.length       // → 3  (how many items)

// Common array methods:

colors.push("yellow");
// Adds "yellow" to the END → ["red", "green", "blue", "yellow"]

colors.includes("red");
// → true  (checks if "red" is in the array)

colors.slice(1, 3);
// Returns a portion: ["green", "blue"]  (from index 1, up to but NOT including 3)

colors.filter(c => c !== "red");
// Returns a NEW array with items that pass the test: ["green", "blue"]

colors.map(c => c.toUpperCase());
// Returns a NEW array with each item transformed: ["RED", "GREEN", "BLUE"]
// .map() is used constantly in React to turn data into JSX elements.

colors.join(", ");
// → "red, green, blue"  (smushes array into a string with separator)

// ── Array destructuring ──────────────────────────────────────
//  Unpack array items into named variables:
const [first, second] = colors;
// first → "red",  second → "green"

// This is how useState works:
// const [count, setCount] = useState(0);
//        ^^^^^  ^^^^^^^^^
//        current  function to change it
// useState returns an array of exactly two things. We name them here.

// ────────────────────────────────────────────────────────────
//  6. OBJECTS
//  A collection of named fields (called "keys" and "values").
// ────────────────────────────────────────────────────────────

const profile = {
  name: "Daniel",    // key: "name",  value: "Daniel"
  age: 28,           // key: "age",   value: 28
  isAdmin: false,    // key: "isAdmin", value: false
};

// Accessing values:
profile.name       // → "Daniel"   dot notation
profile["name"]    // → "Daniel"   bracket notation (same result)
profile["age"]     // → 28

// Changing a value:
profile.age = 29;  // now age is 29

// Checking if a key exists:
"name" in profile  // → true
"email" in profile // → false

// Getting all entries as [key, value] pairs:
Object.entries(profile);
// → [["name", "Daniel"], ["age", 28], ["isAdmin", false]]
// Useful for looping over an object's contents.


// ── Object shorthand ────────────────────────────────────────
//  When the variable name matches the key name, you can skip the : value

const city = "Nashville";
const country = "USA";

const location = { city: city, country: country };  // long way
const location2 = { city, country };                // short way — same result


// ── Object destructuring ────────────────────────────────────
//  Unpack object fields into named variables:

const { name: profileName, age } = profile;
// profileName → "Daniel",  age → 28
// (renamed "name" to "profileName" to avoid a conflict with an earlier variable)

// Usually you don't need to rename:
const { isAdmin: profileIsAdmin } = profile;
// profileIsAdmin → false

// Destructuring is common in function parameters — see section 16.

// ────────────────────────────────────────────────────────────
//  7. FUNCTIONS
//  A reusable block of instructions with a name.
// ────────────────────────────────────────────────────────────

// ── Regular function declaration ─────────────────────────────
function greet(personName) {
  return "Hello, " + personName;
}
greet("Daniel");  // → "Hello, Daniel"
//    ^^^^^^^^
//    this is the ARGUMENT — the value passed in
//    inside the function, it's received as the PARAMETER `personName`

// "parameter" = the variable name in the function definition
// "argument"  = the actual value you pass when calling it


// ── Default parameters ───────────────────────────────────────
//  If no argument is passed, use this default value:

function greet2(personName = "stranger") {
  return "Hello, " + personName;
}
greet2("Daniel");  // → "Hello, Daniel"
greet2();          // → "Hello, stranger"  (used the default)


// ── Arrow functions ──────────────────────────────────────────
//  A shorter way to write functions. Common for small, one-off functions.

// Regular:
function double(n) {
  return n * 2;
}

// Arrow — same thing:
const double2 = (n) => {
  return n * 2;
};

// Arrow — even shorter (when body is just one expression, { } and return are implied):
const double3 = (n) => n * 2;

// Arrow — shortest (when there's only ONE parameter, parens are optional):
const double4 = n => n * 2;

// All four do the exact same thing.

// Arrow functions are common inline in React:
// onClick={() => setCount(0)}
//   A function with no parameters that calls setCount(0) when clicked.

// And as arguments to array methods:
// colors.filter(c => c !== "red")
//   An arrow function passed to .filter().


// ── Async functions ──────────────────────────────────────────
//  When a function needs to wait for something (network, database, etc.)

async function loadData() {
  const result = await fetch("https://api.example.com/data");
  // Without await, result would be a "Promise" (a future value), not the real data.
  // With await, JavaScript pauses HERE until the fetch completes, then continues.
  return result;
}

// You can only use await INSIDE an async function.

// ────────────────────────────────────────────────────────────
//  8. CONDITIONALS
//  Making decisions based on values.
// ────────────────────────────────────────────────────────────

// ── if / else if / else ──────────────────────────────────────

const temp = 75;

if (temp > 90) {
  console.log("Hot");
} else if (temp > 60) {
  console.log("Warm");      // ← this runs, because 75 > 60
} else {
  console.log("Cold");
}

// ── Early return ─────────────────────────────────────────────
//  A common pattern: exit a function early if something is wrong.
//  This keeps the "happy path" code un-nested and easy to read.

function processName(name) {
  if (!name) return;            // bail out if name is empty
  if (name.length > 50) return; // bail out if name is too long
  // ... the rest only runs if both checks passed
  console.log("Processing:", name);
}


// ── switch ───────────────────────────────────────────────────
//  Like if/else but for checking one variable against many values.

const day = "Monday";
switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  case "Monday":
    console.log("Work day");  // ← this runs
    break;
  default:
    console.log("Another day");
}

// ────────────────────────────────────────────────────────────
//  9. LOOPS
//  Doing something repeatedly.
// ────────────────────────────────────────────────────────────

// ── for...of  (looping over arrays) ─────────────────────────
const fruits2 = ["apple", "banana", "cherry"];
for (const fruit of fruits2) {
  console.log(fruit);  // prints each fruit one by one
}

// ── for...in  (looping over object keys) ────────────────────
const scores = { alice: 95, bob: 87, carol: 92 };
for (const key in scores) {
  console.log(key, scores[key]);  // "alice 95", "bob 87", "carol 92"
}

// ── .forEach()  (array method, alternative to for...of) ─────
fruits2.forEach((fruit) => {
  console.log(fruit);  // same result as the for...of above
});

// ── .map()  (loop that TRANSFORMS into a new array) ──────────
const prices = [10, 20, 30];
const discounted = prices.map(p => p * 0.9);
// → [9, 18, 27]  — original array is unchanged

// In React, .map() is how you turn data arrays into JSX elements:
// items.map((item) => (
//   <div key={item.id}>{item.name}</div>
// ))

// ────────────────────────────────────────────────────────────
//  10. JSON  (JavaScript Object Notation)
//  A way to convert objects to text and back.
//  Used for storing/sending data (databases, APIs, files).
// ────────────────────────────────────────────────────────────

const obj = { name: "Daniel", age: 28 };

const asText = JSON.stringify(obj);
// → '{"name":"Daniel","age":28}'   (a plain string now)

const backToObj = JSON.parse(asText);
// → { name: "Daniel", age: 28 }   (a real object again)

// WHY: Databases and APIs can't store JavaScript objects — only text.
// So you stringify before saving, and parse after loading.

// The deep-copy trick:
const original = { a: { b: 1 } };
const copy = JSON.parse(JSON.stringify(original));
// copy is a completely independent object — changing it won't affect original.
// This is useful in React because you should never mutate state directly.

// ────────────────────────────────────────────────────────────
//  11. REACT CONCEPTS
// ────────────────────────────────────────────────────────────


// ── Components ───────────────────────────────────────────────
//  A component is a function that returns JSX.
//  It's a reusable building block of UI.

function Greeting({ name }) {     // receives props as an object, destructured
  return (
    <div>Hello, {name}!</div>     // JSX — HTML-like, but lives inside JS
  );
}

// Using it:
// <Greeting name="Daniel" />
//   → renders:  <div>Hello, Daniel!</div>

// Props are to components what arguments are to functions.
// The { } in JSX lets you insert any JavaScript expression:
// <div>{2 + 2}</div>                              → <div>4</div>
// <div>{isAdmin ? "Admin" : "Guest"}</div>


// ── useState ─────────────────────────────────────────────────
//  Gives a component "memory" — a value that persists between renders.
//  When you call the setter function, React re-renders the component.

// const [value, setValue] = useState(initialValue);
//        ^^^^^  ^^^^^^^^             ^^^^^^^^^^^^
//        current  function to          what it starts as
//        value    update it

// Example:
// const [count3, setCount3] = useState(0);
// <button onClick={() => setCount3(count3 + 1)}>
//   Clicked {count3} times
// </button>
// Every click calls setCount3, React re-renders, and the new count shows.

// Common state patterns:
// const [isOpen, setIsOpen] = useState(false);     → toggle
// const [text, setText] = useState("");             → text input
// const [items, setItems] = useState([]);           → list
// const [data, setData] = useState(null);           → loaded data (null = not yet)
// const [loading, setLoading] = useState(false);   → loading state


// ── useEffect ────────────────────────────────────────────────
//  Runs code AFTER the component renders.
//  Used for: loading data, listening to events, auto-focusing inputs.

// useEffect(functionToRun, [dependencies]);

// The dependencies array controls WHEN it re-runs:
//   []           → runs only ONCE, when the component first appears
//   [someValue]  → runs once on mount, then again whenever someValue changes
//   (no array)   → runs after EVERY render (rare, usually a bug)

// Example — load data when component mounts:
// useEffect(() => {
//   fetchUserData().then(d => setData(d));
// }, []);

// Example — react to a value changing:
// useEffect(() => {
//   document.title = `${count3} notifications`;
// }, [count3]);
// → updates the browser tab title every time count3 changes


// ── useRef ───────────────────────────────────────────────────
//  A way to get a direct handle on a real DOM element.
//  Unlike state, changing a ref does NOT trigger a re-render.

// const myRef = useRef();
// <input ref={myRef} />
// myRef.current        ← the actual <input> HTML element
// myRef.current.focus() ← calls .focus() on it directly

// Common use: auto-focus an input when it appears:
// useEffect(() => {
//   if (inputRef.current) inputRef.current.focus();
// }, []);


// ── JSX Rules ────────────────────────────────────────────────

// 1. Every element needs a closing tag (or self-close with />)
//    <div></div>    ✓
//    <input />      ✓
//    <input>        ✗  (HTML allows this, JSX does not)

// 2. class is className in JSX (class is a reserved word in JS)
//    <div className="container">

// 3. CSS in JSX uses camelCase property names:
//    <div style={{ fontSize: 14, backgroundColor: "blue" }}>
//    Notice DOUBLE {{ }} — outer {} is "insert JS", inner {} is the object.

// 4. { } lets you embed any JS expression in JSX:
//    <div>{isAdmin ? "Admin" : "Guest"}</div>

// 5. You can only return ONE root element. Wrap siblings in <> </> (Fragment):
//    return (
//      <>
//        <h1>Title</h1>
//        <p>Subtitle</p>
//      </>
//    );

// 6. Lists need a key prop — a unique identifier for each item:
//    items.map(item => <div key={item.id}>{item.name}</div>)
//    React uses keys to track which items changed/moved/were removed.

// ────────────────────────────────────────────────────────────
//  12. COMMON BUILT-IN METHODS (quick reference)
// ────────────────────────────────────────────────────────────

// ── String methods ───────────────────────────────────────────
"  hello  ".trim()                // → "hello"           removes whitespace from ends
"Hello".toLowerCase()             // → "hello"
"hello".toUpperCase()             // → "HELLO"
"hello world".includes("world")   // → true
"hello world".split(" ")          // → ["hello", "world"]
"hello".replace("l", "r")         // → "herlo"           replaces first match
"  ".trim() === ""                 // → true              useful for checking empty input
"abc".startsWith("a")             // → true
"abc".slice(1, 3)                 // → "bc"              from index 1 up to (not including) 3

// ── Number methods ───────────────────────────────────────────
Math.random()                // → random decimal between 0 and 1
Math.floor(3.9)              // → 3    rounds DOWN
Math.ceil(3.1)               // → 4    rounds UP
Math.round(3.5)              // → 4    rounds to nearest
Math.max(1, 5, 3)            // → 5
Math.min(1, 5, 3)            // → 1
(3.14159).toFixed(2)         // → "3.14"  (returns a string!)

// ── Array methods (quick summary) ───────────────────────────
// .map(fn)          → transforms each item, returns new array
// .filter(fn)       → keeps items where fn returns true, returns new array
// .find(fn)         → returns first item where fn returns true (or undefined)
// .some(fn)         → returns true if ANY item passes fn
// .every(fn)        → returns true if ALL items pass fn
// .includes(val)    → returns true if val is in the array
// .indexOf(val)     → returns position of val (-1 if not found)
// .join(sep)        → combines into a string with separator
// .slice(a, b)      → returns a portion of the array
// .push(val)        → adds to end (MUTATES — changes the original)
// .pop()            → removes from end (MUTATES)
// .sort(fn)         → sorts in place (MUTATES — watch out in React!)
// .reduce(fn, init) → reduces array to a single value (advanced)

// ⚠ In React, never MUTATE state directly (no .push on state arrays).
//   Always create a NEW array/object using spread or the JSON copy trick.

// ────────────────────────────────────────────────────────────
//  13. TRUTHY & FALSY
//  In JavaScript, every value is considered either "truthy" or "falsy"
//  when used in a boolean context (like an if statement).
// ────────────────────────────────────────────────────────────

// FALSY values (act like false):
// false
// 0
// ""        empty string
// null
// undefined
// NaN       "Not a Number" — result of invalid math like 0/0

// TRUTHY values (act like true) — EVERYTHING else, including:
// 1
// "hello"
// []        even an empty array is truthy!
// {}        even an empty object is truthy!
// "false"   a STRING containing "false" is still truthy

// This is why !value checks if something is empty:
// if (!name) return;
//   → "if name is empty string, null, or undefined, bail out"

// And why || works as a fallback:
// const items = response.data || [];
//   → "if data is null/undefined (falsy), use []"

// ────────────────────────────────────────────────────────────
//  14. THE  delete  KEYWORD
//  Removes a key from an object.
// ────────────────────────────────────────────────────────────

const notebook = { pageA: {}, pageB: {}, pageC: {} };
delete notebook.pageB;
// notebook is now { pageA: {}, pageC: {} }

// You can also delete using bracket notation:
const keyToRemove = "pageA";
delete notebook[keyToRemove];
// notebook is now { pageC: {} }

// ────────────────────────────────────────────────────────────
//  15. PROMISES & ASYNC/AWAIT (deeper look)
// ────────────────────────────────────────────────────────────

//  A Promise is a placeholder for a value that doesn't exist yet.
//  Think of it like a ticket at a restaurant:
//  you don't have the food yet, but you have a PROMISE of food.

//  When the operation finishes, the promise "resolves" with the real value.
//  When it fails, the promise "rejects" with an error.

//  async/await is the modern, readable way to work with Promises.

async function example() {
  try {
    const data = await someAsyncOperation();  // wait for it
    console.log(data);                         // use it
  } catch (error) {
    console.error("Something went wrong:", error);  // handle failure
  }
}

//  .then() is the older way to handle Promises (you'll still see it):
someAsyncOperation()
  .then(data => console.log(data))        // runs on success
  .catch(error => console.error(error));  // runs on failure

//  .catch(() => {}) means "if this fails, silently do nothing":
navigator.clipboard.writeText("some text").catch(() => {});
//  → try to copy to clipboard; if the browser blocks it, ignore the error

// ────────────────────────────────────────────────────────────
//  16. DESTRUCTURING IN FUNCTION PARAMETERS
//  You can destructure props directly in the function signature.
// ────────────────────────────────────────────────────────────

// Without destructuring:
function Card1(props) {
  return <div>{props.title} — {props.author}</div>;
}

// With destructuring — cleaner:
function Card2({ title, author }) {
  return <div>{title} — {author}</div>;
}

// Both work identically. The second is standard in React.
// Using it:
// <Card2 title="My Post" author="Daniel" />

// ────────────────────────────────────────────────────────────
//  17. EXPORT & IMPORT
//  How files share code with each other.
// ────────────────────────────────────────────────────────────

//  NAMED export — can export multiple things from one file:
export function helper() { return "I help"; }
export const CONSTANT = 42;

//  NAMED import — must use the exact same name in { }:
// import { helper, CONSTANT } from "./utils";

//  DEFAULT export — one main thing per file:
export default function App() { /* ... */ }

//  DEFAULT import — you can name it anything you want:
// import App from "./App";
// import MyApp from "./App";   ← also fine, it's the default

//  Named imports from a package (no ./ means it's an installed library):
// import { useState, useEffect } from "react";
// import { getAuth } from "firebase/auth";

// ────────────────────────────────────────────────────────────
//  END OF REFERENCE
//  Things to explore next when you're ready:
//    - Array.reduce()
//    - Regular expressions (the /pattern/ syntax)
//    - useContext and useCallback React hooks
//    - TypeScript (adds type annotations to JavaScript)
//    - Promises in depth (.all, .race, .allSettled)
// ────────────────────────────────────────────────────────────