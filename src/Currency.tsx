// @flow 
import * as React from 'react';
import {UniversalInput} from "./universalInput";
import s from '../src/styles.module.css'
import {Button} from "./Button";
import {CurrencyContainerButton} from "./CurrencyContainerButton";
import {ContainerInput} from "./ContainerInput";
import {useAppDispatch, useAppSelector} from "./store";

type CurrencyPropsType = {
    
};

export enum CurrencyId {
    USD = 431,
    EUR = 451,
    RUB = 456,
}
export const Currency = (props: CurrencyPropsType) => {
    return (
        <div className={s.currency}>
            <h3>Currency exchange</h3>
            <CurrencyContainerButton/>
            <ContainerInput/>
        </div>
    );
};