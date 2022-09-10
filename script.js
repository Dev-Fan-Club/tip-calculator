const billInputElement = document.getElementById("bill-input");
const customPercentageInputElement = document.getElementById("custom-input");

billInputElement.addEventListener("click", () => {
    billInputElement.select();
});

customPercentageInputElement.addEventListener("focusin", () => {
    customPercentageInputElement.value = 0.0;
    customPercentageInputElement.select();
    customPercentageInputElement.style.textAlign = "right";
});
