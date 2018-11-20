import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Layout from 'component/Layout/index.jsx'     // Layout 
import Home from 'page/home/index.jsx'              // 首页    
import ErrorPage from 'page/error/index.jsx'        // 404页面
import Login from 'page/login/index.jsx'            // 登录
import UserList from 'page/user/index.jsx'          // 用户列表    
import ProductRouter from 'page/product/router.jsx' //商品
import OrderList from 'page/order/index.jsx'        //订单
import OrderDetail from 'page/order/detail.jsx'     //订单详情

class App extends React.Component{
    render(){
        let LayoutrRouter=(
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route  path="/product" component={ProductRouter} /> 
                    <Route  path="/product-category" component={ProductRouter} /> 
                    <Route paht="/order/index" component={OrderList}/>
                    <Route path="/order/detail/:orderNo" component={OrderDetail}/>
                    <Route  path="/user/index" component={UserList} /> 
                    <Redirect exact from="/order" to="/order/index"/>
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





