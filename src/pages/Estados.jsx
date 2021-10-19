import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Estados = () => {

    const [contador, setContador] = useState(0)

    function adicionar(){
        setContador(contador + 1)
    }

    function subtrair(){
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>Estados</h1>
            <Button variant="danger"  onClick={subtrair}> - </Button>
            {' '}<span>{contador}</span>{' '}
            <Button variant="success"  onClick={adicionar}> + </Button>
        </div>
    )
}

export default Estados
