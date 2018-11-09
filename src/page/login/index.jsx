import React from 'react'
import './index.scss'
import Mutil from 'util/util.jsx'
import User from 'server/user-server.jsx'
const _user=new User();
const _util=new Mutil();

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            redirect:_util.getQueryString('redirect')||'/'
        }
    }
    change(e){
        let inputName=e.target.name,inputValue=e.target.value;
        this.setState({
            [inputName]:inputValue
        })
    }
    goLogin(){
        let loginInfo={
            username:this.state.username,
            password:this.state.password
        }
        let checkLoginResult=_user.checkLogin(loginInfo);
        if(checkLoginResult.status){
            _user.login(loginInfo).then(res=>{   
                _util.setStorage('userInfo',res)                              
                this.props.history.push(this.state.redirect)
            }).catch(err=>{
                _util.errorTips(err);
            })
        }else{
            _util.errorTips(checkLoginResult.msg);
        }   
    }
    keyUp(e){
        if(e.keyCode===13){
            this.goLogin()
        }       
    }
    render(){
        return (<div id="content"><div className="login-panel">
                    <div className="">
                        <div className="title">欢迎光临 傻乎乎电商后台</div>
                        <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="请输入用户名" onChange={(e)=>{this.change(e)}} onKeyUp={(e)=>{this.keyUp(e)}}/>
                            </div> 
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="请输入密码" onChange={(e)=>{this.change(e)}} onKeyUp={(e)=>{this.keyUp(e)}}/>
                            </div>
                            <button  className="btn btn-info dengLu" onClick={(e)=>{this.goLogin(e)}}>登陆</button>
                        </div>
                        </div>
                    </div>
        </div></div>)
    }
}

export default Login;