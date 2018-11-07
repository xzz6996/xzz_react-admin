import React from 'react'
import {Link,NavLink} from 'react-router-dom'

class SideNav extends React.Component{
    render(){
        return (<div className="side-nav">
            <ul className="side-menu">
                <li className="active">   
                    <NavLink activeClassName="active-menu" to="/">
                        <i className="fa fa-home fa-fw"></i>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li className="active">
                    <Link to="/good">
                        <i className="fa fa-book fa-fw"></i>
                        <span>商品</span>
                    </Link>
                    <ul className="side-menu side-nextmenu">
                        <li>
                            <NavLink to="/good">
                                 <i className="fa fa-pencil fa-fw"></i>
                                 <span >商品引导</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>)
    }
}
export default SideNav;