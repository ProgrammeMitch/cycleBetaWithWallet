export interface Profile {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    age: string,
    occupation: string,
    phoneNumber: string,
    bvn: number,
    address: string,
    nin: string,
    wallet: Object,
    messages: Array<string>,
    pendingTransfer: Boolean
}