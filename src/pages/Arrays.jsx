import React from 'react'

const Arrays = () => {

    const carros = [
        'Fiat 147',
        'Fuscão',
        'Brasília Amarela',
        'Passatão',
        'Kombão do Lost',
        'Pálio',
        'Vemaguet',
        'Gurgel',
        'Gol',
        'Virtus',
    ]

    return (
        <div>
            <h1>Arrays</h1>

            {carros.map(carro => (
                <p>{carro}</p>
            ))}

        </div>
    )
}

export default Arrays
