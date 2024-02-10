import Kategoria from "./Kategoria";

export default function Kategoriak(props) {
    return (
        <div className="border p-3">
            <ul class="list-group ">
                {props.lista.map((obj,index) => {
                   
                    return <Kategoria obj={obj} key={index} />
                })}
            </ul>
        </div>
    );
}
