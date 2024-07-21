// @flow 
import * as React from 'react';
import s from '../src/styles.module.css'



type TitleType = 'USD' | 'EUR' | 'RUB'
type ButtonPropsType = {
    title: TitleType,
    image: string,
};
export const Button = ({title, image}: ButtonPropsType) => {
    return (
        <button className={s.button}>
            <img className={s.img} src={image} alt={title}/>
            {title}
        </button>
    );
};

