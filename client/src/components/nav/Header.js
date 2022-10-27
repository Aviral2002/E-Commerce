import React, { useState } from 'react';
// import "antd/dist/antd.css"
import { Menu} from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom';
// import firebase from "firebase";
// import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'



const {SubMenu, Item } =Menu;

const Header =() =>{
    const [current, setCurrent] = useState('home')
    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode ="horizontal">
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to={"/"}>Home</Link>
            </Item>

            <Item key="register" icon={<UserAddOutlined />} className={"float-right"}>
            <Link to={"/register"}>Register</Link>

            </Item>

            <Item key="login" icon={<UserOutlined />} className={"float-right"}>
            <Link to={"/login"}>login</Link>

            </Item>

            <SubMenu icon={<SettingOutlined />} title="Username">
                    <Item key="setting:1">Option 1 </Item>
                    <Item key="setting:2">Option 2 </Item>
            </SubMenu>
        </Menu>
    )

}

export default Header