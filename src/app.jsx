import React from 'react';
import ReactDOM  from 'react-dom';

import 'font-awesome/css/font-awesome.min.css'
//import './index.css'
import './index.scss'

class Father extends React.Component{
    constructor(props){
        super(props);       
        this.state={
            num:5
        }
    }
    chaneg(num){
        this.setState({
            num:num
        })
    }
    render(props){
        return <div style={{background:this.state.bgColor}}>
            父组件
            <Child1 changeNum={(num)=>{this.chaneg(num)}}/>
            <Child2 number={this.state.num}/>
        </div>
    }
}
class Child1 extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(){
       this.props.changeNum(666);
    }
    render(){
       return <div>          
                <button onClick={(e)=>{this.handleClick(e)}}>点击改变child2</button>               
              </div>                    
    }
}
class Child2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return <div>         
                {this.props.number}              
              </div>                    
    }
}

ReactDOM.render(
    <Father/>,
    document.getElementById('app')
)





