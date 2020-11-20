import React from 'react'
import { Menu } from 'antd';

function Menubar() {
    return (
        <Menu mode="horizontal" style={{textAlign:"right", backgroundColor:"#f0f2f5"}} >
            <Menu.Item >
                พื้นที่
            </Menu.Item>
            <Menu.Item >
                เข้าสู่ระบบ
            </Menu.Item>
            <Menu.Item >
                ลงทะเบียน
            </Menu.Item>
        </Menu>
    )
}

export default Menubar
