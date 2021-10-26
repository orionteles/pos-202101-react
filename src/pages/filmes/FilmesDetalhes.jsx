import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carregando from '../../components/Carregando'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = (props) => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = props.match.params.id

        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data)
        })

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [props])

    return (
        <>
            {!filme.id && <Carregando />}
            {filme.id &&
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                        </Card>
                    </Col>
                    <Col md={9}>
                        <h1>{filme.title}</h1>
                        {filme.budget > 0 && <p>Orçamento: {filme.budget}</p>}
                        <p>Data de Lançamento: {filme.release_date}</p>
                        <p>{filme.overview}</p>
                        <Link to="/filmes/populares" className="btn btn-danger">Voltar</Link>

                    </Col>
                    <Col md={12}>
                        <h1>Atores</h1>
                        <Row>
                            {atores.map(ator => (
                                <React.Fragment key={ator.id}>
                                    {ator.profile_path &&
                                        <Col md={1}>
                                            <Card title={ator.name}>
                                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                                            </Card>
                                        </Col>
                                    }
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            }
        </>
    )
}

export default FilmesDetalhes
