function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
        if (!isFinite(display.value)) {
            throw new Error("Math error");
        }
    } catch (error) {
        alert("Invalid input");
        clearDisplay();
    }
}