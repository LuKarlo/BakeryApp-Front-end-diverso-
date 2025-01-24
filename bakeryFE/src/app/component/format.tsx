import { product, user } from "../admin/component/data-input";
import { useState, useEffect } from "react";
import { getProduct, GetUsers, CreateProduct, CreateUser, DeleteProduct, DeleteUser } from "./request";
import { LuPackagePlus, LuUserRoundPlus, LuPackageX, LuUserRoundX } from "react-icons/lu";




export function Product(){
    let [data, setData] = useState([]);

    useEffect(() => {
        const dataToCollect = async () => {
            const result = await getProduct();
            setData(result);
        };
    
        dataToCollect();
    }, []);
    
    const [prod, setProd] = useState("");
    const [qt, setQt] = useState("");
    const [prezzo, setPrezzo] = useState("");
    const [cate, setCate] = useState("");

    const setVar = event => {
        console.log(product);
        switch (event.target.id) {
            case "prod":
                setProd(event.target.value);
                product["ProdName"] = prod;
                break;
            case "qt":
                setQt(event.target.value);
                product["Quantita"] = +qt;
                break;
            case "prezzo":
                setPrezzo(event.target.value);
                product["Prezzo"] = +prezzo;
                break;
            case "cate":
                setCate(event.target.value);
                product["Prodesc"] = cate;
                break;
        }
    }

    const handleAddClick = () => {
        console.log(product);
        CreateProduct();
      };

    function handleDelClick(id){
        DeleteProduct(id);
    }

    return(
        <table className="list">
        <thead>
            <tr>
                <th>id</th>
                <th>Prodotto</th>
                <th>quantità</th>
                <th>prezzo (&euro;)</th>
                <th>categoria</th>
                <td className="add" onClick={handleAddClick}>
                    <LuPackagePlus />
                </td>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td><input onChange={setVar} value={prod} autoComplete="off" type="text" name="name" id="prod" /></td>
                    <td><input onChange={setVar} value={qt} autoComplete="off" type="number" name="qt" id="qt" /></td>
                    <td><input onChange={setVar} value={prezzo} autoComplete="off" type="number" name="prezzo" id="prezzo" /></td>
                    <td><input onChange={setVar} value={cate} autoComplete="off" type="text" name="cate" id="cate" /></td>
                </tr>
                {data.length > 0 && data.map((key) => (
                    <tr key={key.idprodotto}>
                        <td className="id">{key.idprodotto}</td>
                        <td className="name">{key.prodName}</td>
                        <td className="qt">{key.quantita}</td>
                        <td className="prezzo">{key.prezzo}</td>
                        <td className="cate">{key.prodesc}</td>
                        <td className="del-icon" onClick={() => handleDelClick(key.idprodotto)}><LuPackageX /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export function User(){
    let [data, setData] = useState([]);

    useEffect(() => {
        const dataToCollect = async () => {
            const result = await GetUsers();
            setData(result);
        };
    
        dataToCollect();
    }, []);

    const [name, setName] = useState("");
    const [pws, setPws] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [cate, setCate] = useState("");

    const setVar = event => {
        switch (event.target.id) {
            case "name":
                setName(event.target.value);
                user["username"] = name;
                break;
            case "pws":
                setPws(event.target.value);
                user["password"] = pws;
                break;
            case "email":
                setEmail(event.target.value);
                user["email"] = email;
                break;
            case "tel":
                setTel(event.target.value);
                user["tel"] = tel;
                break;
            case "cate":
                setCate(event.target.value);
                user["role"] = +cate;
                break;
        }
    }

    
    const handleAddClick = () => {
    console.log(user);
    CreateUser()
    };

      
    function handleDelClick(id){
        DeleteUser(id);
    }

    return(
        <table className="list">
            <thead>
                <tr>
                    <th>id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Tel</th>
                    <th>Role</th>
                    <td className="add" onClick={handleAddClick}>
                        <LuUserRoundPlus />
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input onChange={setVar} value={name} autoComplete="off" type="text" name="name" id="name" />
                    </td>
                    <td>
                        <input onChange={setVar} value={pws} autoComplete="off" type="text" name="pws" id="pws" />
                    </td>
                    <td>
                        <input onChange={setVar} value={email} autoComplete="off" type="text" name="email" id="email" />
                    </td>
                    <td>
                        <input onChange={setVar} value={tel} autoComplete="off" type="text" name="tel" id="tel" />
                    </td>
                    <td>
                        <input onChange={setVar} value={cate} autoComplete="off" type="number" min={0} max={2} name="role" id="cate" />
                    </td>
                </tr>
                {data.length > 0 && data.map((key) => (
                    <tr key={key.idutente}>
                        <td className="id">{key.idutente}</td>
                        <td className="name">{key.username}</td>
                        <td className="qt">{key.password}</td>
                        <td className="email">{key.email}</td>
                        <td className="tel">{key.tel}</td>
                        <td className="cate">{key.role}</td>
                        <td className="del-icon" onClick={() => handleDelClick(key.idutente)}><LuUserRoundX /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}