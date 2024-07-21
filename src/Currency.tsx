// @flow 
import * as React from 'react';
import {UniversalInput} from "./universalInput";
import s from '../src/styles.module.css'
import {Button} from "./Button";
import {CurrencyContainerButton} from "./CurrencyContainerButton";
import {ContainerInput} from "./ContainerInput";

type Props = {
    
};
export const Currency = (props: Props) => {
    return (
        <div className={s.currency}>
            <h3>Currency exchange</h3>
            <CurrencyContainerButton/>
            <ContainerInput/>
        </div>
    );
};