import axios from "axios";


const instance = axios.create( {
    baseURL: 'https://api.nbrb.by/exrates/rates?periodicity=0',
    withCredentials: true,

})

export const currencyAPI = {
    getCurrency() {
        return instance.get<CurrencyType[]>('');
    }
}

export type CurrencyType = {
    "Cur_ID": number,
    "Date": string,
    "Cur_Abbreviation": string,
    "Cur_Scale": number,
    "Cur_Name": string,
    "Cur_OfficialRate": number
}

