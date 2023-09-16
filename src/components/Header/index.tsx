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
            <div className="logo">
                <button className="p0" title="home" onClick={() => navigate('/')}><Logo classes='' /></button>
                <div className="apph4 text-3xl">Shopify Inventory Wizard</div>
            </div>
            <div className="badges">
                {/* <Badge icon={BadgeIcons('Scan')} label='Scan' content='0' onClick={() => navigate('/search')} color='blue' />
                <Badge icon={BadgeIcons('Printer')} label='Barcodes' content='0' onClick={() => navigate('/barcodes')} color='blue' />
                <Badge icon={BadgeIcons('Cart')} label='Orders' content='0' onClick={() => navigate('/orders')} color='red' />
                <Badge icon={BadgeIcons('Pallet')} label='Pallet' content='0' onClick={() => navigate('/pallets')} color='red' /> */}
                {/* <Badge icon={BadgeIcons('Truck')} label='Shipment' content='0' onClick={(e) => navigate('/shipment')} color='red' /> */}
                {/* <Badge icon={BadgeIcons('UnBox')} label='Received' content='0' onClick={(e) => navigate('/received')} color='red' /> */}
            </div>
            <button className="p0" title="open profile" onClick={() => setIsOpen(true)}>
                <img src={photo} className="profileimg" alt="photo"></img>
            </button>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} width="fit" height="fit" >
                <div className='profiledrawer'>
                    <img src={photo} className="profileimg" alt="photo"></img>
                    <div className='account'>
                        <div className='name'>
                            {account.name}
                        </div>
                        <div className=''>
                            {account.username}
                        </div>
                    </div>
                </div>
                <div className='divider'>
                    <button onClick={() => handleThemeSwitch()} className='text drawerbg'>{MiscIcons('moon')} Dark Mode</button>
                </div>
                <div className='divider'>
                    <button onClick={() => navigate('/settings')} className='text drawerbg'>{MiscIcons('settings')} Settings</button>
                </div>
                <div className=''>
                    {/* <button onClick={() => signOutClickHandler(instance)} className='text drawerbg'>{MiscIcons('logout')} Sign Out</button> */}
                </div>
            </Drawer>
        </>
    )
}