
import React        from 'react';
import { Link }     from 'react-router-dom';
import { runInThisContext } from 'vm';
import Mutil from 'util/index.jsx';
import User from 'server/user-server.jsx';
const _user=new User();
const _util=new Mutil();

class NavTop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:  _util.getStorage('userInfo').username||''     
        }
    }
    // 退出登录
    onLogout(){
         _user.onLogout().then(res=>{
             _util.remmoveStorage(userInfo);
             window.location.href="/";
         }).catch(err=>{
            _util.errorTips(err);
         })  
    }
    render(){
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {
                                this.state.username?<span>欢迎 {this.state.username}</span>
                                :<span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => {this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;