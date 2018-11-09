import Mutil from 'util/util.jsx'
const _util=new Mutil();

class User{
    //用户登陆
    login(loginInfo){
        return _util.request({
            url:"/manage/user/login.do",
            type:"post",
            data:loginInfo
        })
    }
    //登陆检查
    checkLogin(loginInfo){
        let uername=$.trim(loginInfo.username),
            password=$.trim(loginInfo.password);
            if(uername.length===0){
                return {
                    status:false,
                    msg:"账户名不能为空"
                }
            }
            if(password.length===0){
                return {
                    status:false,
                    msg:"密码不能为空"
                }
            }
            return {status:true,msg:"验证通过"};
    }
    //退出登陆
    loginOut(){
        return _util.request({
            url:"/user/logout.do",
            type:"post",
        })
    }
    //用户列表
    UserList(pageNum){
        return _util.request({
            url:"/manage/user/list.do",
            type:"post",
            data:{pageNum:pageNum}
        })
    }

}


export default User;