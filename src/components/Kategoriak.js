import Kategoria from "./Kategoria";

export default function Kategoriak(props) {

    function kivalaszt(ertek){
        props.kivalaszt(ertek)
    } 
    return (
        <div className="border p-3">
           
                {props.lista.map((obj,index) => {
                   
                    return <Kategoria obj={obj} key={index}   kivalaszt={kivalaszt}/>
                })}
          
        </div>
    );
}
