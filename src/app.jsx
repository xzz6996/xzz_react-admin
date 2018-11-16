import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Layout from 'component/Layout/index.jsx'     // Layout 
import Home from 'page/home/index.jsx'              // 首页    
import ErrorPage from 'page/error/index.jsx'        // 404页面
import Login from 'page/login/index.jsx'            // 登录
import UserList from 'page/user/index.jsx'          // 用户列表    
//商品
import Product from 'page/product/index.jsx'
import SaveProduct from 'page/product/save.jsx'
import DetailProduct from 'page/product/detail.jsx'

class App extends React.Component{
    render(){
        let LayoutrRouter=(
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route  path="/product/index" component={Product} /> 
                    <Route path="/product/save/:pid?" component={SaveProduct} /> 
                    <Route path="/product/detail/:pid" component={DetailProduct}/>
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





