import {NavLink} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export const Headers = () => {

    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        return setShow(!show)
    }

    // My addition to hamburger menu
    const handleLinkClick = () => {
        setShow(false); // Closes the menu when a link is clicked
    };

    return (
        <header>
            <div className="container head">
                <div className="grid navbar-grid">

                    <div className="Logo">
                        <NavLink to="/">
                            <h1>ExploreWorld</h1>
                        </NavLink>
                    </div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to = "/" onClick={handleLinkClick}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to = "/about" onClick={handleLinkClick}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to = "/country" onClick={handleLinkClick}>
                                    Country
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to = "/contact" onClick={handleLinkClick}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='ham-menu'>
                        <button onClick={handleButtonToggle} >
                            <GiHamburgerMenu />
                        </button>
                    </div>

                </div>
            </div>

        </header>
    )
}