// JavaScript


// DOM selection
const inputItem = document.getElementById('input-item');
const btnAddItem = document.getElementById('btn-add-item');
const unList = document.getElementById('list-item');
const listItem = document.querySelectorAll('ul#list-item li');


// Function: delButton
function delButton(parent) {
	const btnDelItem = document.createElement("button");
	btnDelItem.appendChild(document.createTextNode("Delete"));
	btnDelItem.className = "btn-del-item";
	parent.appendChild(btnDelItem);
}


// DOM selection 
let delItem = document.querySelectorAll(".btn-del-item");


// Function: delListItem
function delListItem() {
	for (let i = 0; i < delItem.length; i++) {
		delItem[i].addEventListener("click", function() {
			this.parentNode.remove();
			})
	}
}


// Function: addToggle
function addToggle() {
	this.classList.toggle("Delete");
}

// Function: addListItem
function addListItem() {
	if (inputItem.value.length > 0 ) {
		const listItem = document.querySelectorAll('ul#list-item li');
		const newItem = document.createElement("li");

		let exist = false;

		for (let i = 0; i < listItem.length; i++) {
			if (inputItem.value + "Delete" === listItem[i].textContent) {
				exist = true;
			}
		}

		if (exist === false) {
			newItem.appendChild(document.createTextNode(inputItem.value));
			unList.appendChild(newItem);	
			newItem.addEventListener("click",addToggle);

			// add delButton to the newItem
			delButton(newItem);
			delItem = document.querySelectorAll(".btn-del-item");
			delListItem();

		} else {
			let alertDialog = "You already have " + inputItem.value + "!";
			alert(alertDialog);
		}

	
	} else {
		alert("Item can not empty!");
	}

	inputItem.value = "";
	inputItem.focus(); 

}


// Handling event
btnAddItem.addEventListener("click", addListItem)
inputItem.addEventListener("keypress", function() {
	if ( event.keyCode === 13 ) {
	addListItem()}
});


// Add delButton to the itemList
for (let i = 0 ; i < listItem.length; i++) {;
	listItem[i].addEventListener("click", addToggle)
	delButton(listItem[i]);
	delItem = document.querySelectorAll(".btn-del-item");
}


// Do function delListItem
delListItem();
