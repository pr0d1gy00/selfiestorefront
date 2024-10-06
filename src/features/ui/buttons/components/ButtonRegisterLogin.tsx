import React, { ButtonHTMLAttributes } from 'react'
import ButtonCSS from '../styles/buttons.module.css'


type buttonProp = {
    title:string
}&ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonRegisterLogin({title,...buttonProp}:buttonProp) {
    return (
        <button
            className={ButtonCSS.buttonRegisterLogin}
            {...buttonProp}
        >
            {title}
        </button>
    )
}
