import React from 'react'


class TopNav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }
    clickUser(){
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return (<div className="top-nav">
            <div className='top-nav-title'>HAPPY ADMIN</div>
            <div className="top-nav-seting">
                <div className="top-nav-setingUser" onClick={()=>{this.clickUser()}}>                    
                    <span>你好,admin</span>
                    <i className="fa fa-cog fa-fw"></i>
                </div>
                {
                    this.state.show?
                    <ul className="top-nav-setingOther">
                        <li>
                            <i className="fa fa-cog fa-fw"></i>
                            <span>退出</span>
                        </li>
                        <li>
                            <i className="fa fa-cog fa-fw"></i>
                            <span>测试专区</span>
                        </li>
                    </ul>:null
                }               
            </div>
        </div>)
    }
}
export default TopNav;