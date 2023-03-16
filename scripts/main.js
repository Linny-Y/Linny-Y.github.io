let myimg = document.querySelector('img');

myimg.onclick = function(){
    let imgSrc = myimg.getAttribute('src');
    if (imgSrc === 'images/cat1.jpg'){
        myimg.setAttribute('src','images/cat2.jpg');
    }
    else if(imgSrc === 'images/cat2.jpg'){
        myimg.setAttribute('src','images/cat1.jpg');
    }
    
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('请输入你的名字。');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }
// if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
// }
// myButton.onclick = function() {
//     setUserName();
//  }