import React from 'react';
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

function NavBar() {
    return (<div>
        <nav>

<div>
    <CiMenuBurger/>
</div>
            <ul className="flex flex-wrap items-center gap-4 mb-1 mt-1 ml-1 rounded-sm text-xs  p-1 text-black">
                <li>
                    <Link className="hover:text-fuchsia-800 " href="/"> <img
                        src="https://i.ibb.co/f9h62Fk/Your-paragraph-text-222.png" alt="logo"
                        className="object-cover object-center rounded-full h-5 w-5"/></Link>
                </li>
                <li>
                    <Link className="hover:text-fuchsia-800 " href="/"> Home</Link>
                </li>
                <li>
                    <Link className="hover:text-fuchsia-300" href="/about">About</Link>
                </li>
                <li>
                    <Link className="hover:text-fuchsia-300" href="/admin">Admin Dashboard</Link>
                </li>
                <li>
                    <Link className="hover:text-fuchsia-300 flex justify-end" href="/articls">Articles</Link>
                </li>
                <li>
                    <Link className="hover:text-fuchsia-300" href="/login">login</Link>
                </li>

            </ul>
        </nav>
    </div>);
}

export default NavBar;