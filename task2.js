// how to add content of tast list and delete icon
// how to add another delete element and write up with java
// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// Add id
li.id = 'new-item'

// Add attribute
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement('a');
// add classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<delete-item secondary-content>';
// Add icon html
link.innerHTML = '<i class="fa fa-remove fa-times"></i>';
// Append li as child to li
li.appendChild(link);

// Append li as child to id
document.querySelector('ul.collection').appendChild(li);

console.log(li);
// ......// ......// ......// ......
// Replace element

// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';
// // Add text node
// newHeading.apprendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
// ............................
