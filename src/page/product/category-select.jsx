import React from 'react';
import Product from 'server/product-server.jsx';
import util from 'util/util.jsx';
const _util = new util();

const _product=new Product();
class CategorySelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first:0,
            second:0,
            list1:[],
            list2:[],
        }
    }
    componentDidMount(){
        this.loadFirst();
    }
    //加载一级分类
    loadFirst(){
        _product.getCotagory().then(res=>{           
            this.setState({
                list1:res
            })
        }).catch(err=>{
           _util.errorTips(err)
        })
    }
    //加载二级分类
    loadSecond(){
        _product.getCotagory(this.state.first).then(res=>{           
            this.setState({
                list2:res
            })
        }).catch(err=>{
            console.log(err)
            _util.errorTips(err)
        })
    }
    //改变状态
    onChange(e){
        let name=e.target.name,
        value=e.target.value
        this.setState({
            [name]:value
        },()=>{
            if(this.state.first>0){
                this.loadSecond();
            }          
            this.props.comeIn(this.state.first,this.state.first==0?0:this.state.second);
        })     
    }
    render(){
        return(
            <div>
                <select className="form-control selectOne" name="first" value={this.state.first} onChange={(e)=>this.onChange(e)}>
                    <option value="0">请选择一级分类</option>
                    {
                        this.state.list1.map((name,index)=>
                            <option key={index} value={name.id}>{name.name}</option>
                        )                       
                    }
                </select>
                <br></br>
                {
                    this.state.first>0? 
                    <select className="form-control selectTwo" name="second" value={this.state.second} onChange={(e)=>this.onChange(e)}>
                        <option value="0">请选择二级分类</option>
                        {
                            this.state.list2.map((name,index)=>
                                <option key={index} value={name.id}>{name.name}</option>
                            )                       
                        }   
                    </select>:null
                }
               
            </div>
        )
    }
}
export default CategorySelect;