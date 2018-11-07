import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'


import Home from 'page/home/index.jsx'
import Layout from 'component/Layout/index.jsx'
import product from 'page/product/index.jsx'

ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/product" component={product} /> 

            </Switch> 
        </Layout>              
    </Router>,
    document.getElementById('app')
)





