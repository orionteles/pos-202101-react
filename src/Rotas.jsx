import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/Pagina2'
import Arrays from './pages/Arrays'
import Objetos from './pages/Objetos'
import Estados from './pages/Estados'

const Rotas = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HelloWorld} />
                <Route exact path="/pagina1" component={Pagina1} />
                <Route exact path="/pagina2" component={Pagina2} />
                <Route exact path="/arrays" component={Arrays} />
                <Route exact path="/objetos" component={Objetos} />
                <Route exact path="/estados" component={Estados} />
            </Switch>
        </div>
    )
}

export default Rotas