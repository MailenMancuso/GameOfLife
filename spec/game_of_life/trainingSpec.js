var GameOfLife = require('../../lib/GameOfLife');

describe("Game Of Life", function(){
	it("should be a function", function(){
		expect(typeof GameOfLife).toBe("function");
	})

	it("should be an instance of Game Of Life", function(){
		let gameOfLife = new GameOfLife(); 
		expect(gameOfLife instanceof GameOfLife).toBe(true);
	})	
})


