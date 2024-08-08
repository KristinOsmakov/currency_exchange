import {
    currencyReducer,
    eurRateReducer,
    rubRateReducer,
    usdRateReducer
} from "./reducers/currency-reducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunkMiddleware, {ThunkDispatch, thunk} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {inputReducer} from "./reducers/inputReducer";




const rootReducer = combineReducers({
    currency: currencyReducer,
    USD: usdRateReducer,
    EUR: eurRateReducer,
    RUB: rubRateReducer,
    inputRed: inputReducer
})

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;


