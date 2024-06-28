const addLi = document.getElementById("addLi");
const liItems = document.getElementById("liItems");
const inputValue = document.getElementById("inputValue");
const iconImage = document.getElementById("icon");

//Appending items to the list

inputValue.addEventListener("keypress", function (e) {
	const html = `<li id="liItems"><span>${inputValue.value}</span><ion-icon class='icon' name="trash-outline"></ion-icon></li>`;
	if (e.keyCode === 13) {
		addLi.insertAdjacentHTML("afterBegin", html);
		inputValue.value = "";
	}
});

addLi.addEventListener("click", function (e) {
	if (e.target && e.target.classList.contains("icon")) {
		e.target.closest("li").remove();
		console.log(e);
	}
});
