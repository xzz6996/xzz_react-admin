import React from 'react'
import './index.scss'
import PageTitle from 'component/page-title/index.jsx'
class Error extends React.Component{
    render(){
        return (<div id="error">
        <PageTitle title="出错了"/>
          <a href="/">
            <img src="src/page/error/error.jpg" alt=""/>
          </a>
        </div>)
    }
}

export default Error