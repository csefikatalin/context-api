import Elem from "./Elem";

export default function Kategoria(props) {
    console.log(props.obj[Object.keys(props.obj)[0]]);
    const ertekekLista=props.obj[Object.keys(props.obj)[0]];
    return (
        <>
            <li class="list-group-item   bg-success text-warning ">
                {Object.keys(props.obj)[0]}
                <ul className="list-group mt-2">
                    {ertekekLista.map((elem, index) => {
                        return <Elem ertek={elem} key={index} />;
                    })}
                </ul>
            </li>
        </>
    );
}
