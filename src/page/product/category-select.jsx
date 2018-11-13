import React from 'react';
import Product from 'server/product-server.jsx';
const _product=new Product();
class CategorySelect extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fist:null,
            second:null,
            list1:[],
            list2:[],
        }
    }
    componentDidMount(){
        this.loadFirst();
    }
    //加载一级分类
    loadFirst(){
        _product.getFirst().then(res=>{           
            this.setState({
                list1:res
            })
        }).catch(err=>{

        })
    }
    //加载二级分类
    loadSecond(){

    }
    render(){
        return(
            <div>
                <select className="form-control selectOne">
                    <option>请选择</option>
                    {
                        // this.state.list1.map((name,index)=>{
                        //  return  <option key={index}>{name}</option>
                        // })
                    }
                </select>
                <br></br>
                <select className="form-control selectTwo">
                    <option>请选择</option>
                </select>
            </div>
        )
    }
}
export default CategorySelect;