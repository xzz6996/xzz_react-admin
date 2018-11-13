import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import CategorySelect from './category-select.jsx'

class SaveProduct extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="添加商品" />             
                    <div className="form-group  change-group">
                        <label>商品名称</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="name"/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>商品描述</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="subtitle"/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>所属分类</label>
                        <CategorySelect />
                    </div>
                    <div className="form-group  change-group">
                        <label>商品价格</label>
                        <input type="text" className="form-control" placeholder="请输入商品价格" name="price"/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品库存</label>
                        <input type="text" className="form-control" placeholder="请输入商品库存" name="stock"/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品图片</label>
                        <input type="text" className="form-control" placeholder="请输入商品图片" />
                    </div>
                    <div className="form-group  change-group">
                        <label>商品详情</label>
                        <input type="text" className="form-control" placeholder="请输入商品详情" />
                    </div>
                    
                    <button type="text" className="btn btn-info">添加商品</button>
            </div>
        )
    }
}
export default SaveProduct;