export default function Type(props) {
    return (
        <div className="typeBox" style={{backgroundColor: props.typeColor}} onClick={() => props.handleClick(props.typeName)}>
            <div className="typeBox--text">{props.typeName}</div>
            <div className={`typeBox--circle ${props.potencyList[props.currentQuess][0]}`}>{props.potencyList[props.currentQuess][1]}</div>
        </div>
    )
}