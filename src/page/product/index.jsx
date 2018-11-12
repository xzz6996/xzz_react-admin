import React from 'react'
import util from 'util/util.jsx'
import Pagination from 'util/pagination/index.jsx'
import PageTitle from 'component/page-title/index.jsx'
import TableList from 'util/table-list/index.jsx'
import ProductList from 'server/product-server.jsx'
import {Link} from 'react-router-dom'
import SearchProduct from './search-product.jsx'
import './index.scss'
const _util=new util();


const _productList=new ProductList();

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pageNum:1,
            list:[],
            type:"search"||""
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        _productList.ProductList(this.state.pageNum).then(res=>{            
            this.setState(res)
        }).catch(err=>{
            this.setState({
                list:[]
            })
            _util.errorTips(err)
        })
    }
    //切换页数更新数据
    onChange(pageNum){      
        this.setState({
            pageNum:pageNum
        },()=>this.loadData())
    }
    //上架 下架
    changeStatus(e,id,status){
        let newStatus=status==1?2:1;
      let params={productId:id,status:newStatus};
      _productList.setSaleStatus(params).then(res=>{
        _util.successTips(res.data);
        this.loadData();
      }).catch(err=>{
          _util.errorTips(err)
      })
    }

    search(searchType,searchkeyWord){
        console.log(searchType,searchkeyWord)
    }
    render(){
        let tableTitle=[{name: '商品ID', width: '10%'},
        {name: '图片信息', width: '50%'},
        {name: '价格', width: '10%'},
        {name: '状态', width: '15%'},
        {name: '操作', width: '15%'}];
        let listBody=this.state.list.map((name,index)=>{
            return (<tr key={index}>
                        <td>{name.id}</td>
                        <td>{name.mainImage}</td>
                        <td>{name.price}</td>
                        <td>
                            <span className="clickButton">{name.status==1?"在售":"已下架"}</span>
                            <button onClick={(e)=>this.changeStatus(e,name.id,name.status)} className="btn btn-info">
                                {name.status==1?"下架":"上架"}
                            </button>
                        </td>
                        <td>
                            <Link to="`/product/detail/{name.categotyId}`" className="clickButton">查看</Link>
                            <Link to="`/product/save/{name.categotyId}`" className="clickButton">编辑</Link>
                        </td>
                    </tr>) });
        return (<div id="page-wrapper">
        <PageTitle title="产品列表"/>
        <SearchProduct comeOut={(searchType,searchkeyWord)=>{this.search(searchType,searchkeyWord)}}/>
        <TableList names={tableTitle}>
            {listBody}
        </TableList>
        <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNum)=>this.onChange(pageNum)}></Pagination>
        </div>)
    }
}
export default Product;