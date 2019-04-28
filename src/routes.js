import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Box from './pages/Box';

/**
 * Essas são as rotas que serão usadas para
 * a navegação na aplicação
 */
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />

        </Switch>
    </BrowserRouter>
);

export default Routes;