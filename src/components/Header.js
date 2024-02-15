import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"
import { SettingOutlined, SearchOutlined } from '@ant-design/icons';
import './Header.scss'
const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth > 768);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='Header'>
            <img className='logo' src={Logo} />

            <div className='rightContainer'>
                <select className='dropdown'>
                    <option>हरियाणवी</option>
                    <option>राजस्थानी</option>
                </select>
                <SearchOutlined style={{ color: "#FFF", fontSize: 30 }} />
                {screenWidth ?
                    <SettingOutlined style={{ color: "#FFF", fontSize: 30, marginLeft: 50 }} /> : null
                }
            </div>
        </div>
    )
}

export default Header