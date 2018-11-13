import React from 'react'

class SearchProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchType:"productId",
            searchkeyWord:""
        }
    }
    onSearchKeywordKeyUp(e){
        console.log(e.charCode)
        if(e.KeyCode===13){
            this.search();
        }
    }
    onChange(e){
        console.log(e.target.name)
        let name=e.target.name,
            value=e.target.value;        
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
                    <input type="text" name="searchkeyWord" className="form-control" placeholder="请输入关键字" onChange={(e)=>{this.onChange(e)}}   onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}/>
                </div>                
                <button  className="btn btn-default" onClick={(e)=>{this.search(e)}} >搜索</button>            
            </div>
        )
    }
}
export default SearchProduct;