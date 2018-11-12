import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

import Home from 'page/home/index.jsx'
import Layout from 'component/Layout/index.jsx'
import Product from 'page/product/index.jsx'
import ErrorPage from 'page/error/index.jsx'
import Login from 'page/login/index.jsx'
import UserList from 'page/user/index.jsx'




class App extends React.Component{
    render(){
        let LayoutrRouter=(
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route  path="/product/index" component={Product} /> 
                    <Redirect exact from="/product" to="/product/index" />
                    <Route  path="/user/index" component={UserList} /> 
                    <Redirect exact from="/user" to="/user/index"/>   
                    <Route  component={ErrorPage} />       
                </Switch> 
            </Layout> 
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />       
                    <Route path="/" render={props => LayoutrRouter} />
                    
                </Switch>               
        </Router>
        )
    }
}
ReactDOM.render(
   <App/>,
    document.getElementById('app')
)





