import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContex'
import 'firebase/firestore'
import { Link } from 'react-router-dom'
import { CheckoutDetail } from './CheckoutDetail'
import { CkeckoutSuccess } from './CkeckoutSuccess'
import { getFirestore, collection, addDoc} from "firebase/firestore";

export const Checkout = () => {

    const [loading, setLoading] = useState(true)
    // const [showError, setShowError] = useState(false)
    const [validUser, setValidUser] = useState(false)
   
    const [orderId, setOrderId] = useState(0)

    const {items, clearCart,TotalPrice} = useContext(CartContext)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }, [validUser])

    const [values, setValues] = useState({
        name: '',
        tel: '',
        email: '',
        emailCheck: ''
    })

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value  
        })
    }

    const checkUser = () => {
        if (values.name !== '' && values.tel !== '' && values.email !== '' && values.emailCheck !== '') {
            if (values.email === values.emailCheck) {
                setLoading(true)
                setValidUser(true)
                return
            }
        }
        // setShowError(true)
        // setTimeout(()=>setShowError(false), 5000)
    }

    const handleSetOrder = ()=> {
        const order = {
            buyer:values,
            item: items, 
            total: TotalPrice(),
            
        }        
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(({id})=> setOrderId(id));
        clearCart();

    }

    return (
        <div>
            {loading ? 
            (
                <h1 className="mt-0 vh-50 row justify-content-center align-items-center">
                  Cargando Producto...🐠🐟🐡
                </h1>
              )
                :
            <>
                {orderId  ? 
                    <>
                    {typeof orderId === 'string' ? 
                        <CkeckoutSuccess order={orderId} />
                        :
                        "Fallo La orden"     
                    }
                    </>
                  :
                    <>
                        {!validUser ? 
                        <div>
                            <h2>Datos personales</h2>


                            <form>
                                <legend>Completa tus datos para completar la compra</legend>
                                <input
                                    type="text"
                                    name="name"
                                    className="buyer-input"
                                    placeholder="Tu nombre"
                                    autoComplete="off"
                                    value={ values.name }
                                    onChange={ handleInputChange }
                                />
                                <input
                                    type="tel"
                                    name="tel"
                                    className="buyer-input"
                                    placeholder="Teléfono"
                                    autoComplete="off"
                                    value={ values.tel }
                                    onChange={ handleInputChange }
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="buyer-input"
                                    placeholder="Email"
                                    autoComplete="off"
                                    value={ values.email }
                                    onChange={ handleInputChange }
                                />
                                <input
                                    type="email"
                                    name="emailCheck"
                                    className="buyer-input"
                                    placeholder="Repite tu email"
                                    autoComplete="off"
                                    value={ values.emailCheck }
                                    onChange={ handleInputChange }
                                />
                            </form>

                            <div>
                                <Link to={'/cart'}>Volver al carrito</Link>
                                <button onClick={checkUser}>Confirmar</button>
                            </div>
                        </div>
                        : 
                        <CheckoutDetail buyer={values}  setValid={setValidUser} handleOrder={handleSetOrder} />
                        }
                    </>
                }
            </>    
        }
        </div>
    )
}
