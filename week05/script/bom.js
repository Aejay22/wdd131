const ul = document.querySelector("#list");
const addBtn =  document.querySelector("button");
const userInput = document.querySelector("#favchap");

const getChapterList = ()=> JSON.parse(localStorage.getItem("myFavBOMList"));

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
	displayList(chapter);
});

addBtn.addEventListener("click", ()=>{
	displayList(userInput.value);
	chaptersArray.push(userInput.value);
	setChapterList();
	userInput.value = "";
	userInput.focus();
});

function displayList(item){
	let li = document.createElement("li");
	let deleteButton = document.createElement("button");
	li.textContent = item;
	deleteButton.textContent = "✖️";
	deleteButton.classList.add("delete");
	li.append(deleteButton);
	ul.append(li);;
	deleteButton.addEventListener("click", ()=>{
		ul.removeChild(li);
		deleteChapter(item);
		userInput.focus();
	})
}

const setChapterList = ()=> localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));



const deleteChapter = chapter =>{
	chaptersArray = chaptersArray.filter(item => item !== chapter);
	setChapterList();
}
