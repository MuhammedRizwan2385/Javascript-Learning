
// 1. Select HTML elements
const bmiForm = document.getElementById("bmiForm");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const errorMessage = document.getElementById("errorMessage");
const emptyState = document.getElementById("emptyState");
const resultContent = document.getElementById("resultContent");

const bmiValue = document.getElementById("bmiValue");
const categoryBadge = document.getElementById("categoryBadge");
const resultDescription = document.getElementById("resultDescription");
const bmiMarker = document.getElementById("bmiMarker");

// 2. Listen for form submission
bmiForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    // Clear previous error message
    errorMessage.textContent = "";

    // 3. Validate empty inputs
    if (
        heightInput.value.trim() === "" ||
        weightInput.value.trim() === ""
    ) {
        errorMessage.textContent =
            "Please enter both height and weight.";
        return;
    }

    // 4. Validate input ranges
    if (
        !Number.isFinite(height) ||
        !Number.isFinite(weight) ||
        height < 50 || height > 250 ||
        weight < 10 || weight > 300
    ) {
        errorMessage.textContent =
            "Enter height between 50–250 cm and weight between 10–300 kg.";
        return;
    }

    // 5. Calculate BMI
    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);

    // 6. Determine BMI category
    let category;
    let description;

    if (bmi < 18.5) {
        category = "Underweight";
        description =
            "Your BMI is below the usual adult reference range.";

    } else if (bmi < 25) {
        category = "Normal weight";
        description =
            "Your BMI is within the usual adult reference range.";

    } else if (bmi < 30) {
        category = "Overweight";
        description =
            "Your BMI is above the usual adult reference range.";

    } else {
        category = "Obesity";
        description =
            "Your BMI is in the adult obesity range.";
    }
   // Limit the marker position to the visible range
let markerPosition;

if (bmi < 18.5) {
    markerPosition = (bmi / 18.5) * 25;
} else if (bmi < 25) {
    markerPosition = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25;
} else if (bmi < 30) {
    markerPosition = 50 + ((bmi - 25) / (30 - 25)) * 25;
} else {
    markerPosition = 75 + ((bmi - 30) / 10) * 25;
}

markerPosition = Math.max(0, Math.min(100, markerPosition));

bmiMarker.style.left = markerPosition + "%";
    // 7. Display BMI result
    bmiValue.textContent = bmi.toFixed(2);

    categoryBadge.textContent = category;
    resultDescription.textContent = description;

    // 8. Change category badge colour
    categoryBadge.className = "category-badge";

    if (bmi < 18.5) {
        categoryBadge.classList.add("underweight");

    } else if (bmi < 25) {
        categoryBadge.classList.add("normal");

    } else if (bmi < 30) {
        categoryBadge.classList.add("overweight");

    } else {
        categoryBadge.classList.add("obesity");
    }

    // 9. Show result and hide initial message
    emptyState.classList.add("d-none");
    resultContent.classList.remove("d-none");

});


// 10. Reset calculator
bmiForm.addEventListener("reset", function () {

    errorMessage.textContent = "";

    emptyState.classList.remove("d-none");
    resultContent.classList.add("d-none");

});
