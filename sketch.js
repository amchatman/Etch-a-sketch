/*Create  with a 16 x 16 grid of square divs.
  --Divs must be created with JavaScript
  --The 16 x 16 should be in  a another provide by html
  --Be able to change the size of grid on a click of a button
    up to 64 x 64.
  --Change the color from black and white to a random RGB color
*/
const canvasBoard = document.querySelector('#canvasBoard');

//Creates 16 columns
canvasBoard.style.gridTemplateColumns = "repeat(16, 1fr)";
//Creates 16 Rows
canvasBoard.style.gridTemplateRows = "repeat(16, 1fr)";

//16 x 16 = 256 
for(i = 0; i < 256; i++){
  const gridCanvas = document.createElement('div');
  gridCanvas.style.backgroundColor = "green";
  canvasBoard.insertAdjacentElement('beforeend',gridCanvas);
 
}
