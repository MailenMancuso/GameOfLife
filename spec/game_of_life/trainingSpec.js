var GameOfLife = require('../../lib/GameOfLife');

describe("Game Of Life", function(){
	it("should be a function", function(){
		expect(typeof GameOfLife).toBe("function");
	})

	it("should be an instance of Game Of Life", function(){
		let gameOfLife = new GameOfLife(); 
		expect(gameOfLife instanceof GameOfLife).toBe(true);
	})

	it("should set rows and columns numbers", function(){
		let gameOfLife = new GameOfLife(3,3);
		expect(gameOfLife.sizeX).toBe(3);
		expect(gameOfLife.sizeY).toBe(3);
	})	
})


