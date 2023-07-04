const canvas= document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dan= document.createElement('img');
const rifke= document.createElement('img');

dan.src ='images/m1.png';
rifke.src ='images/m2.png';

let paintbrush = dan;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {

const left = event.clientX;
const top = event.clientY;

context.drawImage(paintbrush,left,top);

}

const handleClick = () => {
  if (paintbrush=== dan) {
    paintbrush=rifke;
  } else {
    paintbrush=dan;
  }
}
canvas.addEventListener('click',handleClick)
canvas.addEventListener('mousemove',handleMouseMove);