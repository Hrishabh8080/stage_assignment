import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.png"
import './SplashScreen.scss'
const SplashScreen = () => {
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSplash && (
                <div className="SplashScreen">
                    <img src={Logo} alt="Logo" />
                </div>
            )}
        </>)
}

export default SplashScreen