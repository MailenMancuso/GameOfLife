var GameOfLife = require('../../lib/GameOfLife');

describe("Game Of Life", function(){

	it("should be a function", function(){
		expect(typeof GameOfLife).toBe("function");
	})

	it("should be an instance of Game Of Life", function(){
		let gameOfLife = new GameOfLife(1,2); 
		expect(gameOfLife instanceof GameOfLife).toBe(true);
	})

	it("should set rows and columns numbers", function(){
		let gameOfLife = new GameOfLife(3,3);
		expect(gameOfLife.sizeX).toBe(3);
		expect(gameOfLife.sizeY).toBe(3);
	})

	it("should fail if rows are not set as numbers and smaller than one", function(){
		try {
			let gameOfLife = new GameOfLife("blabla",9);
		}
		catch(e) {
			expect(e instanceof TypeError).toBe(true);
		}
		try {
			let gameOfLife = new GameOfLife(0,9);
		}
		catch(e) {
			expect(e instanceof TypeError).toBe(true);
		}
	})
})


