import React from "react";
import {Avatar,Divider} from "antd";
import '../public/style/components/Author.css';
const Author = () =>{
    return(
        <div className='author-div comm-box'>
            <div> <Avatar size={100} src='https://c-ssl.duitang.com/uploads/item/201806/30/20180630142406_cytla.jpg'  /></div>
            <div className="author-introduction">
                <p>专注于WEB和移动前端开发</p>
                <Divider>社交账号</Divider>
                 <Avatar size={28} icon='github' className='account'/>
                 <Avatar size={28} icon='qq' className='account'/>
                 <Avatar size={28} icon='wechat' className='account'/>
             </div>
        </div>
    )
}
export default Author