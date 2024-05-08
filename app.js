/* DOCUMENT OBJECT */
// let val;
// val=document;
// val=document.all
// val=document.all[2]
// val=document.all.length;
// val=document.head;
// val=document.body;
// val=document.doctype;
// val=document.domain;
// val=document.URL;
// val=document.characterSet;
// val=document.contentType;

// val=document.forms;

// val=document.forms[0];
// val=document.forms[0].id;
// val=document.forms[0].method;
// val=document.forms[0].action;

// val=document.links;
// val=document.links[0].id;
// val=document.links[0].className;
// val=document.links[0].classList;
// val=document.links[0].classList[0];

// val=document.images;
// val=document.scripts;
// val=document.scripts[2].getAttribute('src');
// let scripts=document.scripts;
// let scriptsArr=Array.from(scripts)
// scriptsArr.forEach(script => {
//   console.log(script.getAttribute("src"))
// });

// console.log(val);
//  li=document.querySelector("li");
/* TRAVERS THE DOM */
// let val;
// const list=document.querySelector("ul.collection");
// const listItem=document.querySelector("li.collection-item:first-child");
// val=list;
// val=listItem;

// /* Get Child Nodes */
// val=list.childNodes;
// val=list.childNodes[0];
// val=list.childNodes[1].nodeName;
// val=list.childNodes[0].nodeType;
// /* Get Children Element Nodes */
// val=list.children;
// val=list.children[1];
// val=list.children[1].textContent="Hello";
// list.children[3].children[0].id="test-link"
// val=list.children[3].children[0];
// val=list.firstChild;
// val=list.firstElementChild;
// val=list.firstElementChild;
// val=list.lastChild;
// val=list.lastElementChild;
// //count child elements
// val=list.childElementCount;

// /* parents */
// val=listItem.parentNode;
// val=listItem.parentElement;
// val=listItem.parentElement.parentElement;
// //Get next Sibling;
// val=listItem.nextSibling;
// val=listItem.nextElementSibling;
// val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// val=listItem.previousSibling;
// val=listItem.previousElementSibling;

/* CREATE ELEMENT */
// li=document.createElement("li");
// /* Add Class */
// li.className="collection-item";
// /* add ID */
// li.id="new-item";
// /* add Attribute! */
// li.setAttribute("title","newItem");
// li.appendChild(document.createTextNode("Hello World"));
// /* CREATE NEW LINK ELEMENT */;
// const link=document.createElement("a");
// link.className="delete-item secondary-content";
// /* add icon Html */
// link.innerHTML='<i class="fa fa-remove fa-times"></i>'
// li.appendChild(link);
// /* APPEN LI AS CHILD TO UL */
// const ul=document.querySelector("ul.collection");
// ul.appendChild(li);

/* REPLACE ELEMENT IN THE DOM */
// create element
// const newHeading=document.createElement("h2");
// // Add Id
// newHeading.id="task-title";
// newHeading.appendChild(document.createTextNode("TASK-LIST"));
// //get the Old Heading;
// const oldHeading=document.getElementById("task-title");
// const cardAct=oldHeading.parentElement;
// cardAct.replaceChild(newHeading,oldHeading);

// /* REMOVE ELEMENTS */
// const lis=document.querySelectorAll("li");
// const list=document.querySelector("ul");
// //remove Method;
// lis[0].remove();

// // Remove Child;
// list.removeChild(lis[3]);

// // CLASSES AND ATTRIBUTES;
// const firstLi=document.querySelector("li:first-child");
// const link=firstLi.children[0];
// let val;
// val=link.className;
// val=link.classList;
// val=link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");
// val=link;

// // ATTRIBUTES
// val=link.getAttribute("href");
// val=link.setAttribute("href","www.google.com");
// link.setAttribute("title","google");
// val=link.hasAttribute("titile");
// link.removeAttribute("title");
// // val=link.


// console.log(val)

/* EVENTS */;
// document.querySelector(".clear-tasks").addEventListener("click",e=>{
//   e.preventDefault();
//   console.log("hello world")
// });

// document.querySelector(".clear-tasks").addEventListener("click",onClick);
// function onClick(e){
//   let val;
//   val=e;
//   val=e.target;
//   val=e.target.id
//   val=e.target.className;
//   val=e.target.classList;
// val=e.type
// val=e.timeStamp;
// /* COORD EVENT RELATIVE TO WINDOW */
// val=e.clientY
// val=e.clientX
// /* RELATIVE TO THE ELEMENT */
// // val=e.offsetY;
// // val=e.offsetX;
//   console.log(val)
// }

// const clearBtn=document.querySelector(".clear-tasks");
// const card=document.querySelector(".card");
// const Heading=document.querySelector("h5");

//click
// clearBtn.addEventListener("click",runEvent);

//DoubleClick;
// clearBtn.addEventListener("dblclick",runEvent)
//Mouse Down
// clearBtn.addEventListener("mousedown",runEvent)
//MouseUp
// clearBtn.addEventListener("mouseup",runEvent)
//Mouse Enter
// card.addEventListener("mouseenter",runEvent)
// //Mouse Leave
// card.addEventListener("mouseleave",runEvent)
// card.addEventListener("mouseover",runEvent)
// card.addEventListener("mouseout",runEvent)
// card.addEventListener("mousemove",runEvent);

// function runEvent(e){
//   console.log(`event Type: ${e.type}`)
//   Heading.textContent=`MOUSEX:${e.offsetX} MOUSEY:${e.offsetY}`;
//   document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
// }

const form=document.querySelector("form");
const taskInput=document.getElementById("task");
/* clear Input */
taskInput.value="";
// form.addEventListener("submit",runEvent);
//keydown
// taskInput.addEventListener("keydown",runEvent);
// taskInput.addEventListener("keyup",runEvent);
// taskInput.addEventListener("keypress",runEvent);
// taskInput.addEventListener("focus",runEvent);
// taskInput.addEventListener("blur",runEvent);
//cut
// taskInput.addEventListener("cut",runEvent);
//paste
// taskInput.addEventListener("paste",runEvent);
//input
// taskInput.addEventListener("input",runEvent);

// const Heading=document.querySelector("h5");
// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);
// Heading.innerText=e.target.value;
// }

/* EVENT-BUBLING AND DELEGATION */
//EVENT bubbling
// document.querySelector(".card-title").addEventListener("click",e=>console.log("card"));
// document.querySelector(".col").addEventListener("click",e=>console.log("col"));
// const deleteItems=document.querySelectorAll(".delete-item");
// deleteItems.forEach(item=>{
//   item.addEventListener("click",e=>console.log("delete item"))
// })

/* DELEGATION */
// const body=document.querySelector("body");

//  body.addEventListener("click",e=>{

//    if(e.target.className.includes("fa-remove")){
//   e.target.parentElement.parentElement.remove();
//   }
//   })

/* LOCAL/SESSION STORAGE */
//local storage
// localStorage.setItem("name","John");
// localStorage.setItem("age","30");
//session Storage
// sessionStorage.setItem("name","John");
//remove from storage
// localStorage.removeItem("name");
//get from storage
// const name=localStorage.getItem("name");
// const age=localStorage.getItem("age");
// console.log(name,age);
// localStorage.clear();
document.querySelector("form").onsubmit=(e)=>{
  e.preventDefault();
const task=document.getElementById("task").value;
let tasks;
if(localStorage.getItem("tasks")===null){
  tasks=[];
}else{
tasks=JSON.parse(localStorage.getItem("tasks"));
}
tasks.push(task)
localStorage.setItem("tasks",JSON.stringify(tasks));
alert("task saved");
}
const tasks=JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(function(task){
  console.log(task)
});












