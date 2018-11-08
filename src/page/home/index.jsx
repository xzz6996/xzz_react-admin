import React from 'react'

import PageTitle from 'component/page-title/index.jsx'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        return (<div id="page-wrapper">
           <PageTitle title="首页" />

        </div>)
    }
}
export default Home;