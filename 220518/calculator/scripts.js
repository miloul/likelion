// Input is two
const calculatorInputTwo = (operator) => {
    const num1 = Number(
        document.querySelector('#calculatorInputTwo .num1').value
    )
    const num2 = Number(
        document.querySelector('#calculatorInputTwo .num2').value
    )

    const result = eval(`${operator}(${num1}, ${num2})`)

    const print = document.querySelector('#calculatorInputTwo .print')
    print.innerHTML = result
}

const plus = (num1, num2) => num1 + num2
const minus = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2
const remain = (num1, num2) => num1 % num2
const involution = (num1, num2) => num1 ** num2

// Input is only one
const calculatorInputOne = (operator) => {
    const num = Number(document.querySelector('#calculatorInputOne .num').value)
    const result = eval(`${operator}(${num})`)
    const print = document.querySelector('#calculatorInputOne .print')
    print.innerHTML = result
}

const factorial = (num) => {
    let result = 1
    for (let i = 2; i <= num; i++) result *= i
    return result
}

const fibonacci = (num) => {
    let nextnum = 0
    let numFront = 1,
        numBehind = 1
    if (num === 1 || num === 2) {
        return 1
    } else {
        for (let i = 2; i < num; i++) {
            nextnum = numBehind + numFront
            numFront = numBehind
            numBehind = nextnum
        }
    }
    return nextnum
}

const primeNumber = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num}은 소수가 아닙니다.`
        }
    }
    if (num > 1) {
        return `${num}은 소수가 맞습니다.`
    } else {
        return `${num}은 소수가 아닙니다.`
    }
}

const luckyNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}