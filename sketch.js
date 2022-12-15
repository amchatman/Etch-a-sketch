/*--Change the color from black and white to a random RGB color
--Create a function that populate the size of the board
*/
const canvasBoard = document.querySelector('#canvasBoard');

function populateCanvas(size){
  //Creates 16 columns
  canvasBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  //Creates 16 rows
  canvasBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  //16 x 16 = 256 
  for(i = 0; i < 256; i++){
  //Create a div 
    const gridCanvas = document.createElement('div');
    gridCanvas.style.backgroundColor = "green";
    canvasBoard.insertAdjacentElement('beforeend',gridCanvas);
  }
}
populateCanvas(16);
