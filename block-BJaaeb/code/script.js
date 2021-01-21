/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

function createInputElm(label, type = "text") {
  let labelEle = document.createElement("label");
  labelEle.innerText = `${label}:`;

  let inputEle = document.createElement("input");
  inputEle.setAttribute("type", type);
  labelEle.append(inputEle);

  return labelEle;
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

function createInputElm(label, input = "text") {
  let string = `<label>${label}:<input type=${input}></label>`;
  return string.innerHTML;
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

// Your code goes here

function createList(array) {
  let str = `<ul> ${array
    .map((element) => `<li>${element}</li>`)
    .join("")} </ul>.`;
  return str;
}

// TEST
createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]);
createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(array) {
  let str = `<ul> ${array
    .map(
      (todo) => `
  <li>
    <p>${todo.name}</p>
    <input type="checkbox" ${todo.isDone ? 'checked' : ''} checked name="" id="">
    <span>X</span>
  </li>`
    )
    .join("")} </ul>.`;

     return str;
}

// TEST
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]);
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]);
