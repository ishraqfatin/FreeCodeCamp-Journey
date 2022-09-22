// VARIABLES DECLARATION
const usrName = document.getElementById("nameInput");
const cardNum = document.getElementById("cardNumberInput");
const month = document.getElementById("monthInput");
const year = document.getElementById("yearInput");
const cvc = document.getElementById("cvcInput");

// FUNCTIONS DECLARATION

function pagechange(frompage, topage) {
  var page = document.getElementById("formpage_" + frompage);
  var button = document.getElementById("submitBtn_" + frompage);
  if (!page) {
    return false;
  }
  page.style.visibility = "hidden";
  page.style.display = "none";
  button.style.visibility = "hidden";
  button.style.display = "none";

  page = document.getElementById("formpage_" + topage);
  button = document.getElementById("submitBtn_" + topage);
  if (!page) {
    return false;
  }
  page.style.display = "block";
  page.style.visibility = "visible";
  button.style.display = "block";
  button.style.visibility = "visible";

  return true;
}

function resetCardView() {
  document.getElementById("nameOnCard").innerHTML = "Jane Appleseed";
  document.getElementById("numOnCard").innerHTML = "0000 0000 0000 0000";
  document.getElementById("monthOnCard").innerHTML = "00";
  document.getElementById("yearOnCard").innerHTML = "00";
  document.getElementById("cvcOnCard").innerHTML = "000";
}

function resetInputFields() {
  usrName.value = "";
  cardNum.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
}

function isValid() {
  let flag = true;

  if (!usrName.checkValidity()) {
    document.getElementById("nameError").innerHTML = "Can't be Empty";
    document.getElementById("nameInput").style.borderColor = "red";
    flag = false;
  }
  if (!cardNum.checkValidity()) {
    document.getElementById("cardNumError").innerHTML =
      "Wrong format, numbers only";
    document.getElementById("cardNumberInput").style.borderColor = "red";
    flag = false;
  }
  if (!month.checkValidity()) {
    document.getElementById("dateError").innerHTML = "Can't be Empty";
    document.getElementById("monthInput").style.borderColor = "red";
    flag = false;
  }
  if (!year.checkValidity()) {
    document.getElementById("dateError").innerHTML = "Can't be Empty";
    document.getElementById("yearInput").style.borderColor = "red";
    flag = false;
  }
  if (!cvc.checkValidity()) {
    document.getElementById("cvcError").innerHTML = "Can't be Empty";
    document.getElementById("cvcInput").style.borderColor = "red";
    flag = false;
  }

  if (flag === false) {
    return false;
  } else {
    return true;
  }
}

// ON PAGE LOAD

window.onload = (event) => {
  resetCardView();
  resetInputFields();

  console.log("The page has fully loaded");
};

// VALIDITY CHECK ON SUBMIT BUTTON CLICK

document.getElementById("submitBtn_1").addEventListener("click", function (e) {
  e.preventDefault();

  if (isValid()) {
    pagechange(1, 2);
  } else {
    return;
  }
});

// COMPLETE STATE BUTTON EVENT

document.getElementById("submitBtn_2").addEventListener("click", function (e) {
  e.preventDefault();
  pagechange(2, 1);
  resetCardView();
  resetInputFields();
});

// VALIDITY CHECK ON INPUT BOX CLICK

usrName.onfocus = function () {
  this.style.borderColor = "black";
  document.getElementById("nameError").innerHTML = "";
};
usrName.onblur = function () {
  if (!this.checkValidity()) {
    this.style.borderColor = "red";
    document.getElementById("nameError").innerHTML = "Can't be Empty";
  } else {
    this.style.borderColor = "hsl(270, 2%, 82%)";
    document.getElementById("nameError").innerHTML = "";
  }
};

cardNum.onfocus = function () {
  this.style.borderColor = "black";
  document.getElementById("cardNumError").innerHTML = "";
};
cardNum.onblur = function () {
  if (!this.checkValidity()) {
    this.style.borderColor = "red";
    document.getElementById("cardNumError").innerHTML =
      "Wrong format, numbers only";
  } else {
    this.style.borderColor = "hsl(270, 2%, 82%)";
    document.getElementById("cardNumError").innerHTML = "";
  }
};

month.onfocus = function () {
  this.style.borderColor = "black";
  document.getElementById("dateError").innerHTML = "";
};
month.onblur = function () {
  if (!this.checkValidity()) {
    this.style.borderColor = "red";
    document.getElementById("dateError").innerHTML = "Can't be Empty";
  } else {
    this.style.borderColor = "hsl(270, 2%, 82%)";
    document.getElementById("dateError").innerHTML = "";
  }
};

year.onfocus = function () {
  this.style.borderColor = "black";
  document.getElementById("dateError").innerHTML = "";
};
year.onblur = function () {
  if (!this.checkValidity()) {
    this.style.borderColor = "red";
    document.getElementById("dateError").innerHTML = "Can't be Empty";
  } else {
    this.style.borderColor = "hsl(270, 2%, 82%)";
    document.getElementById("dateError").innerHTML = "";
  }
};

cvc.onfocus = function () {
  this.style.borderColor = "black";
  document.getElementById("cvcError").innerHTML = "";
};
cvc.onblur = function () {
  if (!this.checkValidity()) {
    this.style.borderColor = "red";
    document.getElementById("cvcError").innerHTML = "Can't be Empty";
  } else {
    this.style.borderColor = "hsl(270, 2%, 82%)";
    document.getElementById("cvcError").innerHTML = "";
  }
};

// DYNAMICALLY UPDATE CARD PREVIEW

usrName.addEventListener("input", function (e) {
  if (usrName.value === "") {
    document.getElementById("nameOnCard").innerHTML = "Jane Appleseed";
  } else {
    document.getElementById("nameOnCard").innerHTML = this.value;
  }
});

cardNum.addEventListener("input", function (e) {
  // console.log(e);
  // e.preventDefault();

  if (cardNum.value === "") {
    document.getElementById("numOnCard").innerHTML = "0000 0000 0000 0000";
  } else {
    if (
      e.inputType != "deleteContentBackward" &&
      this.value.match(/\S/g).length % 4 == 0
    ) {
      this.value += " ";
    }

    document.getElementById("numOnCard").innerHTML = this.value;
  }
});

month.addEventListener("input", function (e) {
  if (month.value === "") {
    document.getElementById("monthOnCard").innerHTML = "00";
  } else {
    document.getElementById("monthOnCard").innerHTML = this.value;
  }
});
year.addEventListener("input", function (e) {
  if (month.value === "") {
    document.getElementById("yearOnCard").innerHTML = "00";
  } else {
    document.getElementById("yearOnCard").innerHTML = this.value;
  }
});

cvc.addEventListener("input", function (e) {
  if (cvc.value === "") {
    document.getElementById("cvcOnCard").innerHTML = "000";
  } else {
    document.getElementById("cvcOnCard").innerHTML = this.value;
  }
});
