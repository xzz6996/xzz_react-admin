// 浏览器的路由
window.location.href="http://www.baidu.com"
history.back()

//hash 路由
window.location='#hash';
window.onhashchange=function(){
    console.log('current hashh',window.location.hash);
}


//h5 路由
history.pushState('name','title','/path')//推进一个状态
history.replaceState('name','title','/path')//替换一个状态
//popstate事件
window.onpopstate=function(){
    console.log(window.location.href,window.location.pathname,window.location.search,window.location.hash)
}



// React-Router 
//     BrowserRouter && HashRouter
//     Router 路由规则
//     Switch 路由选项
//     Link NavLink 跳转导航
//     Redirect 自动跳转



// exact是Router的一个属性，一般而言,react路由会匹配所有匹配到的路由组件,exact能够使得路由匹配的更严格一些.
//exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。
//exact 为true,   '/'与'/xxx'是不匹配的 ,为false, '/'与'/xxx'是匹配的

//{this.props.children} 表示组件的所有子节点 可以通过React.Children.map/forEach等API来操作


// this.props.match 包含了具体的 url 信息，在 params 字段中可以获取到各个路由参数的值。

//<Redirect to="" /> Redirect组件的必须属性是to属性，表示重定向的新地址。

//  <Route path="/product/save/:pid?" component={SaveProduct} />   ?表示可匹配 /save  /save:pid



class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            Component A
            参数是 {this.props.match.params.id}
            <Switch>
                    <Route exact path={`${this.props.match.path}`} 
                        render={(route)=>{
                            return <div>
                                    当前组件是不带参数的A
                                </div>        }}/>
                    <Route path={`${this.props.match.path}/sub`} 
                        render={(route)=>{
                            return <div>
                                当前组件是Sub,
                                    </div>    }}/>
                    <Route path={`${this.props.match.path}/:id`} 
                    render={(route)=>{
                        return <div>
                            当前组件是带参数的A,参数是{route.match.path}
                        </div>                }}/>
            </Switch>
        </div>
    }
}
class B extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            Component B
        </div>
    }
}

class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <Link to="/a">组件A</Link>
            <br></br>
            <Link to="/a/123">带参数的组件A</Link>
            <br></br>
            <Link to="/b">组件B</Link>
            <br></br>
            <Link to="/a/sub">/a/sub</Link>
            {this.props.children}
        </div>
    }
}
ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a/:id" Component={A}/>
            <Route path="/b" Component={B}/>
        </Wrapper>
    </Router> ,
    document.getElementById('app')
)