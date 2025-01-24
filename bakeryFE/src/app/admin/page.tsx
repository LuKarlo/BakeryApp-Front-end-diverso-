"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./css/style.admin.css";
import Grid from "./component/grid";
import { IoArrowUndoSharp } from "react-icons/io5";



export default function Admin() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true); // Stato per gestire il caricamento

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsChecking(false); // Termina il controllo
    } else {
      router.push("../login"); // Esegui il redirect
    }
  }, [router]);

  // Mostra una schermata di caricamento o nulla durante il controllo
  if (isChecking) {
    return( 
    <div className="loading">
        <img src="/img/goodbakery.svg"/>    
    </div>
    );
  }

  // Contenuto della pagina mostrato solo dopo il controllo
  return (
    <div className="admin">
      <a href="../" className="back-btn"><IoArrowUndoSharp /> &nbsp; Back</a>
      <Grid />
    </div>
  );
}
