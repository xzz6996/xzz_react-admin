import React from 'react'
import {Link} from 'react-router-dom'
import PageTitle from 'component/page-title/index.jsx'
import TableList from 'util/table-list/index.jsx'
import Server from 'server/product-server.jsx'
import Util from 'util/util.jsx'
const _server=new Server;
const _util=new Util;
import './index.scss'

class CategoryList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            category:this.props.match.params.categoryId || 0,
            list:[]
        }
    }
    componentDidMount(){
        this.load();
        
    }
    componentDidUpdate(prevProps, prevState){
        let oldPath= prevProps.location.pathname,
            newPath = this.props.location.pathname,
            newId   = this.props.match.params.categoryId || 0;
        if(oldPath!==newPath){
            this.setState({
                category:newId
            },()=>{
                this.load();   
            })             
        }
    }
    load(){
        _server.getCotagory(this.state.category).then(res=>{
            this.setState({
                list:res
            })
        }).catch(err=>{
            _util.errorTips(err)
        })
    }
    updata(id,name){
        let newName=window.prompt('请输入新的品类名称',name);
        let info={
            categoryId:id,
            categoryName:newName
        }
        _server.setCategory(info).then(res=>{
            _util.successTips(res);
            this.load();
        }).catch(err=>{
            _util.errorTips(err)
        })
    }
    render(){
        let listBody=
            this.state.list.map((product,index)=>{
                return <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>
                                 <a className="opear" onClick={(e)=>this.updata(product.id,product.name)}>修改</a>
                                {
                                    product.parentId=== 0?<Link to={`/product-category/index/${product.id}`}>查看详情</Link>:null
                                }                              
                            </td>
                        </tr>
            });      
            let listTile= [{name:"id",width:"10%"},{name:"名称",width:"10%"},{name:"操作",width:"10%"}];
        return (
            <div id="page-wrapper">
                <PageTitle title="品类列表"/>
                <div className="postion-right">
                    <Link to="/product-category/add" className="btn btn-info">
                        <i className="glyphicon glyphicon-plus"></i>
                        <span>添加品类</span> 
                    </Link>
                </div>
                <TableList names={listTile}>
                    {listBody}
                </TableList>
            </div>
        )
    }
}
export default CategoryList;