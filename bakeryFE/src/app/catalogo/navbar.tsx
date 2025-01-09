import "./style.navbar.css"
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function NavBar(){

    return (
        <nav>
            <div className="icon">
                <a href="/#home">
                    <img src="./img/GoodBakery.svg"/>
                </a>
            </div>
            <div className="listLink">
                <ul>
                    <li id="discovery"><a href="/#scopri">Scopri di pi&uacute;</a></li>
                    <li id="product"><a href="/#prodotti">Prodotti</a></li>
                    <li id="visit"><a href="/#visitaci">Visitaci</a></li>
                </ul>
            </div>
            <div className="social">
                    <a href="https://www.facebook.com/afolmonzabrianza">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/afolmonzabrianza/">
                        <FaInstagram />
                    </a> 
            </div>
        </nav>
    );
}