import React from 'react'
import { Table } from 'react-bootstrap'
import Cartao from '../components/Cartao'

const Pagina1 = () => {
    return (
        <div>
            <Cartao titulo="Blá blá blá" variant="primary">
                <p>lorem ipsum</p>
            </Cartao>

            <Cartao titulo="Documentos">
                <h3>Lista</h3>
                <ul>
                    <li>CPF</li>
                    <li>RG</li>
                    <li>Passaporte</li>
                </ul>
            </Cartao>

            <Cartao titulo="Dados Pessoais" nome="Orion Teles">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Cartao>
        </div>
    )
}

export default Pagina1
