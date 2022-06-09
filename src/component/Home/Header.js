import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Link/CustomLink';

const Header = () => {
    const menu = <>
    <CustomLink to='/home'>Home</CustomLink>
    <CustomLink to='/about'>About</CustomLink>
    <CustomLink to='/portfolio'>Portfolio</CustomLink>
    <CustomLink to='/blogs'>Blogs</CustomLink>
    <CustomLink to='/contact'>contact</CustomLink>
    </>
    return (
        <div class="navbar bg-accent fixed">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-32 text-white bg-accent">
                        {menu}
                    </ul>
                </div>
                <Link to='/home' class="btn text-primary btn-ghost normal-case text-2xl tracking-widest">Timing</Link>
            </div>
            <div class="navbar-center hidden lg:flex z-10">
                <ul class="menu menu-horizontal p-0 text-white gap-5">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Header;