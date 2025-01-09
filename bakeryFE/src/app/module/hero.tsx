import { motion } from "framer-motion"
import "./style.hero.css"

export default function Hero(){
    return (
        <div className="hero" id="home">
            <div id="wrap" className="hero"></div>
            <h1>Good Bakery</h1>
            <h3>- Il bar degli studenti -</h3>
        </div>
    );
}