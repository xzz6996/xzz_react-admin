import React from 'react'

class SearchProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchType:""||"productId",
            searchkeyWord:""
        }
    }
    onKeyUp(e){
        if(e.KeyCode===13){
            this.search()
        }
    }
    onChange(e){
        let name=e.target.name,
            value=e.target.value.trim();        
            this.setState({
                [name]:value
            })       
    }
    search(){
        this.props.comeOut(this.state.searchType,this.state.searchkeyWord)
    }
    render(){
        return(
            <div> 
                 <div className="form-group col col-md-3">
                   <select name="searchType" className="form-control" onChange={(e)=>{this.onChange(e)}}>
                    <option value="productId">商品id</option>
                    <option value="productName">商品名称</option>
                   </select>
                </div>   
                <div className="form-group col col-md-3">
                    <input type="email" name="searchkeyWord" className="form-control" placeholder="请输入关键字" onKeyUp={(e)=>this.onKeyUp(e)} onChange={(e)=>{this.onChange(e)}}/>
                </div>                
                <button  className="btn btn-default" onClick={(e)=>{this.search(e)}} >搜索</button>            
            </div>
        )
    }
}
export default SearchProduct;