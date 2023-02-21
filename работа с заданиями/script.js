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