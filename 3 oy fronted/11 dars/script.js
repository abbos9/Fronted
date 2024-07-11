// function showText() {
//     document.querySelector('.warning-text').textContent = 'Danger';
// }


// let second = 0;
// let minute = 0;

// function increment() {

//     if (second > 4) {
//         second = 0;
//     }

//     second++;

//     if (second == 1) {
//         minute++;
//     }
//     document.querySelector('.minute').textContent = minute;

//     document.querySelector('.second').textContent = second;

// }
// setInterval(increment, 1000);


// function changeBg() {
//     document.querySelector('body').style = 'background: red;';
// }


let btn = document.querySelector('button');




// let left = document.querySelector('.left');

// let left2 = document.querySelector('.left');

// let right = document.querySelector('.right');

let leftBox = document.getElementById('leftBox');

let rightBox = document.getElementById('rightBox');

function middleEast() {

    leftBox.style = 'background-color: red;';

    rightBox.style = 'background-color: blue;';
}


// let leftBox = document.getElementById('leftBox').style = 'background-color: red;';

// let rightBox = document.getElementById('rightBox').style = 'background-color: blue;';


// btn.addEventListener('click', middleEast);


// let btn = document.querySelector('button');

// function logNum() {
//     console.log(123);
// }
// btn.addEventListener('click', logNum);