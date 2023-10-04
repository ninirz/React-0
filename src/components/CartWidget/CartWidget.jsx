import React from 'react'

const CartWidget = ({children}) => {
  return (
    <>
    <div>{children}</div>
    <img src='https://cdn-icons-png.flaticon.com/512/456/456212.png' alt='icono de carrito' width={50} height={50} />
    </>
  )
}

export default CartWidget