const operand = (char) => {
    let display = document.getElementById("display");
    display.value += char;
    clearError();
}

const numberClick = (char) => {
    let display = document.getElementById("display");
    display.value += char;
    clearError();
}

const clearDisplay = () => {
    document.getElementById('display').value = '';
    clearError();
}

const Backspace = () => {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    clearError();
}

const Result = () => {
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        display.value = eval(expression);
        clearError();
    } catch (err) {
        display.value = "";
        let error = `Error! ${expression} is not a valid expression.`;
        document.getElementById("error").innerText = error;
    }
}

const clearError = () => {
    document.getElementById("error").innerText = "";
}
