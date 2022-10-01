import { PointModel, SquareModel } from "./models";
import isEqual from 'react-fast-compare';
class Helper {
    static initBoard(rows: number, columns: number):Array<Array<SquareModel>>{
        const result = new Array();
        for (let i = 0; i < rows; i++) {
        const col = new Array();
        for (let j = 0; j < columns; j++) {
            const element:SquareModel = {flag: null, keyOfWin: false};
            col.push(element);
        }
        result.push(col);
        }
        return result;
    }

    static findWinSquares(boards: Array<Array<SquareModel>>, p: PointModel): Array<PointModel>{
        let winSquares: Array<PointModel>;
        let _y: number = 0, _x:number = 0;
        
        // By Row
        winSquares = new Array();
        _x = p._x;
        _y = p._y - 1;
        while(_y >= 0 && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _y--;
        }
        _y = p._y + 1;
        while(_y < boards.length && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _y++;
        }
        if(winSquares.length == 4) {
            console.log("By Row", boards[p._x][p._y]);
            winSquares.push(p);
            return winSquares;
        }

        // By Column
        winSquares = new Array();
        _x = p._x - 1;
        _y = p._y;
        while(_x >= 0 && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _x--;
        }
        _x = p._x + 1;
        while(_x < boards.length && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _x++;
        }
        if(winSquares.length == 4) {
            console.log("By Column", boards[p._x][p._y]);
            winSquares.push(p);
            return winSquares;
        }

        // Main diagonal
        winSquares = new Array();
        _x = p._x - 1;
        _y = p._y - 1;
        while(_x >= 0 && _y >= 0 && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _x--;
            _y--;
        }
        _x = p._x + 1;
        _y = p._y + 1;
        while(_x < boards.length && _y < boards.length && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _x++;
            _y++;
        }
        if(winSquares.length == 4) {
            console.log("Main diagonal", boards[p._x][p._y]);
            winSquares.push(p);
            return winSquares;
        }

        // Auxiliary diagonal
        winSquares = new Array();
        _x = p._x - 1;
        _y = p._y + 1;
        while(_x >= 0 && _y < boards.length && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _x--;
            _y++;
        }
        _x = p._x + 1;
        _y = p._y - 1;
        while(_x < boards.length && _y >= 0 && isEqual(boards[p._x][p._y], boards[_x][_y])){
            winSquares.push({_x, _y});
            _x++;
            _y--;
        }
        if(winSquares.length == 4) {
            console.log("Auxiliary diagonal", boards[p._x][p._y]);
            winSquares.push(p);
            return winSquares;
        }
        return [];
    }
}

export default Helper;