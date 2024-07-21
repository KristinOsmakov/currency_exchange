// @flow
import * as React from 'react';
import {UniversalInput} from "./universalInput";

import imgBEL from '../src/images/belarus.webp'
import imgRUS from '../src/images/rus.webp'
import imgEUR from '../src/images/europe.webp'
import imgUSD from '../src/images/USA.webp'

type Props = {

};
export const ContainerInput = (props: Props) => {
    return (
        <div>
            <UniversalInput image={imgUSD} title={'USD'}/>
            <UniversalInput image={imgBEL} title={'BEL'}/>
        </div>
    );
};