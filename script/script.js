const formateIcons = document.querySelectorAll(".toolbar .material-icons");

formateIcons.forEach((icons) => {
	icons.addEventListener("click", () => {
		const selected = icons.dataset["element"];
		if (selected === "createLink" || selected === "insertImage") {
			const url = prompt("Url");
			url && document.execCommand(selected, false, url);
		}else if( selected === "checkbox") {
			let checkbox = '<input type="checkbox" id="vehicle1" name="vehicle1"  > ';
			console.log(checkbox);
			document.execCommand("insertHTML", false, checkbox);
		} else if (selected === "add" || selected === "remove") {
			let size = document.getSelection().focusNode.parentNode.size;
			let fontSize = selected === "add" ? (size ? parseInt(size) + 1 : 4) : size ? parseInt(size) - 1 : 2;
			let res = document.execCommand("fontSize", false, parseInt(fontSize));
			console.log(fontSize);
			console.log(res);
		} else {
			document.execCommand(selected, false, null);
		}
	});
});

document.querySelector("#showCode").onclick = () => {
	const code = document.querySelector(".editor").innerHTML;
	document.querySelector("#showCodeInput").innerText = code;
	if (code.length) document.querySelector("#showCodeDialog").style.transform = "translateX(0%)";
};

document.querySelector("#copy").onclick = () => {
	const input = document.createElement("textarea");
	input.value = document.querySelector("#showCodeInput").innerText;
	document.body.appendChild(input);
	input.select();
	document.execCommand("copy");
	document.body.removeChild(input);
};

document.querySelector("#close").onclick = () => {
	document.querySelector("#showCodeDialog").style.transform = "translateX(100%)";
};

