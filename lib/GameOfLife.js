class GameOfLife {
	constructor(x, y){
		if(isNaN(x) || x < 1) {
			throw new TypeError("Invalid row");
		}
		this.sizeX = x;
		this.sizeY = y;
	}
}
module.exports = GameOfLife;
