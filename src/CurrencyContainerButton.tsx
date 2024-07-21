// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from '../src/styles.module.css'
import imgBEL from '../src/images/belarus.webp'
import imgRUS from '../src/images/rus.webp'
import imgEUR from '../src/images/europe.webp'
import imgUSD from '../src/images/USA.webp'




type Props = {

};
export const CurrencyContainerButton = (props: Props) => {
    return (
        <div className={s.currencyContainerButton}>
            <Button image={imgUSD} title={'USD'}/>
            <Button image={imgEUR} title={'EUR'}/>
            <Button image={imgRUS} title={'RUB'}/>
        </div>
    );
};