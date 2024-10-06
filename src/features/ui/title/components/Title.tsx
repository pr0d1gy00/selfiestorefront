import React from 'react'
import TitleCSS from '../styles/title.module.css'

export default function Title() {
    return (
        <div className={TitleCSS.containerTitle}>
            <h1>Tienda de ropa</h1>
            <h2>Selfie Store</h2>
            <div className={TitleCSS.containerTexts}>
                <ul>
                    <li>Registrate y compra</li>
                    <li>Viste a la moda!</li>
                    <li>La mejor ropa para ti!</li>
                    <li>Adios al "No tengo que ponerme"</li>
                </ul>
            </div>
        </div>
    )
}
