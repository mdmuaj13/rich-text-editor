const formateIcons = document.querySelectorAll(".toolbar .material-icons");

formateIcons.forEach((icons) => {
	icons.addEventListener("click", () => {
		const selected = icons.dataset["element"];
		if (selected === "createLink" || selected === "insertImage") {
			const url = prompt("Url");
			url && document.execCommand(selected, false, url);
		}else if( selected === "checkbox") {
			let now = Date.now();
			let checkbox = `<input type="checkbox" id='${now.toString()}'  onClick='checkbox(this)'>&nbsp; `;
			
			document.execCommand("insertHTML", false, checkbox);
		} else if (selected === "add" || selected === "remove") {
			let size = document.getSelection().focusNode.parentNode.size;
			let fontSize = selected === "add" ? (size ? parseInt(size) + 1 : 4) : size ? parseInt(size) - 1 : 2;
			let res = document.execCommand("fontSize", false, parseInt(fontSize));
			console.log(fontSize);
		} else if( selected === 'foreColor') {
			document.execCommand("foreColor", false, "rgba(255,229,255,0.8)")
		} else {
			document.execCommand(selected, false, null);
		}
	});
});

function checkbox(e) {
	let checkid = document.getElementById(e.id);
	console.log(e.checked);
	if(e.checked) {
		checkid.setAttribute("checked", "checked");
	} else{
		checkid.removeAttribute("checked");
	}
	console.log(checkid);

}

// document.querySelector("#showCode").onclick = () => {
// 	const code = document.querySelector(".editor").innerHTML;
// 	document.querySelector("#showCodeInput").innerText = code;
// 	if (code.length) document.querySelector("#showCodeDialog").style.transform = "translateX(0%)";
// };

// document.querySelector("#copy").onclick = () => {
// 	const input = document.createElement("textarea");
// 	input.value = document.querySelector("#showCodeInput").innerText;
// 	document.body.appendChild(input);
// 	input.select();
// 	document.execCommand("copy");
// 	document.body.removeChild(input);
// };

// document.querySelector("#close").onclick = () => {
// 	document.querySelector("#showCodeDialog").style.transform = "translateX(100%)";
// };

