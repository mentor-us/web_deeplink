export interface CustomerModel {
    email:string,
    password: string,
    fullname: string,
    age: number,
    address: string,
}

export interface CustomnerFormModel extends CustomerModel{
    repeatPassWord: string,
}