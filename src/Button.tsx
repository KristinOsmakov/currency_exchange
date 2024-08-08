// @flow 
import * as React from 'react';
import s from '../src/styles.module.css'


type ButtonPropsType = {
    title: string,
    image: string,
    fun: () => void
};
export const Button = ({title, image, fun}: ButtonPropsType) => {
    return (
        <button className={s.button} onClick={fun}>
            <img className={s.img} src={image} alt={title}/>
            {title}
        </button>
    );
};

