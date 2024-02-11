import { useContext } from "react";
import { KivalasztContext } from "../context/KivalasztContext";
export default function Elem(props) {
    const { kivalasztottLista, setKivalasztottLista } =  useContext(KivalasztContext);
    function kivalaszt() {
        const a = kivalasztottLista;
        a.push(props.ertek);
        setKivalasztottLista([...a]);
    }

    return (
        <>
            <div className=" bg-light text-secondary p-2" onClick={kivalaszt}>
                {props.ertek}
            </div>
        </>
    );
}


