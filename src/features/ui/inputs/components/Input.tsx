import React from 'react'
import InputCSS from '../styles/inputs.module.css'

type inputProps = React.InputHTMLAttributes<HTMLInputElement>


export default function Input(inputProps:inputProps) {
    return (
        <input  
            className={InputCSS.input}
            {...inputProps}
        />
        
        
    )
}
