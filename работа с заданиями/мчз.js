// Модули через замыкания 

;(function() {
	let str = 'переменная модуля';
	
	function func() {
		alert('функция модуля');
	}
})();

// Тут переменные и функции модуля недоступны:
// alert(str);
// alert(func); 

// Практическое применение
;(function() {
	let elem = document.querySelector('#div1'); // первый див
	
	function func(num) {
		return num * num; // возведем в квадрат
	}
	
	elem.addEventListener('click', function() {
		this.textContent = func(elem.textContent);
	});
})();

;(function() {
	let elem = document.querySelector('#div2'); // второй див
	
	function func(num) {
		return num * num * num; // возведем в куб
	}
	
	elem.addEventListener('click', function() {
		this.textContent = func(elem.textContent);
	});
})();

;(function(selector1, selector2) {
	let div = document.querySelector(selector1);
	let btn = document.querySelector(selector2);
	
	function func(num) {
		return num * num;
	}
	
	btn.addEventListener('click', function() {
		div.textContent = func(div.textContent);
	});
})('#div3', '#button1');

// №1
;(function(selector1, selector2) {
	let inp1 = document.querySelectorAll(selector1);
	let button2 = document.querySelector(selector2);
    let sum = 0;
	button2.addEventListener('click', function() {
        for(let elem of inp1){
            // console.log(elem.value);
            sum += +elem.value;
        }
		console.log(sum);
	});
})('.inp1', '#button2');
// Передача родительского элемента в модуль через замыкания 
;(function(root) {
	let div8 = document.querySelector(root);
	
	let div4 = div8.querySelector('#div4');
	let div5 = div8.querySelector('#div5');
	let div6 = div8.querySelector('#div6');
	
	let div7  = div8.querySelector('#div7');
	let button3  = div8.querySelector('#button3');
	
	button3.addEventListener('click', function() {
		let num1 = +(div4.textContent);
		let num2 = +(div5.textContent);
		let num3 = +(div6.textContent);
		
		div7.textContent = num1 + num2 + num3;
	});
})('#div8');

// Передача настроек модуля через замыкания 
let config = {
    root:  '#div9',
    type:  'p',
    amount: 5
}
;(function({root, type, amount}) {
	let parent = document.querySelector(root);
	
	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
        elem.textContent = i;
		parent.append(elem);
	}
})(config);
// Параметры по умолчанию
let config2 = {
    root:  '#div10',
    amount: 10
}
;(function({root, type = 'p', amount = 5}) {
	let parent = document.querySelector(root);
	
	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
        elem.textContent = i;
		parent.append(elem);
	}
})(config2);
// Экспорт переменных и функций в модулях через замыкания 
;(function() {
	let str = 'переменная модуля';
	
	function func() {
		console.log('функция модуля');
	}
	
	window.func = func;
})();

func(); // выведет 'функция модуля'

// №1
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля2';
	let str3 = 'переменная модуля3';
	
	function func1() {
		console.log('функция модуля1');
	}
	function func2() {
		console.log('функция модуля2');
	}
	function func3() {
		console.log('функция модуля3');
	}
    window.str1 = str1;
    window.func2 = func2;
    window.func3 = func3;
})();
console.log(str1);
func2();
func3();

// Экспорт объекта
;(function() {
	function func4() {
		console.log('функция модуля4');
	}
	function func5() {
		console.log('функция модуля5');
	}
	function func6() {
		console.log('функция модуля6');
	}
	
	window.module = {func4, func5, func6};
})();
module.func4();
module.func5();

;(function() {
	let module2 = {};
	
	module2.func7 = function() {
		console.log('функция модуля7');
	}
	module2.func8 = function() {
		console.log('функция модуля8');
	}
	module2.func9 = function() {
		console.log('функция модуля9');
	}
	
	window.module2 = module2;
})();
module2.func7();

// №2
;(function() {
	let str1 = 'переменная модуля4';
	let str2 = 'переменная модуля5';
	let str3 = 'переменная модуля6';
	
	function func10() {
		console.log('функция модуля10');
	}
	function func11() {
		console.log('функция модуля11');
	}
	function func12() {
		console.log('функция модуля12');
	}
	function func13() {
		console.log('функция модуля13');
	}
	function func14() {
		console.log('функция модуля14');
	}

    window.module3 = {str1, str2, func10, func11, func12, func13, func14};
})();

console.log(module3.str1);

// Библиотеки через замыкания 
;(function() {
	function square(num) {
		return num ** 2;
	}
	function cube(num) {
		return num ** 3;
	}
	function avg(arr) {
		return sum(arr, 1) / arr.length;
	}
	function digitsSum(num) {
		return sum(String(num).split(''));
	}
	
	// вспомогательная функция
	function sum(arr) {
		let res = 0;
		
		for (let elem of arr) {
			res += +elem;
		}
		
		return res;
	}
	
	window.math = {square, cube, avg, digitsSum};
})();
console.log(math.avg([1, 2, 3]) + math.square(2));

// №1
;(function(){
    function avg1(arr) {
        return sum(arr, 1) / arr.length;
    }
    
    function avg2(arr) {
        return sum(arr, 2) / arr.length;
    }
    
    function avg3(arr) {
        return sum(arr, 3) / arr.length;
    }
    
    // вспомогательная функция
    function sum(arr, pow) {
        let res = 0;
        
        for (let elem of arr) {
            res += elem ** pow;
        }
        
        return res;
    }

    window.module4 = {avg1, avg2, avg3}
})();
console.log(module4.avg2([1,2,3,4,5]) + module4.avg3([1,2,3,4,5]));
