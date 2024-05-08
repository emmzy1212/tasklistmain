// // console.log(document.getElementById('task-title'))

// // let task = document.getElementById('task-title');

// // get things from elements

// console.log(document.getElementById('task-title').id);

// console.log(document.getElementById('task-title').className);


// // ......// ......// ......// ......// ......// ......
// // how to connect with html by id
// // change styling

// // a way we can add background from javascript to html
// // document.getElementById('task-title').style.background = '#333';

// // a way we can add color from javascript to html
// // document.getElementById('task-title').style.color = '#fff';

// // a way we can add padding from javascript to html
// // document.getElementById('task-title').style.padding = '5px';

// // change content
// // how to change text content from javascript to html
// // document.getElementById('task-title').innerText = 'Task List';

// // how to change color of a tag content from javascript to html
// // document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// // second way and model way to do it

// const  taskTitle = document.getElementById('task-title');

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.innerText = 'Task List';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';






// // ......// ......// ......// ......// ......// ......

// // document.querySelector()
// // how to select get html from java
// // how to select ID with documen.query
// // console.log(document.querySelector('#task-title'));

// // how to select class with documen.query
// // console.log(document.querySelector('.card-title'));

// // how to select tag with documen.query
// // console.log(document.querySelector('h5'));

// // how to select tag with documen.query

// document.querySelector('li').style.color = 'red';

// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';

// // with this nth child selector we start the child by number to select it, so child 2 will select the second and 3 will select the third
// document.querySelector('li:nth-child(2)').style.color = 'purple';

// document.querySelector('li:nth-child(3)').style.color = 'purple';

// // this is used to style the background of that particular firstchild means the first li
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';

// // this is used to style the background of that particular secondchild means the second li
// document.querySelector('li:nth-child(even)').style.background = '#ccc';


// // how to get document.getElementsByClassName, 

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[3].style.color = 'purple';
// items[3].textContent = 'List items';

// // how to get document with document.quertSelector by classname 

// // const listItems =document.querySelector('ui').getElementsByClassName
// // ('collection-item');

// // console.log(listItems);
// // ......// ......// ......

// // document.getElementsByTagName
// // how to get elementbytagname

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[2].style.color = 'green';
// lis[2].textContent = 'List items';

// // convert html collections into an array

// lis = Array.from(lis);


// // this reverse is used to turn it upsidedown
// // lis.reverse();

// // this unshift is used to add to an array if its starts from 0, with the unshift its can start from the exact begining to the exact end numbering it accordingly
// lis.unshift(1);

// lis.forEach(function(li, index){
//     console.log(li.className)
//     // to change content inside an array
// li.textContent = `${index}: List items`;

// });

// console.log(lis);

// // ......// ......// ......

// // document.querySelectorAll
// // i need to come back to this in dom project tut 24 dom manipulation events

// // const items = document.querySelectorAll('ul.collection li.collection-item');

// // items.forEach(function(item, index){
// //     item.textContent = `${index}: Hello`;

// // })

// // const liOdd = document.querySelectorAll(`li:nth-child(odd)`);
// // const liEven =document.querySelectorAll(`li:nth-child(even)`);

// // liOdd.forEach(function(){
// //     li.style.background = `#ccc`;
// // });

// // for(let i = 0; i < liEven.length; i++){
// //     liEven[i].style.background = `#f4f4f4`;
// // }

// // console.log(items);

// // ..........................................
// // this part has not worked yet
// // let val;

// // const list = document.querySelector('ul.collection');
// // const listItem = document.querySelector('li.collection-item:first-child');

// // val = list;
// // val = listItem;

// // // get child nodes
// // val = list.childNodes;
// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;
// // val = list.childNodes[1].nodeType;

// // // get children element nodes

// // val = list.children;
// // val = list.children[1];
// // list.children[1].textcontent = 'Hello';
// // // children of children
// // list.children[3].children[0].id = 'test-link';
// // val = list.children[3].children[0];

// // // first child
// // val = list.firstChild;
// // val = list.firstElementChild;

// // // last child
// // val = list.lastChild;
// // val = list.lastElementChild;

// // // count child Element
// // val = list.childElementCount;

// // // get parent mode
// // val = listItem.parentNode;
// // val = listItem.parentElement;
// // val = listItem.parentElement.parentElement;

// // // get next sibling
// // val = listItem.nextSibling;
// // val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // // get prev nextSibling
// // val = listItem.previousSibling;
// // val = listItem.previousElementSibling;

// // console.log(val);

// // // .....// .....// .....
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
// Add text node
newHeading.apprendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// ............
