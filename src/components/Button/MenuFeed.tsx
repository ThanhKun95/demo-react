import { useState } from 'react';
import './MenuFeed.scss';
function MenuFeed() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = !menuOpen ? 'open' : '';
    const handleClick = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    };
    return (
        <div className={`menu-btn ${menu}`} onClick={handleClick}>
            <div className="menu-btn__burger"></div>
        </div>
    );
}

export default MenuFeed;
