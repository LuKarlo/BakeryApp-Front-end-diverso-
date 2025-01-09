import jsonEsempio from "./jsonEsempio.json"
const baseUrl = "http://localhost:5133/api/";

async function getProduct(){
    try {
        let response = await fetch(baseUrl + "product");
        let data = await response.json();
        return data;
    } catch (error) {
        return jsonEsempio;
    }
}

export default async function MenuProduct(){
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


    console.log(dataIns);

    return(
        <div className="gallery">
            {[...dataIns.values()].map((catArray, index) => (
                <div className="galProd" key={index}>
                    <div id="wrap"></div>
                    <h2>- {cat[index]} -</h2>
                    {catArray.map((key) => (
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