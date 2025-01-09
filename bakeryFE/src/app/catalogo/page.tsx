import NavBar from "./navbar";
import Catalog from "./catalog";

export default function Home(){
    return(
        <div className="catalog">
            <NavBar />
            <Catalog />
        </div>
    );
}