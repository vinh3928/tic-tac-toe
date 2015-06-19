
var grid = document.getElementById("grid"),
  boxes = document.getElementsByClassName("box"),
  player1 = document.getElementById("player1"),
  player2 = document.getElementById("player2"),
  turn = document.getElementById("turn"),
  clicking = document.getElementById("clicking");

//setting up initial variables
var counter = "O",
  xArray = [],
  oArray = [],
  success = [
          [1,2,3],
          [4,5,6],
          [7,8,9],
          [1,4,7],
          [2,5,8],
          [3,6,9],
          [1,5,9],
          [3,5,7]
  ],
  score = { player1: 0, player2: 0};
// even listener on grid
grid.addEventListener("click", function (e) {
  clicking.play();
  if (e.target.className === "box" && counter === "O") {
    e.target.innerHTML = "<img src=\"img/O.jpg\"/>";
    // occupy-O is for no duplication of targeting
    e.target.className += " occupy-O"
    e.target.style.backgroundColor = "red";
    oArray.push(parseInt(e.target.id));
    xArray.sort();
    testWinner(oArray, "player1");
    counter = "X";
    turn.innerHTML = "Player 2"

  }
  else if (e.target.className === "box" && counter === "X") {
    e.target.innerHTML = "<img src=\"img/X.jpg\"/>";
    e.target.className += " occupy-X"
    e.target.style.backgroundColor = "red";
    xArray.push(parseInt(e.target.id));
    xArray.sort();
    testWinner(xArray, "player2");
    counter = "O";
    turn.innerHTML = "Player 1"
  }
});

var testWinner = function (array, player) {
  success.forEach(function (item, index) {
    var count = 0;
      item.forEach(function (ite, inde) {
        array.forEach(function (it, ind) {
          if (it === ite) {
            count ++;
          }
        });
        if (count === 3) {
          alert("We have a winner! chicken dinner");
          for (var i = 0; i < boxes.length; i ++) {
            boxes[i].innerHTML = "";
            boxes[i].className = "box";
            boxes[i].style.backgroundColor = "yellow";
          }
          score[player] = score[player] + 1;
          player1.innerHTML = score.player1;
          player2.innerHTML = score.player2;
          oArray = [];
          xArray = [];
        }
      });
  });
        if (array.length === 5 && oArray.length > 0) {
          alert("We have a Draw! Cats Game");
          for (var i = 0; i < boxes.length; i ++) {
            boxes[i].innerHTML = "";
            boxes[i].className = "box";
            boxes[i].style.backgroundColor = "yellow";
          }
          oArray = [];
          xArray = [];
        }
};
