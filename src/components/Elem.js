export default function Elem(props) {
    console.log(Object.keys(props.ertek));
    return (
        <>
            <li className="list-group-item bg-light text-secondary ">{props.ertek}</li>
        </>
    );
}
