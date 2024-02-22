import Link from 'next/link'
import styles from "./header.module.css";
import NavBar from "@/components/header/NavBar";

const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar/>
            <div className={styles.right}>
                <Link className="bg-blue-700 shadow-lg shadow-cyan-500/50 rounded-xl text-white text-xs p-1" href="/login">Login</Link>
                <Link className="bg-blue-700 shadow-lg shadow-cyan-500/50 rounded-xl text-white text-xs p-1" href="/register">Register</Link>
            </div>
        </header>


    );
};

export default Header;