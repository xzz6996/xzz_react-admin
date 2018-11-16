import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import CategorySelect from './category-select.jsx'
import FileUploader from 'util/file-uploader/index.jsx'
import util from 'util/util.jsx'
const _util =new util();
import './save.scss'
import RichEditor from 'util/rich-editor/index.jsx'
import ProduceServer from 'server/product-server.jsx'
const _server=new ProduceServer();

class SaveProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id                  : this.props.match.params.pid,  //id
            name                : '', //名称
            subtitle            : '', //描述
            categoryId          : 0,  //first or second
            parentCategoryId    : 0,
            subImages           : [], //图片  
            price               : '', //价钱
            stock               : '', //库存  
            detail              : '', //详情  
            status              : 1  , //商品状态1为在售
        }
    }
    componentDidMount(){
        if(this.props.match.params.pid){
            this.edit(); 
        }     
    }
    //编辑
    edit(){
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
    //所属分类
    comOut(first,second){
        console.log(first,second)
        if(first&&second===0){
            this.setState({
                categoryId:first
            })
        }
        if(second&&second!==0){
            this.setState({
                categoryId:second
            })
        }
    }
    //上传图片成功
    uploadSuccess(res){
        let subImages = this.state.subImages;
        subImages.push(res);
        this.setState({
            subImages:subImages
        })
    }
    //上传图片失败
    uploadError(err){
        _util.errorTips(err)
    }
    //input值的改变
    valueChange(e){
        let name=e.target.name,
        value=e.target.value.trim();
        this.setState({
            [name]:value
        })
    }
    //删除图片
    delectImg(e){
        let index= parseInt(e.target.getAttribute('index')),
            subImages= this.state.subImages;
            subImages=subImages.splice(index, 1);
        this.setState({
            subImages:subImages
        })
    }
    //富文本编辑器改变值
    richeditorValueChange(value){
        this.setState({
            detail:value
        })
    }
    //添加商品
    save(){
        let subImages=this.state.subImages.map((url,index)=>{return url});
        let info={
            name                : this.state.name, //名称
            subtitle            : this.state.subtitle, //描述
            categoryId          : parseInt(this.state.categoryId),  //first or second
            subImages           : subImages, //图片  
            price               : parseFloat(this.state.price), //价钱
            stock               : parseInt(this.state.stock), //库存  
            detail              : this.state.detail, //详情  
            status              : this.state.status , //商品状态1为在售
        }
        var data=_server.checkProduct(info);
        if(!data.status){
            _util.errorTips(data.msg)
        }else{
            _server.save(info).then(res=>{
                _util.successTips("添加商品成功");
            this.props.history.push('/product/index')
            })
        }       
    }
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="添加商品" />             
                    <div className="form-group  change-group">
                        <label>商品名称</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="name" value={this.state.name} onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>商品描述</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="subtitle"  value={this.state.subtitle} onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>所属分类</label>
                        <CategorySelect parentCategoryId={this.state.parentCategoryId} categoryId={this.state.categoryId}  comeIn={(first,second)=>this.comOut(first,second)}/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品价格</label>
                        <input type="text" className="form-control" placeholder="请输入商品价格" name="price" value={this.state.price} onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品库存</label>
                        <input type="text" className="form-control" placeholder="请输入商品库存" name="stock" value={this.state.stock} onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group">
                        <label >商品图片</label>
                        <div className="col-md-12">
                        {
                            this.state.subImages.length>0?this.state.subImages.map((image, index)=>(
                                <div key={index} className="img-con">
                                    <img src={image.url}  className="img" />
                                    <i className="fa fa-close" index={index} onClick={(e)=>this.delectImg(e)}></i>
                                </div>	        
                            )):<div>请上传图片</div>
                        }
                        </div>    
                        <div className="col-md-12">
                            <FileUploader onSuccess={(res)=>this.uploadSuccess(res)} onError={(err)=>this.uploadError(err)} />
                        </div>                                                                     
                    </div>
                    <div className="form-group  change-group">
                        <label>商品详情</label>
                        <RichEditor    detail={this.state.detail} defaultDetail={this.state.defaultDetail} onValueChange={(value)=>this.richeditorValueChange(value)}/>
                    </div>
                    
                    <button type="text" className="btn btn-info" onClick={(e)=>this.save(e)}>添加商品</button>
            </div>
        )
    }
}
export default SaveProduct;