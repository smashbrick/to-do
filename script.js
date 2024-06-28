const addLi = document.getElementById("addLi");
const liItems = document.getElementById("liItems");
const inputValue = document.getElementById("inputValue");

//Appending items to the list

inputValue.addEventListener("keypress", function (e) {
	const html = `<li id="liItems">${inputValue.value}</li>`;
	if (e.keyCode === 13) {
		addLi.insertAdjacentHTML("afterBegin", html);
		inputValue.value = "";
		console.log(inputValue.value);
	}
});

console.log(liItems);
