import React from 'react';
import ReactDOM  from 'react-dom';

import 'font-awesome/css/font-awesome.min.css'
//import './index.css'
import './index.scss'

function Component(){
    return <h1>i am xzz</h1>
}

class ES6Component extends React.Component{
    render(){
        return <h1>i am xzz in ccc</h1>
    }
}


ReactDOM.render(
    <div>
        <i className="fa fa-camera-retro"></i>
        <Component/><ES6Component/>
    </div>,
    document.getElementById('app')
)











//state && props

class Component extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     name:"xzz"
        // }
    }
    render(){
        // setTimeout(()=>{
        //   this.setState({
        //       name:"xzz xx zzz"
        //   })  
        // })
        // return <h1>i am {this.state.name}</h1>
        return <h1>i am {this.props.name}</h1>
    }
}


ReactDOM.render(
    <div>
        <i className="fa fa-camera-retro"></i>
        <Component name="rrrr"/>
    </div>,
    document.getElementById('app')
)




//事件 && 组建之间

class Component extends React.Component{
    constructor(){
        super();
        this.state={
            name:"xzz",
            age:18
        }
    }
    //事件处理
    handleClick(){
        this.setState({
            age:this.state.age+1
        })
    }
    onChangeClick(e){
        this.setState({
            age:e.target.value
        })
    }
    render(){
       return <div>
                <h1>i am {this.state.name}</h1>
                <div>我今年{this.state.age}</div>
                <button onClick={(e)=>{this.handleClick(e)}}>+1</button> 
                <input type="text" onChange={(e)=>{this.onChangeClick(e)}}/>
              </div>                    
    }
}


ReactDOM.render(
    <Component/>,
    document.getElementById('app')
)


class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <h1>{this.props}</h1>
    }
}
class APPs extends React.Component{
    constructor(){

    }
    render(){
        return <div>
                {/* 容器组件 */}
                <Title title="aaaa">
                    <span>ddd</span>    
                </Title>
                {/* 单纯组件*/}
                <Component/>
        </div>       
    }
}

// 子组件改变父组件
class Father extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bgColor:"#ccc"
        }
    }
    changeFatherBg(color){
        this.setState({
            bgColor:color
        })
    }
    render(props){
        return <div style={{background:this.state.bgColor}}>
            父组件
            <Child bgColor={this.state.bgColor} changeBg={(color)=>{this.changeFatherBg(color)}}/>
        </div>
    }
}
class Child extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(){
       this.props.changeBg('red');
    }
    render(){
       return <div>          {this.props.bgColor}
                <button onClick={(e)=>{this.handleClick(e)}}>点击改变父组件的背景色</button>               
              </div>                    
    }
}


//兄弟组件之间的传值

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
