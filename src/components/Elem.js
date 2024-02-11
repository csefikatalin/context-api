import { useContext } from "react";
import { KivalasztContext } from "../context/KivalasztContext";
export default function Elem(props) {
    const { kivalaszt } = useContext(KivalasztContext);
    return (
        <>
            <div className=" bg-light text-secondary p-2" onClick={()=>kivalaszt(props.ertek)}>
                {props.ertek}
            </div>
        </>
    );
}
