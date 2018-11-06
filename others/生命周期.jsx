class Component extends React.Component{
    // 构造函数
    constructor(props){
        console.log('初始化数据','constructor')
        super(props)
        this.state={
            data:"old data"
        }
    }
    //组件即将挂载
    componentWillMount(){
        console.log('组件即将挂载','componentWillMount')
    }
    //挂载完成
    componentDidMount(){
        console.log('组件挂载完成','componentDidMount')
    }  
    //将要接受父组建传来的props
    componentWillReceiveProps(newProps){
        console.log('将要接受父组建传来的props','componentWillReceiveProps')
        console.log(newProps)
    }
    //子组建是否更新
    shouldComponentUpdata(){
        console.log('子组建是否更新','componentWillReceiveProps')
        return true;//默认更新
    }
    //组件将要更新
    componentWillUpdate(){
        console.log('组件将要更新','componentWillUpdate')
    }
    //组件更新完成
    componentDidUpdate(){
        console.log('组件更新完成','componentDidUpdate')
    }
    //组建销毁
    componentWillUnmount(){
        console.log('组建销毁','componentWillUnmount')
    }

    //渲染数据
    render(){
        console.log('渲染数据','render')
        return <div>
                    <div>App</div>
                    <button onClick={()=>{this.handleClick()}}>更新数据</button>
               </div>
    }
     //事件方法
     handleClick(){
        console.log('事件方法 更新数据')
        this.setState({
            data:"new data"
        })
    } 
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"old props",
            hasChild:true
        }
    }
    render(){
        return <div>
            {
                this.state.hasChild?<Component data={this.state.data}/>:null
            }
            <button onClick={()=>{this.change()}}>改变props</button>
            <button onClick={()=>{this.over()}}>干掉子组件</button>
        </div>
    }
    change(){
        this.setState({
            data:"new pros"
        })
    }
    over(){
        this.setState({
            hasChild:false
        })
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)