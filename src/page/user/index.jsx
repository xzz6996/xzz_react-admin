import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import Pagination from 'util/pagination/index.jsx'
import UserServer from 'server/user-server.jsx'
const _userServer=new UserServer();
import './index.scss'
import  TableList from 'util/table-list/index.jsx'

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={          
            pageNum:1,
            list:[],         
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        _userServer.UserList(this.state.pageNum).then(res=>{
            this.setState(res)
        }).catch(err=>{
            this.setState({
                list:[]
            })
        })
    }
    //页数发生改变时,再去加载数据
    onChange(pageNum){
        this.setState({
            pageNum:pageNum
        },()=>this.loadData())
    }
    render(){
        let listBody=this.state.list.map((user,index)=>{
            return (<tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.createTime}</td>
            </tr>
           )});
        return (<div id="page-wrapper">
            <PageTitle title="用户列表"/>  
            <TableList names={['ID','用户名','邮箱','电话','注册时间']}>
                {listBody}
            </TableList>        
            <Pagination current={this.state.pageNum}
            onChange={(pageNum)=>{this.onChange(pageNum)}}
            total={this.state.total}
  />
        </div>)
    }
}
export default User;