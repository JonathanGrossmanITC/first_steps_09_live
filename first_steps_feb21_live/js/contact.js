const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const fileUpload = document.getElementById("fileUpload");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submitButton");

console.log("1", submitButton.disabled);

const onAnyInputChange = () => {
  // console.log(firstName.id, firstName.value);
  // console.log(lastName.id, lastName.value);
  // console.log(fileUpload.id, fileUpload.value);
  // console.log(checkbox.id, checkbox.checked);
  // console.log(submitButton.id, submitButton.classList);

  // submitButton.disabled = true;
  // console.log("2", submitButton.disabled);
  // You can conditionally call things based on conditions
  if (firstName.value != "") {
    submitButton.disabled = false;
  }
};

const onSubmit = () => {
  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    fileUpload.value !== "" &&
    checkbox.checked === true
  ) {
    console.log(firstName.id, firstName.value);
    console.log(lastName.id, lastName.value);
    console.log(fileUpload.id, fileUpload.value);
    console.log(checkbox.id, checkbox.checked);
    console.log(submitButton.id, submitButton.classList);
    console.log("Your form is complete.");
    const smallImage = document.getElementById("smallImage");
    smallImage.classList.remove("profile-image");
    smallImage.classList.add("profile-image-big");
    console.log(smallImage.classList);
  } else if (
    firstName.value !== "" ||
    lastName.value !== "" ||
    fileUpload.value !== "" ||
    checkbox.checked === true
  ) {
    console.log("Your form needs more information.");
  } else {
    console.log("Your form is empty");
  }
};

firstName.addEventListener("input", onAnyInputChange);
lastName.addEventListener("input", onAnyInputChange);
fileUpload.addEventListener("input", onAnyInputChange);
checkbox.addEventListener("input", onAnyInputChange);

submitButton.addEventListener("click", onSubmit);

// console.log(lastName);

const returnNumber = (input) => {
  const y = input * 10;
  return y;
};

// console.log(y);
// returnNumber(10);
// const theNumber = returnNumber(10);
// console.log(theNumber);
// console.log(y);
