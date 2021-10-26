import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carregando from '../../components/Carregando'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results);
        })

    }, [])

    return (
        <div>
            <h1>Filmes Populares</h1>

            {!filmes.length && <Carregando />}
            {filmes.length &&
                <Row>
                    {filmes.map(filme => (
                        <Col key={filme.id} md={3} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                                <Card.Body>
                                    <p>{filme.title}</p>
                                    <p>({filme.original_title})</p>
                                    <Link to={`/filmes/${filme.id}`} className="btn btn-danger">Detalhes</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            }
        </div>
    )
}

export default FilmesPopulares
