import jsonEsempio from "./jsonEsempio.json"
import jsonProva from "./jsonProva.json"

const baseUrl = "http://localhost:5133/api/";

export async function getProduct(){
    try {
        let response = await fetch(baseUrl + "product");
        let data = await response.json();
        return data;
    } catch (error) {
        return jsonEsempio;
    }
}

export async function UserLogin(user: string, pws: string){
    try{
        let response = await fetch(baseUrl + "user/get/?usr="+ user + "&&pws="+ pws + "");
        let data = await response.json();
        return data;
    } catch (error) {
        return jsonProva;
    }
}

export async function GetUsers(){
    try{
        let response = await fetch(baseUrl + "user");
        let data = await response.json();
        return data;
    } catch (error) {
        return jsonProva;
    }
}

export async function checkUser(user: any, pws: any){
    let data = await UserLogin(user, pws);
    if(!data || data.length == 0 || data == "Utente non trovato o credenziali errate."){
        return "Utente non trovato o credenziali errate.";
    }

    const userDetails = {
        id: data.idutente,
        username: data.username,
        email: data.email,
        role: data.role,
    };

    localStorage.setItem("user", JSON.stringify(userDetails));
}

import { product, user } from "../admin/component/data-input";

export async function DeleteUser(id){
    try {
        let response = await fetch(baseUrl + "user/" + id,{
            method: "DELETE"
        });

        let data = await response;
        return data.json();
    } catch (e) {
        return e;
    }
}

export async function DeleteProduct(id){
    try {
        let response = await fetch(baseUrl + "product/" + id,{
            method: "DELETE"
        });

        let data = await response;
        return data.json();
    } catch (e) {
        return e;
    }
}

export async function CreateUser(){
    if(user.username == '' || user.password == '' || user.email == '') return;
    try {
        let response = await fetch(baseUrl + "user",{
            method: "POST",
            body: JSON.stringify(user)
        });
        let data = await response.json();
        return data;
    } catch (e) {
        return e;
    }
}

export async function CreateProduct(){
if(product.ProdName == '' || product.Prezzo == 0.00 || product.Prodesc == '') return;
    try {
        let response = await fetch(baseUrl + "product",{
            method: "POST",
            body: JSON.stringify(product)
        });
        let data = await response.json();
        return data;
    } catch (e) {
        return e;
    }
}

import { User, Product } from "./format";

export async function ManagmentOpt(c: string){
    let data;
    if(c == "user"){
        data = User();
    }else if(c == "product"){
        data = Product();
    }else{
        return "errore di sintassi " + c + "non esiste come scelta";
    }
    return data;
}

export async function MenuProduct(){
    let data = await getProduct();
    if(!data || data.length == 0 || data == "Connessione fallita"){
        if(data == "Connessione fallita"){
            return(
                <div>
                    <h2>{data}</h2>      
                </div>
            );
        }else{
            return(
                <div>
                    nessun prodotto      
                </div>
            );
        }
    }

    let cat = [];
    let dataIns = new Map();

    for (let i = 0; i < data.length; i++) {
        if (dataIns.has(data[i].prodesc)) {
            dataIns.get(data[i].prodesc).push(data[i]); // Just push to the existing array
        } else {
            dataIns.set(data[i].prodesc, [data[i]]); // Create a new array with the current item
            cat.push(data[i].prodesc)
        }
    }

    return(
        <div className="gallery">
            {[...dataIns.values()].map((catArray, index) => (
                <div className="galProd" key={index}>
                    <div id="wrap"></div>
                    <h2>- {cat[index]} -</h2>
                    {catArray.map((key: any) => (
                        <div key={key.idprodotto}>
                            <span className="price">&euro;{key.prezzo}</span>
                            <span className="text">{key.prodName}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}