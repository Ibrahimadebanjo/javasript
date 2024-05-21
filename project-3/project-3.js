// const button = document.querySelector('button');
// const paragragh = document.querySelectorAll('p');
// button.addEventListener('click',  updateName = () => {
//     const name = prompt('Please update name');
//     button.innerText = `player ${name}`;
// });
window.onload = () => {
    const heading = document.createElement('h1');
    const headingText = document.createTextNode("Big Header");
    heading.appendChild("headingText");
    document.body.appendChild(heading);
    }
   
    
//  var  x = 10;
  let x = "100" < "8";
 

    // function bar(){
    //     // let x =20;
        // foo(); 
    //  }
    // bar();
    console.log(x);
   


let clear = document.querySelector('.clear-text');
 let display = document.querySelector('.display-text');
 let textarea = document.querySelector('#textarea');

 display.addEventListener('click', () => {
 textarea.innerText = "Hey!! let X Algorithms  get you what you need ";
 });
 clear.addEventListener('click', () => {
    textarea.innerText = ""
    });
