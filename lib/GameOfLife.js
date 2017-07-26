class GameOfLife {
	constructor(x, y){
		if(isNaN(x) || x < 1) {
			throw new TypeError("Invalid numbers of row");
		}
		if(isNaN(y) || y < 1) {
			throw new TypeError("Invalid numbers of column");
		}
		this.sizeX = x;
		this.sizeY = y;
	}
}
module.exports = GameOfLife;
