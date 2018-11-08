import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'


import Home from 'page/home/index.jsx'
import Layout from 'component/Layout/index.jsx'
import product from 'page/product/index.jsx'

import Login from 'page/login/index.jsx'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login} />       
            <Route path="/" render={props =>(
                <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} /> 
                            <Route  path="/product" component={product} /> 
                        </Switch> 
                </Layout> 
            )} />
        </Switch>               
    </Router>,
    document.getElementById('app')
)





