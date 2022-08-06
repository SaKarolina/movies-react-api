import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";

function HeaderNav() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || screenWidth > 710) && (
                <ul className="nav-list">
                    <Link to="/" className="items">Trending</Link>
                    <Link to="/" className="items">Movies</Link>
                    <Link to="/" className="items">TV Series</Link>
                    <Link to="/" className="items">My favorites</Link>
                    <Link to="/" className="items">Search</Link>
                    <Link to="/" className="items">Home</Link>

                </ul>
            )}
            <button onClick={toggleNav} className="nav-btn"><HiMenu style={{ fontSize: '30px', color: '#e8e8e8ec' }} /></button>
        </nav>
    )
}

export default HeaderNav;