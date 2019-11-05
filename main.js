// let userName = prompt("Укажите ваше имя", "USERNAME");
// alert('Привет' + ' ' + userName + '!');



// const year = 2019;
// let answer;
// let old = prompt('В каком году у вас день рождение?', '1995');
// let a = confirm('Был ли у вас в этм году день рождение?');
// if (a) {
//     answer = year - old;
// } else {
//     answer = year - old - 1;
// }
// alert('Вам сейчас' + ' ' + answer + ' ' + 'лет!');




// let a = prompt('Укажите длину стороны квадрата в см', '10');
// let P = a * 4;
// alert('Периметр такого квадрата равен ' + P + ' см.');


// let r = prompt('Введите радиус окружности в см', '5');
// let S = r * r * 3.14;
// alert('Площадь круга с радиусом ' + r + ' приблизительно равна ' + S + ' кв. см.'); 


// let s = prompt('Какое расстояние вам нужно проехать? (в км', '500');
// let t = prompt('За какое время вы хотите добраться? (в часах)', '5.3');
// let v = (s / t).toFixed(1);

// alert('Вам нужно двигаться со скоростью приблизительно ' + v + ' км/час');


// const dollorEvro = 0.9;
// let doll = prompt('введите количество долларов ', '5');
// let evro = doll * dollorEvro;
// alert(doll + ' долларов = ' + evro + ' евро');

// const num = 840;
// let V = prompt('Введите объем вашей флешки (в ГБ)', '5');
// let answer = Math.floor(V * 1000 / 840);
// alert(`На вашу флешку объемом ${V}ГБ влезет ${answer} файлов`);

// let many = prompt('Какую сумму вы готовы потратить? (в грн)', '200');
// let price = prompt('Какова цена одной шоколадки? (в грн)', '9');
// let num = Math.floor(many / price);
// alert(`На сумму ${many} грн,по цене ${price}грн за одну шоколадку, вы можите приобрести максимум ${num} шоколадок(ки)`);

// let num = prompt('Введите трехзначное число', '123');
// let a = Math.floor(num / 100);
// let b = Math.floor((num % 100) / 10);
// let c = num % 10;
// alert(`${c}${b}${a}`);


const percent = 5;
let sum = prompt('Введите сумму вклада (в грн)', '2000');
let profit = (sum / 100 / 12 * 5 * 2).toFixed(2);
alert(`За два месяца с вашего вклада, размером ${sum}, вы получите чистой прибыли ${profit} грн`);
