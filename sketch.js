//Global variables
let color = "black";
let click = true;

function populateCanvas(size){
  const canvasBoard = document.querySelector('#canvasBoard');

  //Creates 16 columns
  canvasBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  //Creates 16 rows
  canvasBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const gridSize = size * size;

  //16 x 16 = 256 
  for(let i = 0; i < gridSize; i++){

    //Create a div 
    const gridCanvas = document.createElement('div');
    //Give the div the class of grid
    gridCanvas.classList.add('grid');

    //Create add listener on mouseover call colorCanvas function
    gridCanvas.addEventListener("mouseover",colorCanvas);

    gridCanvas.style.backgroundColor = "white";
    canvasBoard.insertAdjacentElement('beforeend',gridCanvas);
  }
}
populateCanvas(16);

//Change the canvas size base on the input
function changeCanvas(input){

  //Input must greater then 2 less then 100
   if(input >= 2 && input <= 100){
    document.querySelector(".error").style.display = "none";
    populateCanvas(input);
   }else{
    document.querySelector(".error").style.display = "flex";
   }
}
//Set the color of the mouseover 
function colorCanvas(){
  if(click){
     //sets the color to rainbow randomly
     if(color === "rainbow"){
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    }else{
      //sets the color
      this.style.backgroundColor = color;
    }
  }
}
//Change color
function changeColor(choice){
  color = choice;
}
//Clears the canvas board
function clearCanvas(){
  const canvasBoard = document.querySelector('#canvasBoard');
  const gridCanvas = canvasBoard.querySelectorAll('div');
  gridCanvas.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click',() =>{
  click = !click;
});