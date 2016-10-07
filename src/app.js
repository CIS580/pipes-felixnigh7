"use strict";

/* Classes */
const Game = require('./game');
const Pipe = require('./pipes.js');

/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);
var image = new Image();
image.src = 'assets/pipes.png';
var background = new Image();
background.src = 'assets/background.png';
var score = 0;
var level= 0;
var board = [];
var pipes = [];
var water = [];
var startPipe;
var endPipe;
var x = 0;
var y = 0;

//var pipes[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var board[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < 10; i++) {
  board[i] = [];
}
for(var i = 0; i < 10; i++) {
  for(var j = 0; j < 10; j++) {
    board[i][j] = false;
  }
}

//startPipe = pipes.push(new Pipe("horizontal", {x:0, y:0} ));
//endPipe = pipes.push(new Pipe("end", {x :640, y:640} ));

canvas.onclick = function(event) {
  event.preventDefault();
  // TODO: Place or rotate pipe tile

}

/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
masterLoop(performance.now());


/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

  // TODO: Advance the fluid
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TODO: Render the board
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.font = "bold 16px Arial";
  ctx.fillText("Level: " + level, 850, 200);
  ctx.fillStyle = "black";
  ctx.font = "bold 16px Arial";
  ctx.fillText("Score: " + score, 850, 230);

}
