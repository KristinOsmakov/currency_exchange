import {Dispatch} from "react";
import {currencyAPI, CurrencyType} from "../api/currency-api";


let InitialState: CurrencyType[] = []

export const currencyReducer = (state: CurrencyType[] = InitialState, action: ActionT): CurrencyType[] => {
    switch (action.type) {
        case 'GET-CURRENCY':
            return [...action.currencyData];
        default:
            return state
    }
}
export const usdRateReducer = (state: number | null = null, action: ActionT): number | null => {
    switch (action.type) {
        case 'GET-USD':
            return action.usdRate
        default: return state

    }
}
export const eurRateReducer = (state: number | null = null, action: ActionT): number | null => {
    switch (action.type) {
        case 'GET-EUR':
            return action.eurRate
        default: return state
    }
}
export const rubRateReducer = (state: number | null = null, action: ActionT): number | null => {
    switch (action.type) {
        case 'GET-RUB':
            return action.rubRate
        default: return state
    }
}

export const getCurrencyAC = (currencyData: CurrencyType[]) => (
    {
        type: 'GET-CURRENCY',
        currencyData
    } as const)
export const getUSDRateAC = (usdRate: number) => (
    {
        type: 'GET-USD',
        usdRate
    } as const)
export const getEURRateAC = (eurRate: number) => (
    {
        type: 'GET-EUR',
            eurRate
    } as const)
export const getRUBRateAC = (rubRate: number) => (
    {
        type: 'GET-RUB',
        rubRate
    } as const
)
export const getCurrencyTC = () => {
    return (dispatch: Dispatch<ActionT>) => {
        currencyAPI.getCurrency()
            .then((res) => {
                dispatch(getCurrencyAC(res.data));
                const alertUSD = res.data.find(cur => (cur.Cur_ID === 431))
                if(alertUSD) {
                    dispatch(getUSDRateAC(alertUSD.Cur_OfficialRate))
                }
                const alertEUR = res.data.find(cur => (cur.Cur_ID === 451))
                if(alertEUR) {
                    dispatch(getEURRateAC(alertEUR.Cur_OfficialRate))
                }
                const alertRUB = res.data.find(cur => (cur.Cur_ID === 456))
                if(alertRUB) {
                    dispatch(getRUBRateAC(alertRUB.Cur_OfficialRate))
                }
            });

    };
};

export type ActionT = getCurrencyActionType | getUSDRateActionType | getEURRateActionType | getRUBRateActionType
export type getCurrencyActionType = ReturnType<typeof getCurrencyAC>
export type getUSDRateActionType = ReturnType<typeof getUSDRateAC>
export type getEURRateActionType = ReturnType<typeof getEURRateAC>
export type getRUBRateActionType = ReturnType<typeof getRUBRateAC>
