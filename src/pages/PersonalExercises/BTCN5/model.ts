export interface CustomnerModel {
    email:string,
    password: string,
    fullname: string,
    age: number,
    address: string,
}

export interface CustomnerFormModel extends CustomnerModel{
    repeatPassWord: string,
}