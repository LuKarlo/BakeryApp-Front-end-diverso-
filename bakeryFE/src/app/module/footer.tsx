import "./style.footer.css"
import { FaFacebookF, FaInstagram } from "react-icons/fa";


export default function Footer(){
    return(
        <footer id="footer">
            <div id="wrap-footer">
                <img src="./img/GoodBakery.svg"/>
                <p>
                    Seregno, MB, 0362 862185,  afolmonzabrianza@pec.it
                </p>
                <p>
                    &copy; 2025 All Rights Reserved | AFOL Monza Brianza
                </p>
                <p className="link">
                    <a href="/catalogo">Catalogo</a> | <a href="/">Home</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/afolmonzabrianza">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/afolmonzabrianza/">
                        <FaInstagram />
                    </a> 
                </p>
            </div>
        </footer>
    );
}