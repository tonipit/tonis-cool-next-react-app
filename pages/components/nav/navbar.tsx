'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
// import Logo from './Logo';
import NavItem from './nav-item';

const MENU_LIST = [
    // { text: 'Home', href: '/' },
    { text: 'Search', href: '/components/cat/cat-search-params' },
    { text: 'About Us', href: '/about' },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link href={'/'}>
                    <h1 className="logo">Search for Samuli's cats</h1>
                </Link>
                <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar font-bold border-blue-600`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
