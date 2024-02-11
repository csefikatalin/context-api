import { createContext, useState } from "react";

export const KivalasztContext = createContext();

export const  KivalasztProvider=({ children }) =>{
    const [kivalasztottLista, setKivalasztottLista] = useState([]);
    function kivalaszt(e) {
        console.log(e)
        const a = kivalasztottLista;
        a.push(e);
        setKivalasztottLista([...a]);
        console.log(kivalasztottLista)
    }

    return (
        <KivalasztContext.Provider
            value={  { kivalasztottLista, setKivalasztottLista, kivalaszt }}
        >
            {children}
        </KivalasztContext.Provider>
    );
}




  