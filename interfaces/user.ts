export interface IUser {
    _id: string,
    name: string,
    email: string,
    password?: string,
    role: string,

    //TODO: Agregar createdAt y updatedAt
    createdAt?: string;
    updatedAt?: string;
}