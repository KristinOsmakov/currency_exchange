import {Dispatch} from "react";
import {currencyAPI, CurrencyType} from "../api/currency-api";
import {CurrencyId} from "../Currency";


let InitialState: CurrencyType[] = []

export const currencyReducer = (state: CurrencyType[] = InitialState, action: getCurrencyActionType): CurrencyType[] => {
    switch (action.type) {
        case 'GET-CURRENCY':
            return [...action.currencyData];
        default:
            return state
    }
}

export const getCurrencyAC = (currencyData: CurrencyType[]) => (
    {
        type: 'GET-CURRENCY',
        currencyData
    } as const)

export const getCurrencyTC = () => {
    return (dispatch: Dispatch<getCurrencyActionType>) => {
        currencyAPI.getCurrency()
            .then((res) => {
                dispatch(getCurrencyAC(res.data));
            });

    };
};

export type getCurrencyActionType = ReturnType<typeof getCurrencyAC>
