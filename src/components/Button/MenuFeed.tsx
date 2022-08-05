import { useState } from 'react';
import './Button.scss';
import { VscGlobe } from 'react-icons/vsc';
import { TiUser } from 'react-icons/ti';
function MenuFeed() {
    const [menuOpen, setMenuOpen] = useState(true);
    const menu = !menuOpen ? 'open' : '';
    const showFeed = !menuOpen ? 'show-feed' : '';
    const handleClick = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    };
    return (
        <>
            <div className={`menu-btn ${menu}`} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
            </div>
            <div className={`menu-feed ${showFeed}`}>
                <span className="menu-feed__item feed-1">
                    <VscGlobe />
                </span>
                <span className="menu-feed__item feed-2">
                    <TiUser />
                </span>
            </div>
        </>
    );
}

export default MenuFeed;
