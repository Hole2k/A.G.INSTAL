import React from 'react';
import './Button.css';

const STYLES = 
[
    'btn--primary',
    'btn--outline'
]

const SIZES = 
[
    'btn--medium',
    'btn--large'
]

export const Button = ({
children,
type,
onClick,
buttonStyle,
buttonSize

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] //zmienna któa zmienia style przycisku 


    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]  //zmienna któa zmienia wielkość przycisku 

    return(
        //Zwrócenie przycisku o nazwie klasy btn, dalsze dwie nazwy są pobierane ze zmiennych. Przycisk ma funckje onClick oraz type 
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
            </button>
    )

}
