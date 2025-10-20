
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")
let b0 = document.getElementById("b0")

let bplus = document.getElementById("bplus")
let bminus = document.getElementById("bminus")
let bx = document.getElementById("bx")
let bdiv = document.getElementById("bdiv")


let bdel = document.getElementById("bdel")
let bac = document.getElementById("bac")
let bequal = document.getElementById("bequal")

let boff = document.getElementById("boff")
let bon = document.getElementById("bon")

// let displayContainer = document.getElementById("displayContainer")

// const slideArray = (arrayBase, operator) => {

//     let checkIndex = arrayBase.indexOf(operator)

//     let value1 = arrayBase.slice(0, checkIndex)
//     let value2 = arrayBase.slice(checkIndex + 1, arrayBase.length)

//     let valueTotal = Number(value1.join("")) + Number(value2.join(""))
//     displayContainer.innerHTML = valueTotal
//     number.push(valueTotal)
//     return valueTotal

// }

// const moreDates = (array, operator) => {
//     let count = ""
//     let newContainer = []

//     array.forEach(num => {

//         if (num === operator) {
//             newContainer.push(Number(count))
//             console.log(count)
//             count = ""
//         } else {
//             console.log(num)
//             count += num
//         }


//     })
//     newContainer.push(Number(count))


//     let totalNum = newContainer.reduce((countF, numF) => countF + numF, 0)
//     displayContainer.innerHTML = totalNum
//     number = []

//     number.push(totalNum)
//     newContainer = []
//     console.log(totalNum)

//     return totalNum


// }

const operatorCalculator = (array) => {

    let operatorsToken = ["+", "-", "*", "/"]
    let items = ""
    let newArray = []
    let newArrayOperators = []

    array.forEach(num => {
        if (operatorsToken.includes(num)) {
            console.log("found Items", items)
            newArray.push(items)
            newArrayOperators.push(num)
            items = ""
        } else {
            items += num
        }
    })
    newArray.push(items)
    console.log(newArray)
    console.log(newArrayOperators)


    let result
    let result1

    while (newArrayOperators.includes("*") || newArrayOperators.includes("/")) {

        let index = newArrayOperators.includes("*") ? newArrayOperators.indexOf("*") : newArrayOperators.indexOf("/")

        let num = Number(newArray[index])
        let num1 = Number(newArray[index + 1])

        if (newArrayOperators[index] === "*") {
            result = num * num1
        } else {
            result = num / num1
        }

        newArray.splice(index, 2, String(result))
        newArrayOperators.splice(index, 1)

        console.log(newArray)
        console.log(newArrayOperators)
    }



    while (newArrayOperators.includes("+") || newArrayOperators.includes("-")) {

        let indexSR = newArrayOperators.includes("+") ? newArrayOperators.indexOf("+") : newArrayOperators.indexOf("-")
        let num2 = Number(newArray[indexSR])
        let num3 = Number(newArray[indexSR + 1])

        if (newArrayOperators[indexSR] === "+") {
            result1 = num2 + num3
        } else {
            result1 = num2 - num3
        }

        newArray.splice(indexSR, 2, result1)
        newArrayOperators.splice(indexSR, 1)
        console.log(newArray)
        console.log(newArrayOperators)


    }

    let totalTerce = result !== undefined ? result : result1;

    displayContainer.innerHTML = totalTerce
    array.length = 0
    array.push(totalTerce)
    newArray = []
    newArrayOperators = []

    console.log("new Array", newArray)
    console.log("new Operations", newArrayOperators)
    console.log("myArray", array)

    return totalTerce

}

let number = []

boff.onclick = () => {
    displayContainer.innerHTML = "OFF"

    let allButtons = document.querySelectorAll("button")
    allButtons.forEach(btn => {
        if (btn.id !== "bon") {
            btn.disabled = true
            console.log(btn.id)
        }
    })
    number.length = 0
    document.querySelector(".calculatorContainer").classList.add("off")

}

bon.onclick = () => {
    displayContainer.innerHTML = "Welcome Back"
    let allButtons = document.querySelectorAll("button")
    allButtons.forEach(btn => {
        btn.disabled = false
    })
    number.length = 0

    document.querySelector(".calculatorContainer").classList.remove("off")

}

bac.onclick = () => {
    number = []
    displayContainer.innerHTML = number

}

bdel.onclick = () => {

    if (number.length === 0) return

    if (number.length === 1) {
        let value = String(number[0])
        value = value.slice(0, -1);

        if (value === "") {
            number = []
            displayContainer.innerHTML = ""
        } else {
            number[0] = value
            displayContainer.innerHTML = value
        }
    } else {
        number.pop()
        displayContainer.innerHTML = number.join("")
          

    }
}


b0.onclick = () => {
    let value = b0.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

b1.onclick = () => {
    let value = b1.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

b2.onclick = () => {
    let value = b2.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}
b3.onclick = () => {
    let value = b3.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

b4.onclick = () => {
    let value = b4.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}
b5.onclick = () => {
    let value = b5.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

b6.onclick = () => {
    let value = b6.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}
b7.onclick = () => {
    let value = b7.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}
b8.onclick = () => {
    let value = b8.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}
b9.onclick = () => {
    let value = b9.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

bplus.onclick = () => {

    let value = bplus.value
    number.push(value)
    displayContainer.innerHTML = number.join("")

}

bminus.onclick = () => {
    let value = bminus.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

bx.onclick = () => {
    let value = bx.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}

bdiv.onclick = () => {
    let value = bdiv.value
    number.push(value)
    displayContainer.innerHTML = number.join("")
}


bequal.onclick = () => {
    // slideArray(number, "+")
    // moreDates(number, "+")
    operatorCalculator(number)
}


