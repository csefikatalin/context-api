import Kategoria from "./Kategoria";

export default function Kategoriak(props) {

  
    return (
        <div className="border p-3">
           
                {props.lista.map((obj,index) => {
                   
                    return <Kategoria obj={obj} key={index}  />
                })}
          
        </div>
    );
}
