const MAX__NUMBER = 10
const MIN__NUMBER = -10

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
    const newValue = parseInt(number.value) - 1
    number.value = newValue;

    if (newValue <= MIN__NUMBER) {
        add.disabled = true
    } else {
        add.disabled = false
    }
}

const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue;

    if (newValue >= MAX__NUMBER) {
        add.disabled = true
    } else {
        add.disabled = false
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click' , addHandler)