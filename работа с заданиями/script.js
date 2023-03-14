// №1
function setText(class1, text) {
	let elem = document.querySelector('.'+class1);
	elem.textContent = text;
}
setText('p1', 'text1');
setText('p2', 'text2');
// №2
function setAttr(id, class1, value, text){
    let p3 = document.querySelector('#'+id);
    p3.setAttribute(class1, value);
    p3.textContent = text;
}
setAttr('p3','class', 'colorgreen', 'text');
function setText(selector, text) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
        let span = document.createElement('span');
        span.textContent = ' ' + text;
        elem.append(span);
		// elem.textContent = text;
	}
}
setText('.elem', 'text123123123');
// №1
function appendText(selector, text){
    let p4 = document.querySelectorAll(selector);
	
	for (let elem of p4) {
		elem.append(text);
	}
}
appendText('.p4', ' text');
// №1
forEach('.p5', function(elem) {
    elem.textContent += ' !';
});
function forEach(selector, func) {
	let p5 = document.querySelectorAll(selector);
	
	for (let elem of p5) {
		func(elem);
	}
}
// №1
forEach('.p6', function(p6, index) {
    p6.textContent = index + ' ' + p6.textContent;
});
function forEach(selector, func) {
	let p6 = document.querySelectorAll(selector);
	
	for (let i = 0; i < p6.length; i++) {
		func(p6[i], i);
	}
}
// №1
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

function appendText2(elem, text){
    elem.append(text);
}

appendText2(p7, 'Привет');
appendText2(p8, 'Пока');

// №2
function appendText3(elem){
    elem.append('!');
}
forEach('#p9', appendText3);
function forEach(selector, func) {
	let p9 = document.querySelectorAll(selector);
	
	for (let elem of p9) {
		appendText3(elem);
	}
}

// №3
setValue('#inp7', 'Привет');
function setValue(selector, text){
    document.querySelector(selector).value = text;
}
// №1
let p10 = document.querySelectorAll('.p10');
appendText4(p10, 'text');

function appendText4(elems, text){
    for (let elem of elems) {
		elem.append(text);
	}   
}

// №2
appendElem('#ul1', 'text')
function appendElem(selector, text){
    let ul = document.querySelector(selector)
    let li = document.createElement('li');
    li.append(text);
    ul.append(li);
}

// №3
appendElem2('#ul2', 'text');

function appendElem2(selector, text){
    let ul = document.querySelectorAll(selector)
    for (let elem of ul) {
        let li = document.createElement('li');
		li.append(text);
        elem.append(li);

	}   
}
// Возврат таблицы из функции 
let div5 = document.querySelector('#div5');
div5.appendChild(createTable2(3, 4));
// №1
function createTable2(rows, cols) {
	let table = document.createElement('table');
	
	// тут создадим таблицу с rows рядами и cols колонками
	for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
		for (let i = 0; i < cols; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
		}
        table.appendChild(tr);
	}
    return table;
}

// №2
let div6 = document.querySelector('#div6');
div6.appendChild(createTable2(3, 4));