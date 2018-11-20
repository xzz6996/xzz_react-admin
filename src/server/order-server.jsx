import Util from 'util/util.jsx'
const _util = new Util();

class OrderServer{
    //订单List
    getOrderList(pageNum){
        return _util.request({
            url:"/manage/order/list.do",
            type:"post",
            data:{pageNum:pageNum}
        })
    }
    //按订单号查询
    search(orderNo){
        return _util.request({
            url:"/manage/order/search.do",
            type:"post",
            data:{orderNo:orderNo}
        })
    }
    //订单详情
    orderDetail(orderNo){
        return _util.request({
            url:"/manage/order/detail.do",
            type:"post",
            data:{orderNo:orderNo}
        })
    }
    //订单发货
    sendGood(orderNo){
        return _util.request({
            url:"/manage/order/send_goods.do",
            type:"post",
            data:{orderNo:orderNo}
        })
    }
} 
export default OrderServer;