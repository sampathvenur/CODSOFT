let outputScreen = document.getElementById("output-screen");

function appendToScreen(value) {
    outputScreen.value += value;
}

function calculateResult() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid");
    }
}

function clearInput() {
    outputScreen.value = "";
}

function deleteLastChar() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}