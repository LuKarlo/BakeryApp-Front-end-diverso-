"use client";
import { FaLock , FaUser } from "react-icons/fa6";
import { checkUser } from "../component/request";
import { useRouter } from "next/navigation";
import "./css/style.login.css"

export default function Login(){
    const router = useRouter()
    let error_message = [false,""];
    async function FormHandle(event){
        event.preventDefault();
        let resp = checkUser(event.currentTarget.elements.usr.value, event.currentTarget.elements.pws.value);
        if(!localStorage.getItem("user")){
            error_message = [true,"Connessione non riuscita"];
        }else if(await resp == "Utente non trovato o credenziali errate."){
            error_message = [true,"Utente non trovato o credenziali errate"];
        }else{
            router.push("./admin")
        }
        
    }

    return(
        <div className="login">
            <form action="" method="post" onSubmit={FormHandle}>
                <span className="label">
                    <h1>Login</h1>
                </span>
                <span className="label">
                    <span className="icon-label"><FaUser /></span><input type="text" name="usr" id="usr" />
                </span>
                <span className="label">
                    <span className="icon-label"><FaLock /></span><input type="password" name="pws" id="pws" />                    
                </span>
                <span className="label">
                    <input type="submit" value="Login" />
                </span>
            </form>
            <div className={!error_message[0] ? "error_message hide" : " error_message"}>
                Utente non trovato
            </div>
        </div>
    );
}