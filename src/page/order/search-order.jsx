import React from 'react'
import OrderServer from 'server/order-server.jsx'
import Util from 'util/util.jsx'
class SearchOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            orderNo:''
        }
    }
    onChange(e){
        let name=e.target.name,
            value=e.target.value;
            this.setState({
                [name]:value
            })
    }
    search(){
        this.state.orderNo=Number(this.state.orderNo);
        if(this.state.orderNo!==null&&typeof this.state.orderNo==='number'){     
            console.log(this.state.orderNo)      
            this.props.comeOut(this.state.orderNo);         
        }else{
            alert('请输入正确的订单号')
        }
    }
    onSearchKeywordKeyUp(e){
        if(e.target.keyCode===13){
            this.search()
        }   
    }
    render(){
        return (
            <div>
                 <div className="form-group col col-md-3">
                    <input type="text" name="orderNo" className="form-control" placeholder="请输入订单号" onChange={(e)=>{this.onChange(e)}}   onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}/>
                </div>                
                <button  className="btn btn-default" onClick={(e)=>{this.search(e)}} >搜索</button>  
            </div>
        )
    }
}
export default SearchOrder;