// function logName() {
//     console.log("Hasan")
// }

// // logName();

// // logName();



// function info() {
//     let name = prompt('Your name');
//     let surname = prompt('Your surname');
//     let age = prompt('Your age');

//     console.log(name, surname, age);
// }

// // setInterval(info, 5000)

// setTimeout(info, 2000);




// document.getElementById('infoText').style = 'width:200px; height:200px; background-color:red;'


// let textArray = document.getElementsByClassName('text');

// textArray[0].style = 'width:100px; height:100px; background-color: blue; border-radius: 100px;'
// textArray[1].style = 'width:100px; height:100px; background-color: red; border-radius: 100px;'

// for (let i = 0; i < textArray.length; i++) {
//     textArray[i].style = 'width:100px; height:100px; background-color: blue; border-radius: 100px;'

// }


// console.log(
//     document.getElementsByClassName('text')

// );



// let arr = document.querySelectorAll('div');

// for(let i = 0; i < arr.length; i++) {
//     arr[i].textContent = 'Abdurashid televizorga qara';
// }


let date = new Date();

console.log(date);

let today = date.getDate();

let month = date.getMonth();

let hour = date.getHours();

let minute = date.getMinutes();

console.log(hour);

console.log(minute);

console.log(month + 1);

console.log(today);

document.querySelector('.text').textContent = date;