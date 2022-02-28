import React from 'react'
import { Link } from 'react-router-dom'

export const CkeckoutSuccess = ({order}) => {
    return (
        <div>
            <h3>¡Su orden ha sido procesada exitosamente!</h3>

            <p>El código de su compra es</p>
            <p>{order}</p>
            <p>Asegúrese de guardarlo</p>
            <p>¡Gracias por comprar!</p>
            <Link to='/'>Volver</Link>
        </div>
    )
}
