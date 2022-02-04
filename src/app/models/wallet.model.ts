import { tranasactions } from "./transactions.model";

export interface Wallet {
    walletId: String,
    walletAmount: Number,
    cycle: String,
    transactions: tranasactions
}