(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./game":2,"./pipes.js":3}],2:[function(require,module,exports){
"use strict";

/**
 * @module exports the Game class
 */
module.exports = exports = Game;


/**
 * @constructor Game
 * Creates a new game object
 * @param {canvasDOMElement} screen canvas object to draw into
 * @param {function} updateFunction function to update the game
 * @param {function} renderFunction function to render the game
 */
function Game(screen, updateFunction, renderFunction) {
  this.update = updateFunction;
  this.render = renderFunction;

  // Set up buffers
  this.frontBuffer = screen;
  this.frontCtx = screen.getContext('2d');
  this.backBuffer = document.createElement('canvas');
  this.backBuffer.width = screen.width;
  this.backBuffer.height = screen.height;
  this.backCtx = this.backBuffer.getContext('2d');

  // Start the game loop
  this.oldTime = performance.now();
  this.paused = false;
}

/**
 * @function pause
 * Pause or unpause the game
 * @param {bool} pause true to pause, false to start
 */
Game.prototype.pause = function(flag) {
  this.paused = (flag == true);
}

/**
 * @function loop
 * The main game loop.
 * @param{time} the current time as a DOMHighResTimeStamp
 */
Game.prototype.loop = function(newTime) {
  var game = this;
  var elapsedTime = newTime - this.oldTime;
  this.oldTime = newTime;

  if(!this.paused) this.update(elapsedTime);
  this.render(elapsedTime, this.frontCtx);

  // Flip the back buffer
  this.frontCtx.drawImage(this.backBuffer, 0, 0);
}

},{}],3:[function(require,module,exports){
"use strict";

/**
 * @module exports the Pipe class
 */
module.exports = exports = Pipe;

function pipes(position, pipeType) {
this.x = position.x;
this.y = position.y;
this.width = 64;
this.height = 64;
this.spritesheet  = new Image();
this.pipeType = pipeType;

  switch(pipeType) {
      case 0:
        this.spritesheet.src = encodeURI('assets/leftBottomPipe.png');
        break;
      case 1:
        this.spritesheet.src = encodeURI('assets/leftTopPipe.png');
        break;
      case 2:
        this.spritesheet.src = encodeURI('assets/rightBottomPipe.png');
        break;
      case 3:
        this.spritesheet.src = encodeURI('assets/rightTopPipe.png');
        break;
      case 4:
        this.spritesheet.src = encodeURI('assets/leftRightPipe.png');
        break;
      case 5:
        this.spritesheet.src = encodeURI('assets/topBottomPipe.png');
        break;
    }
}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
*/
Pipe.prototype.update = function(elapsedTime) {

}

/**
 * @function renders the pip into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
 Pipe.prototype.render = function(time, ctx) {
	ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    0, 0, this.width*2, this.height*2,
    // destination rectangle
    this.x, this.y, this.width*2, this.height*2
  );
  //need to check if full of water.
}

},{}]},{},[1]);
