export default function Kivalasztott(props) {
   
    return (
        <div className="border p-3 mb-5">
            {props.lista.map((elem, index) => {
                return <span key={index}>{elem}, </span>;
            })}
        </div>
    );
}
