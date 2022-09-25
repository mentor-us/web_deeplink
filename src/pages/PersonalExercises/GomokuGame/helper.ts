import { SquareModel } from "./models";

class Helper {
    static initBoard(rows: number, columns: number):Array<Array<SquareModel>>{
        const result = new Array();
        for (let i = 0; i < rows; i++) {
        const col = new Array();
        for (let j = 0; j < columns; j++) {
            const element:SquareModel = {flag: null};
            col.push(element);
        }
        result.push(col);
        }
        return result;
    }

    static checkWin(boards: Array<Array<SquareModel>>): boolean{
        
        return false;
    }
}

export default Helper;