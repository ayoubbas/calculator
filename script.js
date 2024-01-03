let inputs = document.querySelectorAll(".card__input");

const btnSubmit = document.querySelector(".card__button");

const testDay = (day) => {
  if (day && day > 0 && day <= 31) {
    return true;
  }
};
const testMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    return true;
  }
};
const testYear = (year) => {
  const currentYear = new Date().getFullYear();
  if (year && (year > 1900) && year > 0 && year <= currentYear) {
    return true;
  }
};

// validate inpuuts function
const validateInput = (day, month, year) => {
  let isValid = [false, false, false];

  if (!testDay(day)) {
    inputs[0].classList.add("card__input--error");
  } else {
    isValid[0] = true;
    inputs[0].classList.remove("card__input--error");
  }
  if (!testMonth(month)) {
    inputs[1].classList.add("card__input--error");
  } else {
    isValid[1] = true;
    inputs[1].classList.remove("card__input--error");
  }
  if (!testYear(year)) {
    inputs[2].classList.add("card__input--error");
  } else {
    isValid[2] = true;
    inputs[2].classList.remove("card__input--error");
  }
  console.log(isValid);
  return isValid.every((item) => item === true);
};

// calculate age function
const calculateAge = (year, month, day) => {
  const d = new Date();
  const birthdate = new Date(year, month, day);
  let age = d.getFullYear() - birthdate.getFullYear();
  const monthdif = d.getMonth() - birthdate.getMonth();

  if (monthdif < 0 || (monthdif === 0 && d.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
};

// handle click function
const clickSabmit = () => {
  const year = inputs[2].value;
  const month = inputs[1].value;
  const day = inputs[0].value;

  let resultSpan = document.querySelector(".card__resultValue");
  console.log(validateInput());
  if (validateInput(day, month, year)) {
    resultSpan.textContent = calculateAge(year, month, day);
  } else {
    resultSpan.textContent = "--";
  }
};

inputs.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    if (e.key == "Enter") clickSabmit();
  });
});
btnSubmit.addEventListener("click", clickSabmit);
