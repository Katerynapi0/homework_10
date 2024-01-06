'use strict'
//1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result = '';
for(let i = 10; i <= 20; i++) {
result += i + (i < 20 ? ', ' : '');
};
console.log(`1. Один рядок через кому від 10 до 20: 
${result}`);

//2. Вивести квадрати чисел від 10 до 20.
result = '';
for(let i = 10; i <= 20; i++) {
result += i * i + (i < 20 ? ', ' : '');
};
console.log(`2. Квадрат чисел від 10 до 20:
${result}`);

//3. Вивести таблицю множення на 7.
result = '';
console.log('3. Таблиця множення на 7:')
for ( let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${7 * i}`);
};

//4. Знайти суму всіх цілих чисел від 1 до 15.
result = Number('');
for(let i = 1; i <= 15; i++){
    result = result + i;
};
console.log(`4. Cума всіх цілих чисел від 1 до 15: ${result}`);

//5. Знайти добуток усіх цілих чисел від 15 до 35.
result = 1;
for(let i = 15; i <= 35; i++){
    result = result * i;
};
console.log(`5. Добуток усіх цілих чисел: ${result}`);

//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;
for(let i = 1; i <= 500; i++){
    sum += i;
};
const average = sum / 500;
console.log(`6. Середнє арифметичне всіх цілих від 1 до 500: ${average}`);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
sum = 0;
for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        sum += i;
    };
};
console.log(`7. Сума лише парних чисел від 30 до 80: ${sum}`);

//8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
result = '';
for(let i = 100; i <= 200; i++){
    if(i % 3 === 0){
    result += i + (i <= 200 - 3 ? ', ' : '');
    };
};
console.log(`8. Вивод всіх чисел в діапазоні від 100 до 200 кратні 3: ${result}`);

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
result = '';
const myNatureNumb = 36;
for(let i = 1; i <= myNatureNumb; i++){
    if(myNatureNumb % i === 0){
        result += i + (i < myNatureNumb ? ', ' : '')
    };
};
console.log(`9. Дільники числа 36: ${result}`)

// 10.Визначити кількість його парних дільників.
let divCount = 0;
for(let i = 1; i <= myNatureNumb; i++){
    if(myNatureNumb % i === 0 && i % 2 === 0){
        divCount += 1;
    };
};
console.log(`10. Кількість парних дільників числа 36: ${divCount}`);

// 11. Знайти суму його парних дільників.
let divCountSum = 0;
for(let i = 1; i <= myNatureNumb; i++){
    if(myNatureNumb % i === 0 && i % 2 === 0){
        divCountSum += i;
    };
};
console.log(`11. Сума парних дільників числа 36: ${divCountSum}`);

//12. Надрукувати повну таблицю множення від 1 до 10.
console.log(`12. Повна таблиця множення від 1 до 10: `)
for( let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    };
};