import './Secundary_Btns.css';

function Secundary_Btns({ text = "Secundary Button" }) {
    return (
        <>
            <button className="button2">{text}</button>
        </>
    );
}

export default Secundary_Btns;