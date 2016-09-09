window.game = new Phaser.Game(608, 608, Phaser.AUTO, '', { create: create });

function create() {
	//initialize all the game states.
    game.state.add("Boot", require("./game/states/boot"));
    game.state.add("Preloader", require("./game/states/preloader"));
	game.state.add("Level", require("./game/states/level"));
    game.state.start("Boot");
};





