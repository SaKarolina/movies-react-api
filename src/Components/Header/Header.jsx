import { Link } from "react-router-dom";
import "./header.scss";
import HeaderNav from "./HeaderNav";

function Header() {
    return (
        <header className="app-header">
            <h1>
                <Link to="/trending">
                    Movies
                    <span style={{ textTransform: "lowercase", color: "#f6b52a" }}>
                        .logo
                    </span>
                </Link>
            </h1>
            <HeaderNav></HeaderNav>
        </header>
    );
}

export default Header;
