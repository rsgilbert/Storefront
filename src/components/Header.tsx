import React from 'react'
import './Header.css'
import { useNavigate, Link } from 'react-router-dom'
import { Cart } from './Cart'
import { SearchIcon } from './SearchIcon'
import { HamburgerIcon } from './HamburgerIcon'
import { AccountIcon } from './AccountIcon'
import { Info } from './info'

export const Header = () => {
    const navigate = useNavigate()
    const goToHome = () => { navigate("/") }

    return (
        <div className="header-complexity">

            <div className="header-placeholder"></div>
            <header className="header">
                <div className="header-container">
                    <ul className="header-links header-start">
                        <li>
                            <HamburgerIcon />
                        </li>
                        <li>
                            <SearchIcon />
                        </li>
                    </ul>

                    <div className="header-center">
                        <Link to="/">
                            <img className="header-logo"
                                src={Info.smallLogoUrl} alt="logo" />
                        </Link>
                    </div>

                    <ul className="header-links header-end">
                        <li>
                            <Link to="/admin">
                                <AccountIcon />
                            </Link>

                        </li>
                        <li>
                            <Cart />
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}