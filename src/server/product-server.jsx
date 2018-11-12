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
    //产品上下架
    setSaleStatus(params){
        return _util.request({
            url:"/manage/product/set_sale_status.do",
            type:"post",
            data:params
        })
    }
    
}


export default Product;