let input = document.getElementById('input')
let curInput = ""

function addInput(value) {
    curInput += value
    input.value = curInput
}

function addInputClear() {
    input.value = ''
    curInput = ''
}
function appOper(operator) {
    curInput += '' + operator + '';
    input.value = curInput
}

function addInputResult() {
    curInput = input.value
    input.value = eval(curInput)
}