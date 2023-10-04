import { Item } from '../Item/Item'
import { useState } from 'react'

const ItemListContainer = ({ greeting }) => {
    const [users, setUsers] = useState({})

    const usuarios = [{
        id: 1,
        nombre: 'juan'
    },
    {
        id: 2,
        nombre: 'jose'
    }]

    return (
        <div>
            <h2>
                {greeting}
                {/* 👆 PROP QUE LLEGA DE APP.JS, DONDE ESTA EL COMPONENTE */}
            </h2>
            <button onClick={() => { setUsers(usuarios.find(us => us.id === 1)) }}>CLIC2</button>
            {/* 👆 AL DAR CLIC EL ESTADO SE SETEA CON EL USUARIO ENCONTRADO POR EL FIND() */}
            <div>
                <Item user={users} />

                {/* 👆 PASO POR PROP EL ESTADO */}
            </div>
        </div>
    )
}

export default ItemListContainer