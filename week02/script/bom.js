const ul = document.querySelector("#list");
const addBtn =  document.querySelector("button");
const userInput = document.querySelector("#favchap");

function increase(){
	if (userInput.value != ""){
		const li = document.createElement("li");
		const deleteBtn = document.createElement("button");
		li.innerText = userInput.value.trim();
		li.appendChild(deleteBtn);
		
		ul.append(li);
		userInput.value = "";
		userInput.focus()
		deleteBtn.textContent = "❌";

		function decrease() {
		li.remove()
		}
		deleteBtn.addEventListener("click", decrease);
	}
}
addBtn.addEventListener("click", increase);