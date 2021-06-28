/*

1. название переменных
	sum1 - summaUsluga1
2. Дублирование кода

event - onchange

познакомиться с git
https://git-scm.com/book/ru/v2
первые три главы

*/

/*var sum1=0;
var sum2=0;
var sum3=0;
var sum4=0;

var sum5;*/

var text = 'Стоимость работ';
var symb = 'р.';

/*var price = {
	1: [
		2,
		3,
		5
	],

	2: [
		2,
		4,
		6
	],

	3: [
		3,
		10,
		30
	],

	4: [
		30,
		60,
		90
	],
};

function getPrice(indexUslugi) {
	console.log(indexUslugi);

	var summa = 0;

	price[indexUslugi].forEach( function(element, index) {
		var s = 'u' + indexUslugi + 'p' + index;
		var count = document.getElementById(s).value;
		summa = summa + (count*element);

		console.log(index + ' : ' + element + ' : ' + count);
});
    

    

	console.log('=====================');
	console.log('summa : ' + summa);

	return summa;
}



function sendAlert(indexUslugi) {
	console.log(event)
	alert(text + ' ' + getPrice(indexUslugi) + ' ' + symb);
}

function f5() {
 	sum5 = 0;
 	sum5 = getPrice(1) + getPrice(2) + getPrice(3) + getPrice(4);
	alert('Итоговая стоимость' + ' ' + sum5 + ' ' + 'р.');
}*/

		

		var itog;

 function onFunc() {
    	k1= document.getElementById('u1p0').value;
    	k1 = Number(k1);
    	k1 = (k1*2);
    	
    	k2 = document.getElementById('u1p1').value;
    	k2 = Number(k2);
    	k2 = (k2*3);

    	k3 = document.getElementById('u1p2').value;
    	k3 = Number(k3);
    	k3 = (k3*5);

    	summaUsluga1 = (k1 + k2 + k3);
	
    	document.getElementById("kab").innerHTML = text + ' ' + summaUsluga1 + ' ' + symb;


    	sh1 = document.getElementById('u2p0').value;
    	sh1 = Number(sh1);
    	sh1 = (sh1*2);

    	sh2 = document.getElementById('u2p1').value;
    	sh2 = Number(sh2);
    	sh2 = (sh2*4);

    	sh3 = document.getElementById('u2p2').value;
    	sh3 = Number(sh3);
    	sh3 = (sh3*6);

    	summaUsluga2 = (sh1 + sh2 + sh3);

    	document.getElementById('sht').innerHTML = text + ' ' + summaUsluga2 + ' ' + symb;


    	us1 = document.getElementById('u3p0').value;
    	us1 = Number(us1);
    	us1 = (us1*3);

    	us2 = document.getElementById('u3p1').value;
    	us2 = Number(us2);
    	us2 = (us2*10);

    	us3 = document.getElementById('u3p2').value;
    	us3 = Number(us3);
    	us3 = (us3*30);

    	summaUsluga3 = (us1 + us2 + us3);

    	document.getElementById('ust').innerHTML = text + ' ' + summaUsluga3 + ' ' + symb;


    	sch1 = document.getElementById('u4p0').value;
    	sch1 = Number(sch1);
    	sch1 = (sch1*30);

    	sch2 = document.getElementById('u4p1').value;
    	sch2 = Number(sch2);
    	sch2 = (sch2*60);

    	sch3 = document.getElementById('u4p2').value;
    	sch3 = Number(sch3);
    	sch3 = (sch3*90);

    	summaUsluga4 = (sch1 + sch2 + sch3);

    	document.getElementById('scht').innerHTML = text + ' ' + summaUsluga4 + ' ' + symb;


    	itog = summaUsluga1 + summaUsluga2 + summaUsluga3 + summaUsluga4;
    	document.getElementById("out").innerHTML = 'Итоговая стоимость' + ' ' + itog + ' ' + 'р.';
    }

 
 	