import Mutil from 'util/util.jsx'
const _util=new Mutil();

class Product{ 
    //产品列表
    ProductList(pageNum){
        return _util.request({
            url:"/manage/product/list.do",
            type:"post",
            data:{pageNum:pageNum}
        })
    }
    //产品搜索 
    productSearch(info){
        return _util.request({
            url:"/manage/product/search.do",
            type:"post",
            data:info
        })
    }
    //产品上下架
    setSaleStatus(params){
        return _util.request({
            url:"/manage/product/set_sale_status.do",
            type:"post",
            data:params
        })
    }
    //获取品类子节点(平级)
    getCotagory(categoryId){
        return _util.request({
            url:"/manage/category/get_category.do",
            type:"post",
            data:{categoryId:categoryId||0}
        })
    }

    //添加商品
    save(info){
        return _util.request({
            url:"/manage/product/save.do",
            type:"post",
            data:info
        })
    }
    // 检查商品信息              
    checkProduct(info){
        let result={
            status:true,
            msg:"验证通过"
        }
        if(typeof info.name!=="string"||info.name.length===0){
            return {
                status:false,
                msg:"商品名称不能为空"
            }
        }
        if(typeof info.subtitle!=="string"||info.subtitle.length===0){
            return {
                status:false,
                msg:"商品描述不能为空！"
            }
        }
        if(typeof info.categoryId!=="number"||!(info.categoryId>0)){
            return {
                status:false,
                msg:"请选择商品品类！"
            }
        }
        if(typeof info.price!=="number"||!(info.price>0)){
            return {
                status:false,
                msg:"请输入正确的商品价格"
            }
        }
        if(typeof info.stock!=="number"||!(info.stock>0)){
            return {
                status:false,
                msg:"请输入正确的库存数量"
            }
        }
       return result;
    }
     // 获取商品详情
     getProduct(productId){
        return _util.request({
            type    : 'post',
            url     : '/manage/product/detail.do',
            data    : {
                productId : productId || 0
            }
        });
    }
}


export default Product;