import { useContext, useState } from 'react';
import './header.css';
import { AuthContext } from '../../context/AuthContext';
import { Badge, Drawer } from '..';
import { BadgeIcons, Logo, MiscIcons } from '../../icons';
import { useNavigate } from '../../hooks';
// import { useMsal } from '@azure/msal-react';
// import { useNavigate } from 'react-router-dom';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { account, photo, theme, setTheme } = useContext(AuthContext);
    // const { instance } = useMsal();
    const navigate = useNavigate();

    const handleThemeSwitch = () => {
        setTheme && setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
    }

    // async function signOutClickHandler(instance: any) {
    //     try {
    //         await instance.logoutPopup().then(
    //             () => console.log(instance)
    //         ).catch((error: any) => console.log(error))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <>
            <div className="headlogo">
                <button className="p0" title="home" onClick={() => navigate('/')}><Logo classes='' /></button>
            </div>
            <div className="headtitle">Shopify Inventory Wizard</div>
        </>
    )
}