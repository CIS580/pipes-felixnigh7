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
