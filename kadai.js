// let ok = document.querySelector('button#send');
// ok.addEventListener('click',hantei);

// function hantei() {
//     console.log('ok!')
// }
let color = 'rgb(248,248,248)';
let colorA = 'rgb(51, 51, 51)'
let colorB = 'rgb(229,72,0)';
let namae = document.querySelector('input#name');
let pasword = document.querySelector('input#pas');
let sign = document.querySelector('button#send');


namae.addEventListener('mouseover',linea);
namae.addEventListener('mouseleave',lineb);
pasword.addEventListener('mouseover',linec);
pasword.addEventListener('mouseleave',lined);
sign.addEventListener('click',uso);
sign.addEventListener('mouseover',hantenn);
sign.addEventListener('mouseleave',back);


function linea(){
    
    namae.style.borderBottomColor = colorB;
}
function lineb(){
    namae.style.borderBottomColor = colorA;
}


function linec(){
    pasword.style.borderBottomColor = colorB;
}
function lined(){
    pasword.style.borderBottomColor = colorA;
}



function hantenn() {
    
    sign.style.backgroundColor = color;
    sign.style.color = colorB;
}

function back() {
    sign.style.backgroundColor = colorB;
    sign.style.color = color;

}

function uso() {
    // let namae = document.querySelector('input#name');
    console.log('ユーザー名'+namae.value);
    namae.value="";

    // let pasword = document.querySelector('input#pas');
    console.log('パスワード'+pasword.value);
    pasword.value='';

}