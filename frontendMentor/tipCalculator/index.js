const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("numOfPeople");

const tip5 = document.getElementById("five");
const tip10 = document.getElementById("ten");
const tip15 = document.getElementById("fifteen");
const tip25 = document.getElementById("twentyfive");
const tip50 = document.getElementById("fifty");
const tipCustom = document.getElementById("customTip");

// ERROR MESSAGE VISIBILITY ON PAGE LOAD
document.getElementById("billErr").style.visibility = "hidden";
document.getElementById("peopleErr").style.visibility = "hidden";
document.getElementById("tipErr").style.visibility = "hidden";

billInput.onfocus = function () {
	document.getElementById("billInput").style.outlineColor =
		"hsl(172, 67%, 45%)";
};
billInput.onblur = function () {
	if (!billInput.checkValidity()) {
		document.getElementById("billInput").style.outline = "2px solid red";
		document.getElementById("billInput").style.borderRadius = "5px";
		document.getElementById("billErr").style.visibility = "visible";
	} else {
		document.getElementById("billInput").style.outlineColor = "transparent";
		document.getElementById("billErr").style.visibility = "hidden";
	}
};

peopleInput.onfocus = function () {
	document.getElementById("billInput").style.outlineColor =
		"hsl(172, 67%, 45%)";
};
peopleInput.onblur = function () {
	if (!peopleInput.checkValidity()) {
		document.getElementById("peopleInput").style.outline = "2px solid red";
		document.getElementById("peopleInput").style.borderRadius = "5px";
		document.getElementById("peopleErr").style.visibility = "visible";
	} else {
		document.getElementById("peopleInput").style.outlineColor = "transparent";
		document.getElementById("peopleErr").style.visibility = "hidden";
	}
};

function selectTip(x) {
	let tipValue = x / 100;
	console.log(tipValue);

	return tipValue;
}

tip5.onclick = function () {
	selectTip(5);
};
tip10.onclick = function () {
	selectTip(10);
};
tip15.onclick = function () {
	selectTip(15);
};
tip25.onclick = function () {
	selectTip(25);
};
tip50.onclick = function () {
	selectTip(50);
};
tipCustom.onchange = function () {
	if (tipCustom.checkValidity()) {
		selectTip(tipCustom.value);
	}
};

function tipCalculation() {
	if (billInput.checkValidity() && peopleInput.checkValidity()) {
		let tipAmount = (billInput.value / peopleInput.value) * selectTip(5);
		return tipAmount;
	} else {
		return "$0.00";
	}
}

document.getElementById("tipAmount").innerText = tipCalculation();

// if (!tipValue > 0) {
// 	document.getElementById("tipErr").style.visibility = "visible";
// } else {
// 	document.getElementById("tipErr").style.visibility = "hidden";
// }
