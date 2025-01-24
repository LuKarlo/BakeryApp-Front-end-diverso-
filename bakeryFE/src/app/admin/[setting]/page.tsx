"use client";

import { Product, User } from "../../component/format";
import { IoArrowUndoSharp } from "react-icons/io5";
import "./css/style.managment.css";
import { useEffect, useState } from "react";

interface Params {
  setting: string;
}

export let parametri;

export default function Page({ params }: { params: Promise<Params> }) {
  const [setting, setSetting] = useState<string>("");

  useEffect(() => {
    const resolveParams = async () => {
      try {
        parametri = await params;
        setSetting(parametri.setting);
      } catch (error) {
        console.error("Failed to resolve params:", error);
      }
    };
    resolveParams();
  }, [params]);

  return (
    <div className="managing">
      <a href="../admin" className="back-btn">
        <IoArrowUndoSharp /> &nbsp; Back
      </a>
      {setting === "user" ? <User /> : <Product />}
    </div>
  );
}