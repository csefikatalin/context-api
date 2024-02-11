import { useContext } from "react";
import { KivalasztContext } from "../context/KivalasztContext";

export default function Kivalasztott(props) {   
    const { kivalasztottLista } = useContext(KivalasztContext);
    return (
        <div className="border p-3 mb-5">
            {kivalasztottLista.map((elem, index) => {
                return <span key={index}>{elem}, </span>;
            })}
        </div>
    );
}
