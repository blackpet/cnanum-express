var a = 1;
var b = 2;

function add(no1, no2) {
    return no1 + no2;
}

console.log(add(a, b));

var ccc = 6;
var myno123 = 12;

add(ccc, myno123);


function 세차하자(a, b) {
    // ${a} 열심히 세차를 하자

    // 끝났으면 ${b}로 ${a}를 옮겨놓자
}

var a = ['할일1', '할일2', '할일3'];
var target = document.getElementById('t1');


function renderList(list, element) {
    var html = '';
    for(var i = 0; i < list.length; i++) {
        html += `<li>${list[i]}</li>`;
    }
    element.innerHTML = html;
}

renderList(a, target);