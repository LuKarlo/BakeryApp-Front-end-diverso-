import { FaUserGear } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";


export default function Grid(){
    return(
        <div className="grid">
            <div className="card">
                <a href="/admin/user">
                    <FaUserGear />
                    <h2>gestione utenti</h2>
                </a>
            </div>
            <div className="card">
                <a href="/admin/product">
                    <BsDatabaseFillGear />
                    <h2>gestione prodotti</h2>
                </a>
            </div>
        </div>
    );
}