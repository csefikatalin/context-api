export default function Elem(props) {
    function kivalaszt(){
        props.kivalaszt(props.ertek)
    }
    return (
        <>
            <div className=" bg-light text-secondary p-2" onClick={kivalaszt}>{props.ertek}</div>
        </>
    );
}
