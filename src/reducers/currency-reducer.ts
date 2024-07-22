import {Dispatch} from "react";
import {currencyAPI, CurrencyType} from "../api/currency-api";
import {CurrencyId} from "../Currency";


let InitialState: CurrencyType = {
    Cur_ID: 0,
    Cur_ParentID: 0,
    Cur_Code: '',
    Cur_Abbreviation: '',
    Cur_Name: '',
    Cur_Name_Bel: '',
    Cur_Name_Eng: '',
    Cur_QuotName: '',
    Cur_QuotName_Bel: '',
    Cur_QuotName_Eng: '',
    Cur_NameMulti: '',
    Cur_Name_BelMulti: '',
    Cur_Name_EngMulti: '',
    Cur_Scale: 0,
    Cur_Periodicity: 0,
    Cur_DateStart: '',
    Cur_DateEnd: ''
};


export const currencyReducer = (state: CurrencyType = InitialState, action: getCurrencyActionType): CurrencyType => {
    switch (action.type) {
        case 'GET-CURRENCY':
            return {...state, Cur_ID: action.currencyData.Cur_ID};
        default: return state
    }
}

export const getCurrencyAC = (currencyData: CurrencyType) => (
    {
        type: 'GET-CURRENCY',
        currencyData
    } as const)

export const getCurrencyTC = (CurrencyId: number) => {
    return (dispatch: Dispatch<getCurrencyActionType>) => {
        currencyAPI.getCurrency(CurrencyId)
            .then((res) => {
                dispatch(getCurrencyAC(res.data));
            });

    };
};


export type getCurrencyActionType = ReturnType<typeof getCurrencyAC>
