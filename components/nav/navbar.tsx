'use client';

import Link from 'next/link';
import React, { useState } from 'react';
// import Logo from './Logo';
import NavItem from './nav-item';

import styles from './navbar-styles.module.scss';
import { useSelector } from 'react-redux';
import Button from '../button/common-html-elements/button';
import { unAdopt } from '@/features/adoptedPet/adoptedPetSlice';
import { useDispatch } from 'react-redux';

const MENU_LIST = [
    // { text: 'Home', href: '/' },
    { text: 'Search', href: '/search' },
    { text: 'About Us', href: '/about' },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);

    const adoptedCat = useSelector(
        (state) => state.adoptedPetSlice.adoptedCat
    );

    const dispatch = useDispatch();

    return (
        <header
            className={
                'p-5 m-0 bg-gradient-to-b from-gray-600 to-black' +
                styles.Navbar
            }
        >
            <nav className={`nav`}>
                <Link href={'/'} className="">
                    <h1 className="logo font-bold">
                        Search for Samuli&apos;s cats
                    </h1>
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar font-bold border-blue-600`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div
                    className={`${
                        navActive ? 'active' : ''
                    } nav__menu-list`}
                >
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                            className="pt-3 last:pb-10"
                        >
                            <NavItem
                                active={activeIdx === idx}
                                {...menu}
                            />
                        </div>
                    ))}
                </div>
            </nav>
            <div>
                {adoptedCat && (
                    <div>
                        Adopted one:
                        <img
                            src={adoptedCat.images[0]}
                            alt="adopted cat"
                            className="w-20 rounded-full"
                        />
                        <br />
                        <b>{adoptedCat.name}</b>
                        <Button
                            onClick={(e) => {
                                dispatch(unAdopt());
                            }}
                        >
                            x
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
