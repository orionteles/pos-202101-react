import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {

    const variant = props.variant ? props.variant : 'danger';

    return (
        <div>
            <Card className={"border-" + variant + " mb-3"}>
                <Card.Header className={"bg-" + variant + " text-white"}>
                    {props.titulo}
                </Card.Header>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cartao
