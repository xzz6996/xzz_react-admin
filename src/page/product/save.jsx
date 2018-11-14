import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import CategorySelect from './category-select.jsx'
import FileUploader from 'util/file-uploader/index.jsx'
import util from 'util/util.jsx'
const _util =new util();
import './save.scss'

class SaveProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id                  : this.props.match.params.pid,  //id
            name                : '', //名称
            subtitle            : '', //描述
            categoryId          : 0,  //first or second
            subImages           : [], //图片  
            price               : '', //价钱
            stock               : '', //库存  
            detail              : '', //详情  
            status              : 1   //商品状态1为在售
        }
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
        let index=e.target.getAttribule('index');
    }
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="添加商品" />             
                    <div className="form-group  change-group">
                        <label>商品名称</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="name" onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>商品描述</label>
                        <input type="text" className="form-control" placeholder="请输入商品名称" name="subtitle" onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group ">
                        <label>所属分类</label>
                        <CategorySelect comeIn={(first,second)=>this.comOut(first,second)}/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品价格</label>
                        <input type="text" className="form-control" placeholder="请输入商品价格" name="price" onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group">
                        <label>商品库存</label>
                        <input type="text" className="form-control" placeholder="请输入商品库存" name="stock" onChange={(e)=>this.valueChange(e)}/>
                    </div>
                    <div className="form-group  change-group">
                        <label className="col-md-2">商品图片</label>
                        <div className="col-md-10">
                        {
                            this.state.subImages.length>0?this.state.subImages.map((image, index)=>(
                                <div key={index} className="img-con">
                                    <img src={image.url}  className="img" />
                                    <i className="fa fa-close" index={index} onClick={(e)=>this.delectImg(e)}></i>
                                </div>	        
                            )):<div>请上传图片</div>
                        }
                        </div>    
                        <div className="col-md-offset-2 col-md-10">
                            <FileUploader onSuccess={(res)=>this.uploadSuccess(res)} onError={(err)=>this.uploadError(err)} />
                        </div>                                                                     
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