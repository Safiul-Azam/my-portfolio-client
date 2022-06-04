import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Link/CustomLink';

const Header = () => {
    const menu = <>
    <CustomLink to='/home'>Home</CustomLink>
    <CustomLink to='/home'>About</CustomLink>
    <CustomLink to='/home'>Portfolio</CustomLink>
    <CustomLink to='/home'>Blogs</CustomLink>
    </>
    return (
        <div class="navbar ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white">
                        {menu}
                    </ul>
                </div>
                <Link to='/home' class="btn text-primary btn-ghost normal-case text-2xl tracking-widest">Timing</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-white gap-5">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Header;