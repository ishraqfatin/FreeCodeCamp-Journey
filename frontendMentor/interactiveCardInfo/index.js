const usrname = document.getElementById("nameInput");
const cardNum = document.getElementById("cardNumberInput");
const month = document.getElementById("monthInput");
const year = document.getElementById("yearInput");
const cvv = document.getElementById("cvcInput");

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  if (usrname.value === "") {
    document.getElementById("nameError").innerHTML = "Can't be Empty";
  }
  if (cardNum.value === "") {
    document.getElementById("cardNumError").innerHTML =
      "Wrong format, numbers only";
  }
  if (month.value === "") {
    document.getElementById("dateError").innerHTML = "Can't be Empty";
  }
  if (year.value === "") {
    document.getElementById("dateError").innerHTML = "Can't be Empty";
  }
  if (cvv.value === "") {
    document.getElementById("cvcError").innerHTML = "Can't be Empty";
  }
});

document
  .getElementById("cardNumberInput")
  .addEventListener("input", function (e) {
    e.preventDefault();
    if (cardNum.value === "") {
      document.getElementById("numOnCard").innerHTML = "0000 0000 0000 0000";
    } else {
      let spaceVal = cardNum.value.toString();

      //   cardNum.onkeyup = function () {
      //     if (cardNum.value.length >= 0) {
      //       if (cardNum.value.length % 4 == 0) {
      //         cardNum.value += " ";
      //       }
      //     }
      //     console.log(spaceVal);
      //   };

      document.getElementById("numOnCard").innerHTML = spaceVal;
    }
  });

console.log(year.value);
