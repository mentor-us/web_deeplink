export enum Flag {X, O}

export interface SquareModel {
    flag: Flag.X | Flag.O | null;
}