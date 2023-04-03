// задание 1
let number = Number(prompt('Введите число'))
alert('Число в квадрате: ' + number ** 2)

// задание 2
let numb1 = Number(prompt('Введите число'))
let numb2 = Number(prompt('Введите число'))
alert('Среднее арифметическое: ' + (numb1 + numb2)/2)

// задание 3
let leng = Number(prompt('Введите сторону квадрата'))
alert('Площадь квадрата: ' + leng ** 2)

// задание 4
let km = Number(prompt('Введите количество километров'))
let ml = 0.621371
alert(`${km} километров = ${km * ml} миль`)

// задание 5
let num1 = Number(prompt('Введите первое число'))
let num2 = Number(prompt('Введите второе число'))
let action = prompt('Что сделать с этими числами?')
if(action == '+') alert(`${num1} + ${num2} = ${num1 + num2}`)
if(action == '-') alert(`${num1} - ${num2} = ${num1 - num2}`)
if(action == '/') alert(`${num1} / ${num2} = ${num1 / num2}`)
if(action == '*') alert(`${num1} * ${num2} = ${num1 * num2}`)
if(action != '+' && action != '-' && action != '/' && action != '*') alert('Пожалуйста, введите знак действия (+, -, *, /)')

// задание 6
let a = Number(prompt('Введите первое число (a)'))
let b = Number(prompt('Введите второе число (b)'))
alert(`${a} * x + ${b} = 0 \n x = ${-b/a}`)

// задание 7
let hours = Number(prompt('Сколько сейчас часов?'))
let mins = Number(prompt('Сколько сейчас минут?'))
if(mins == 0) {
  mins = 60
  hours--
}
alert(`До конца дня осталось ${23 - hours} часов и ${60 - mins} минут`)

// задание 8
let num = Math.abs(Number(prompt('Введите трехзначное число')))
let secondNum = Math.floor(num / 10) % 10
alert(`Вторая цифра числа: ${secondNum}`)

// задание 9
let fiveNum = Number(prompt('Введите пятизначное число'))
let lastNum = String(fiveNum % 10)
fiveNum = fiveNum - fiveNum % 10
let finalNum = Number((lastNum + fiveNum))/10
alert(finalNum)

// задание 10
let sum = Number(prompt('Введите общую сумму продаж'))
let procent = sum * 0.1
alert(`Зарплата составляет ${250 + procent} $`)
