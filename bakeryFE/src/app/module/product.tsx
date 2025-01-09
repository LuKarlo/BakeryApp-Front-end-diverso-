import { PiStudent, PiCoffeeLight } from "react-icons/pi";
import { MdOutlineBakeryDining } from "react-icons/md";
import "./style.product.css";

const dataCardCategory = [
    [<PiStudent />, "Un bar gestito dagli studenti"],
    [<MdOutlineBakeryDining />, "Serviamo prodotti di pasticceria per la colazione"],
    [<PiCoffeeLight />, "Abbiamo una vasta selezione di caffè anche per chi è intollerante al lattosio"],
];

function CatDisponibili({ icon, text }) {
    return (
        <div className="card">
            <div className="icon">{icon}</div>
            <div className="text">{text}</div>
        </div>
    );
}

export default function Product() {
    return (
        <div className="prodotti" id="prodotti">
            <div className="text">
                <h2>- Scopri -</h2>
                <h1>I nostri prodotti</h1>
            </div>
            <div className="cate">
                {dataCardCategory.map(([icon, text], i) => (
                    <CatDisponibili key={i} icon={icon} text={text} />
                ))}
            </div>
            <a href="/catalogo" className="button"> - Scopri di pi&uacute; -</a>
        </div>
    );
}
