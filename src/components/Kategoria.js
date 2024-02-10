import Elem from "./Elem";

export default function Kategoria(props) {
    function kivalaszt(ertek){
        props.kivalaszt(ertek)
    }
    const ertekekLista=props.obj[Object.keys(props.obj)[0]];
    return (
        <>
            <div className="list-group-item   bg-success text-warning p-2 ">
               <h5> {Object.keys(props.obj)[0]}</h5>
               
                    {ertekekLista.map((elem, index) => {
                        return <Elem ertek={elem} key={index} kivalaszt={kivalaszt} />;
                    })}
               
            </div>
        </>
    );
}
