var stampColour = 'black';
var board = document.getElementById( "grid" );
var gridSize = 20;
var x = 0;


function setStampColour( stamp )
{
    stampColour = stamp;
}

function setCellColour( cell )
{
    cell.style.backgroundColor = stampColour;
}


function myfun()
{
    console.log("HELLO");
    var i = document.getElementById("30");
    i.style.backgroundColor = "red";
}
function draw()
{
    var v = [0,0,0,1,0,4];
    for ( var i=0; i < v.length; i+=2){
      var y = v[i];
      var x = v[i+1];
      var cell = document.getElementById(String(y*gridSize+x));
      cell.style.backgroundColor = "red";}
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
            
            html += `<div id=${i*gridSize+j} class="cell" onclick="setCellColour(this)">(${i}, ${j})</div>`;
            
            // Blank cells
    //         html += `<div class="cell" onclick="setCellColour(this)"></div>`;
        }
        
    html += '</div>';
  

}
html += '<button onclick="myfun()">myfun</button>';
html += '<button onclick="draw()">draw  </button>';
board.innerHTML = html;
