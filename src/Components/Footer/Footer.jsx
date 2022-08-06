import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
    return (
        <footer>
            <div className="footer-site-info">2022 © SKarolina</div>
            <div id="footer-socials">
                <Link to="/" target="_blank" title="Facebook" className="socials-item facebook"><FaFacebookF />
                </Link>
                <Link to="/" target="_blank" title="Twitter" className="socials-item twitter"><FaTwitter />
                </Link>
                <Link to="/" target="_blank" title="Instagram" className="socials-item instagram"><FaInstagram />
                </Link>
                <Link to="/" target="_blank" title="YouTube" className="socials-item youtube"><FaYoutube />
                </Link>
                <Link to="/" target="_blank" title="Telegram" className="socials-item telegram"><FaTelegramPlane />
                </Link>
            </div>
        </footer>
    )
}

export default Footer;