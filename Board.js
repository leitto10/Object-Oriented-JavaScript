class Board {

    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.space = this.createSpaces();
    }

    /**
     * Generates a 2D array of Spaces
     * @return {array} Array of spaces objects 
     */

     createSpaces(){
         const spaces = [];

         for(let x = 0; x < this.columns; x++){
             const colum = [];

             for(let y = 0; y < this.rows; y++){
                 const space = new Space(x, y);
                 column.push(space);
             }
             spaces.push(colum);
         }
         return spaces;
     }

     /** 
     * Draws associated SVG spaces for all game spaces.
     */
	drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
	} 



}