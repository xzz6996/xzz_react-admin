import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import CategorySelect from './category-select.jsx'
import util from 'util/util.jsx'
const _util =new util();
import './save.scss'
import RichEditor from 'util/rich-editor/index.jsx'
import ProduceServer from 'server/product-server.jsx'
const _server=new ProduceServer();

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id                  : this.props.match.params.pid,  //id
            name                : '', //名称
            subtitle            : '', //描述
            categoryId          : 0, 
            parentCategoryId    : 0,
            subImages           : [], //图片  
            price               : '', //价钱
            stock               : '', //库存  
            detail              : '', //详情  
            status              : 1  , //商品状态1为在售
        }
    }
    componentDidMount(){
       this.load(); 
    }
    load(){
        if(this.state.id){
            _server.getProduct(this.state.id).then(res=>{
                let subImages=res.subImages.split(',');
                res.subImages=subImages.map((imgUrl)=>{
                  return {
                      uri:imgUrl,
                      url:res.imageHost+imgUrl
                  }
                })
                res.defaultDetail=res.detail;
                this.setState(res);    
            })
        }
    }
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="商品详情" />             
                    <div className="form-group  change-group">
                        <label>商品名称</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="name" value={this.state.name} readOnly/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>商品描述</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="subtitle"  value={this.state.subtitle} readOnly/>
                    </div>
                    <div className="form-group  change-group">
                        <label>所属分类</label>
                        <CategorySelect readOnly  parentCategoryId={this.state.parentCategoryId} categoryId={this.state.categoryId}/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品价格</label>
                        <input type="text" className="form-control" placeholder="请输入商品价格" name="price" value={this.state.price} readOnly/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品库存</label>
                        <input type="text" className="form-control" placeholder="请输入商品库存" name="stock" value={this.state.stock} readOnly/>
                    </div>
                    <div className="form-group  change-group">
                        <label >商品图片</label>
                        <div className="col-md-12">
                        {
                            this.state.subImages.length>0?this.state.subImages.map((image, index)=>(
                                <div key={index} className="img-con">
                                    <img src={image.url}  className="img" />
                                    <i className="fa fa-close" index={index}></i>
                                </div>	        
                            )):null
                        }
                        </div>                                                                      
                    </div>
                    <div className="form-group  change-group">
                        <label className="col-md-12">商品详情</label>
                        <div className="col-md-10" dangerouslySetInnerHTML={{__html: this.state.detail}}></div>
                    </div>
            </div>
        )
    }
}
export default Detail;