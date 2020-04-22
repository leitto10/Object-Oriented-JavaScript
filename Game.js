class Game {
    constructor(){
        this.borad = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Create two players object
     * @return {array} Anarray of tow objects
    */

    createPlayers(){
        const players = [new Player('player 1', 1, '#e15258', true),
                        new Player('Player 2', 2, '#e59a13')];
        return players;
    }

    /**
     * Gets the ready for play
     */
    startGame (){

    }
}