var tipSelected;

const bill = document.getElementById("bill");
const people = document.getElementById("numOfPeople");

const tip5 = document.getElementById("five");
const tip10 = document.getElementById("ten");
const tip15 = document.getElementById("fifteen");
const tip25 = document.getElementById("twentyfive");
const tip50 = document.getElementById("fifty");
const tipCustom = document.getElementById("customTip");
const tipButton = document.querySelectorAll(".tipButton");

const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const resetButton = document.getElementById("resetBtn");

resetButton.classList.add("inactiveBtn");
resetButton.disabled = true;

// ON PAGE LOAD

this.onload = function () {
	document.getElementById("billErr").style.visibility = "hidden";
	document.getElementById("billErr").style.display = "none";
	document.getElementById("peopleErr").style.visibility = "hidden";
	document.getElementById("peopleErr").style.display = "none";
	document.getElementById("tipErr").style.visibility = "hidden";
	document.getElementById("tipErr").style.display = "none";

	bill.value = people.value = tipCustom.value = null;
};

this.onclick = function () {
	showResult();
};

bill.oninput = function () {
	showResult();
};

people.oninput = function () {
	showResult();
};
bill.onchange = function () {
	showResult();
};

people.onchange = function () {
	showResult();
};

// VALIDATION

bill.onfocus = function () {
	document.getElementById("billInput").style.outlineColor =
		"hsl(172, 67%, 45%)";
};
bill.onblur = function () {
	if (!bill.checkValidity()) {
		document.getElementById("billInput").style.outline = "2px solid red";
		document.getElementById("billInput").style.borderRadius = "5px";
		document.getElementById("billErr").style.visibility = "visible";
		document.getElementById("billErr").style.display = "block";
	} else {
		document.getElementById("billInput").style.outlineColor = "transparent";
		document.getElementById("billErr").style.visibility = "hidden";
		document.getElementById("billErr").style.display = "none";
	}
};

people.onfocus = function () {
	document.getElementById("peopleInput").style.outlineColor =
		"hsl(172, 67%, 45%)";
};
people.onblur = function () {
	if (!people.checkValidity()) {
		document.getElementById("peopleInput").style.outline = "2px solid red";
		document.getElementById("peopleInput").style.borderRadius = "5px";
		document.getElementById("peopleErr").style.visibility = "visible";
		document.getElementById("peopleErr").style.display = "block";
	} else {
		document.getElementById("peopleInput").style.outlineColor = "transparent";
		document.getElementById("peopleErr").style.visibility = "hidden";
		document.getElementById("peopleErr").style.display = "none";
	}
};

// FUNCTION
function showResult() {
	console.log(tipSelected);

	// RESULT CALCULATIONS
	if (bill.checkValidity() && people.checkValidity() && tipSelected >= 0) {
		let tipval = (bill.value / people.value) * (tipSelected / 100);
		let totalval = bill.value / people.value + tipval;
		tipAmount.innerText = "$" + tipval.toFixed(2);
		totalAmount.innerText = "$" + totalval.toFixed(2);

		resetButton.classList.remove("inactiveBtn");
		resetButton.classList.add("activeBtn");
		resetButton.disabled = false;
	} else {
		tipAmount.innerText = totalAmount.innerText = "$0.00";
	}
}

// RESET BUTTON CLICK
resetButton.addEventListener("click", function (e) {
	e.preventDefault();

	bill.value = people.value = "";
	tipAmount.innerText = totalAmount.innerText = "$0.00";
	resetButton.disabled = true;
	resetButton.classList.add("inactiveBtn");
	resetButton.classList.remove("activeBtn");
	tipSelected = 0;

	// REOMOVING CLASS NAME FOR VISUAL AID OF BUTTONS
	tipButton.forEach((el) => {
		el.classList.remove("active");
		el.classList.remove("custom");
	});
});

// BUTTON EVENTS
tip5.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.add("active");
	tipButton.forEach((el) => {
		if (el != this) {
			el.classList.remove("active");
			tipCustom.classList.remove("custom");
		}
	});

	tipSelected = this.value;
});
tip10.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.add("active");
	tipButton.forEach((el) => {
		if (el != this) {
			el.classList.remove("active");
			tipCustom.classList.remove("custom");
		}
	});
	tipSelected = this.value;
});
tip15.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.add("active");
	tipButton.forEach((el) => {
		if (el != this) {
			el.classList.remove("active");
			tipCustom.classList.remove("custom");
		}
	});
	tipSelected = this.value;
});
tip25.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.add("active");
	tipButton.forEach((el) => {
		if (el != this) {
			el.classList.remove("active");
			tipCustom.classList.remove("custom");
		}
	});
	tipSelected = this.value;
});
tip50.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.add("active");
	tipButton.forEach((el) => {
		if (el != this) {
			el.classList.remove("active");
			tipCustom.classList.remove("custom");
		}
	});
	tipSelected = this.value;
});
tipCustom.addEventListener("click", function (e) {
	e.preventDefault();
	this.classList.add("active");
	tipButton.forEach((el) => {
		if (el != this) {
			el.classList.remove("active");
			tipCustom.classList.remove("custom");
		}
	});
	if (this.value != "") {
		tipSelected = this.value;
	}

	tipCustom.addEventListener("change", function (e) {
		e.preventDefault();

		if (this.value >= 0) {
			this.classList.add("custom");
			tipSelected = this.value;
		} else {
			this.classList.remove("custom");
			tipSelected = null;
		}
	});
});
