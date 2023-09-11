const allBtns = [...document.getElementsByClassName("btn")];

let strToDisplay = "";

const displaElm = document.querySelector(".display");
console.log(displaElm);

const operators = ["%", "/", "*", "+", "-"];

const lastOperator = "";

const audio = new Audio();

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    displaElm.style.background = "";
    displaElm.style.color = "";
    displaElm.classList.remove("prank");

    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      disply(strToDisplay);
      return;
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return disply(strToDisplay);
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];

      console.log(lastChar);

      if (operators.includes(lastChar)) {
        // when there is "=" in string
        // I cant put no more operator

        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (operators.includes(val)) {
      lastOperator = val;

      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        //remove the last char from the strToDisplay

        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    if (val === ".") {
      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
      console.log(lastOperator);
      // it will return index of

      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);
      console.log(lastNumberSet);

      if (lastNumberSet.includes(".")) {
        return;
      }
    }

    strToDisplay += val;
    disply(strToDisplay);
  });
});

const disply = (str) => {
  displaElm.innerText = str || "0.00";
};

const total = () => {
  const extraVal = randomNumber();
  if (extraVal) {
    audio.play();
    displaElm.style.background = "red";
    displaElm.style.color = "white";
    displaElm.classList.add("prank");
  }
  const ttl = eval(strToDisplay);
  disply(ttl);
  strToDisplay = ttl.toString();
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);

  return num < 3 ? num : 0;
};
