import React from 'react'
import util from 'util/util.jsx'
import Pagination from 'util/pagination/index.jsx'
import PageTitle from 'component/page-title/index.jsx'
import TableList from 'util/table-list/index.jsx'
import OrderServer from 'server/order-server.jsx'
import {Link} from 'react-router-dom'
import SearchOrder from './search-order.jsx'

const _util=new util();
const _order=new OrderServer();

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            pageNum:1
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        _order.getOrderList(this.state.pageNum).then(res=>{            
            this.setState(res)
        }).catch(err=>{
            this.setState({
                list:[]
            })
            _util.errorTips(err);
        })
    }
    //切换页数更新数据
    onChange(pageNum){      
        this.setState({
            pageNum:pageNum
        },()=>this.loadData())
    }
    search(orderNo){
        console.log(orderNo)
        _order.search(orderNo).then(res=>{
               this.setState(res)
        }).catch(err=>{
            _util.errorTips(err)
        })
    }
    render(){
        let tableTitle=["name","收件人","订单总价","创建时间","操作"];
        let listBody=this.state.list.map((name,index)=>{
            return (<tr key={index}>
                        <td>{name.orderNo}</td>
                        <td>{name.receiverName}</td>
                        <td>{name.payment}</td>
                        <td>{name.createTime}</td>
                        <td>                        
                             <Link to={`/order/detail/${name.orderNo}`}>查看详情</Link>
                        </td>
                    </tr>) });
        return (<div id="page-wrapper">
        <PageTitle title="订单列表"/>
        <SearchOrder comeOut={(orderNo)=>{this.search(orderNo)}}/>
        <TableList names={tableTitle}>
            {listBody}
        </TableList>
        <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNum)=>this.onChange(pageNum)}></Pagination>
        </div>)
    }
}
export default Order;