import React from 'react'

class TableList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isFirstLoading:true
        }
    }   
    componentWillReceiveProps(){      
        //列表只有在第一次挂载的时候，isFirstLoading为true，其他情况为false
        this.setState({
            isFirstLoading : false
        });
    }
    render(){
        let tableTitle=this.props.names.map((name,index)=>{
            return (<th key={index}>{name}</th>)
        })
        let listBody= this.props.children;
        let listError=this.state.isFirstLoading?<tr className="text"><td>正在加载中~~~~</td></tr>:<tr className="text"><td>找不到哦~~~</td></tr>;    
        let tableBody=listBody.length>0?listBody:listError;
        return (<table className="table table-bordered">
                <thead>
                    <tr>{tableTitle}</tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
                </table>)
    }
}
export default TableList;