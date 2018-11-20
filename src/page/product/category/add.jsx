import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import Server from 'server/product-server.jsx'
import Util from 'util/util.jsx'
const _server=new Server();
const _util=new Util();

class CategotyAdd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list1:[],
            parentId:this.props.match.params.categoryId||0,
            categoryName:''
        }
    }
    componentDidMount(){
        this.load();
    }
    load(){
        _server.getCotagory(this.state.parentId).then(res=>{
            this.setState({
                list1:res
            })
        })
    }
    onChange(e){
        let name=e.target.name,
            value=e.target.value;
            this.setState({
                [name]:value
            })
    }
    addCategory(){
        let info={
            parentId:this.state.parentId,
            categoryName:this.state.categoryName
        }
        _server.addCategory(info).then(res=>{
            _util.successTips(res);
            this.props.history.push('/product-categoty');
        }).catch(err=>{
            _util.errorTips(err)
        })
    }
    render(){
        return (
            <div id="page-wrapper">
            <PageTitle title="添加分类" />
                 <select className="form-control  selectOne" name="parentId"  onChange={(e)=>this.onChange(e)} >
                    <option value="0">请选择一级分类</option>
                    {
                        this.state.list1.map((name,index)=>
                            <option key={index} value={name.id}>{name.name}</option>
                        )                       
                    }                  
                </select>
                <br></br>
                <div className="form-group">
                        <input type="text" className="form-control" placeholder="请输入分类名称" name="categoryName" value={this.state.categoryName} onChange={(e)=>this.onChange(e)}/>
                    </div>
                <br></br>
                <button className="btn btn-info" onClick={(e)=>{this.addCategory(e)}}>添加分类</button>
            </div>
        )
    }
}
export default CategotyAdd;