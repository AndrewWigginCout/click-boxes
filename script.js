var stampColour = 'black';
var board = document.getElementById( "grid" );
var gridSize = 20;
var x = 0;
var v = "";
var donut = [17,11,17,12,17,13,16,13,15,13,15,12,15,11,16,11];
var one_up = {"black": [0,5,0,6,0,7,0,8,0,9,0,10,1,3,1,4,1,11,1,12,2,2,2,13,3,1,3,14,4,1,4,14,5,0,6,0,7,0,8,0,9,0,10,0,11,1,11,2,11,3,12,2,13,2,14,3,15,4,15,5,15,6,15,7,15,8,15,9,15,10,15,11,14,12,13,13,12,13,11,12,11,13,11,14,10,15,9,15,8,15,7,15,6,15,5,15,10,4,10,5,10,6,10,7,10,8,10,9,10,10,10,11,11,6,12,6,11,9,12,9],
              "lightgreen": [1,5,1,6,1,7,1,8,2,5,2,6,2,7,2,8,3,4,3,5,3,6,3,7,3,8,3,9,4,3,4,4,4,8,4,9,4,10,5,1,5,2,5,3,6,1,6,2,6,3,7,2,7,3,8,3,8,4,9,3,10,3,10,2,9,4,9,5,9,6,9,7,9,8,9,9,9,10,9,11,8,10,8,9,8,8,7,9,7,10,6,9,6,10,6,11,5,9,5,10,5,11,5,12,5,13,5,14,6,14,10,12,10,13,10,14,9,14],
              "PeachPuff": [11,4,11,5,11,7,11,8,11,10,11,11,12,3,12,4,12,5,12,7,12,8,12,10,12,11,12,12,13,3,13,4,13,5,13,6,13,7,13,8,13,9,13,10,13,11,13,12,14,4,14,5,14,6,14,7,14,8,14,9,14,10,14,11]}

function setStampColour( stamp )
{
    stampColour = stamp;
    v+=stamp+","
}

function setCellColour( cell )
{
    cell.style.backgroundColor = stampColour;
    v+=cell.id+',';
    console.log(v);
    var textbox = document.getElementById( "area3" );
    textbox.innerHTML = v;
}

function draw(v)
{
    console.log("draw(v)");
    //var v = [0,0,0,1,0,4];
    for ( var i=0; i < v.length; i+=2){
      var y = v[i];
      var x = v[i+1];
      var cell = document.getElementById(`${y},${x}`);
      cell.style.backgroundColor = "black";}
}

function draw_from_object(n){
  for (color in n){
    for ( var i=0; i < n[color].length; i+=2){
      var x = n[color][i];
      var y = n[color][i+1];
      var cell = document.getElementById(`${x},${y}`);
      cell.style.backgroundColor = color;}}}

function debug(){
  console.log("debug");
  console.log(v);
}
function wipe(){
  v="";
  for ( var i = 0; i < gridSize; i++ ) {
    for ( var j = 0; j < gridSize; j++ ) {
      var cell = document.getElementById(`${i},${j}`);
      cell.style.backgroundColor = "white";}}
}
      

html = "";


for ( var i = 0; i < gridSize; i++ ) { //creates grid Column with limit of gridzize as loop variable 
    html += '<div class="row">';

        for ( var j = 0; j < gridSize; j++ ) { // Creates grid row
            x = x+1
            // Letters from "K"
            //var char = String.fromCharCode(75 + (i * gridSize + j));
            //html += `<div class="cell" onclick="setCellColour(this)">${char}</div>`;
            // Letters from "A"
            //var char = String.fromCharCode(65 + (i * gridSize + j));
            //html += `<div class="cell" onclick="setCellColour(this)">${char}</div>`;
            //(i, j) grid coordinates;
            
            html += `<div id=${i},${j} class="cell" onclick="setCellColour(this)">(${i}, ${j})</div>`;
            
            // Blank cells
    //         html += `<div class="cell" onclick="setCellColour(this)"></div>`;
        }
        
    html += '</div>';
  

}

board.innerHTML = html;

var button1 = document.getElementById("button1");
button1.onclick = wipe;

var button2 = document.getElementById("button2");
button2.onclick = function() {draw_from_object(one_up);};

var button3 = document.getElementById("button3");
button3.onclick = debug;


