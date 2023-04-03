"use strict";

// задание 1
var number = Number(prompt('Введите число'));
alert('Число в квадрате: ' + Math.pow(number, 2)); // задание 2

var numb1 = Number(prompt('Введите число'));
var numb2 = Number(prompt('Введите число'));
alert('Среднее арифметическое: ' + (numb1 + numb2) / 2); // задание 3

var leng = Number(prompt('Введите сторону квадрата'));
alert('Площадь квадрата: ' + Math.pow(leng, 2)); // задание 4

var km = Number(prompt('Введите количество километров'));
var ml = 0.621371;
alert(km + " \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u043E\u0432 = " + km * ml + " \u043C\u0438\u043B\u044C"); // задание 5

var num1 = Number(prompt('Введите первое число'));
var num2 = Number(prompt('Введите второе число'));
var action = prompt('Что сделать с этими числами?');
if (action == '+') alert(num1 + " + " + num2 + " = " + (num1 + num2));
if (action == '-') alert(num1 + " - " + num2 + " = " + (num1 - num2));
if (action == '/') alert(num1 + " / " + num2 + " = " + num1 / num2);
if (action == '*') alert(num1 + " * " + num2 + " = " + num1 * num2);
if (action != '+' && action != '-' && action != '/' && action != '*') alert('Пожалуйста, введите знак действия (+, -, *, /)'); // задание 6

var a = Number(prompt('Введите первое число (a)'));
var b = Number(prompt('Введите второе число (b)'));
alert(a + " * x + " + b + " = 0 \n x = " + -b / a); // задание 7

var hours = Number(prompt('Сколько сейчас часов?'));
var mins = Number(prompt('Сколько сейчас минут?'));

if (mins == 0) {
  mins = 60;
  hours--;
}

alert("\u0414\u043E \u043A\u043E\u043D\u0446\u0430 \u0434\u043D\u044F \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C " + (23 - hours) + " \u0447\u0430\u0441\u043E\u0432 \u0438 " + (60 - mins) + " \u043C\u0438\u043D\u0443\u0442"); // задание 8

var num = Math.abs(Number(prompt('Введите трехзначное число')));
var secondNum = Math.floor(num / 10) % 10;
alert("\u0412\u0442\u043E\u0440\u0430\u044F \u0446\u0438\u0444\u0440\u0430 \u0447\u0438\u0441\u043B\u0430: " + secondNum); // задание 9

var fiveNum = Number(prompt('Введите пятизначное число'));
var lastNum = String(fiveNum % 10);
fiveNum = fiveNum - fiveNum % 10;
var finalNum = Number(lastNum + fiveNum) / 10;
alert(finalNum); // задание 10

var sum = Number(prompt('Введите общую сумму продаж'));
var procent = sum * 0.1;
alert("\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 " + (250 + procent) + " $");