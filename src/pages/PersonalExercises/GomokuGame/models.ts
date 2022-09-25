export enum Flag {X, O}

export interface SquareModel {
    flag: Flag.O | Flag.X | null;
}

export interface PointModel {
    _x: number;
    _y: number;
}

export interface HistoryModel {
    point: PointModel;
    player: Flag.O | Flag.X;
    time?: string;
}