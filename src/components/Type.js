export default function Type(props) {
    // function checkEffectiveness() {
    //     for (const type of props.selectedTypeEffectiveness.notEffective) {
    //         if(type.name === props.typeName) {
    //             return potencyList[2];
    //         }
    //     }
    //     for (const type of props.selectedTypeEffectiveness.superEffective) {
    //         if(type.name === props.typeName) {
    //             return potencyList[1];
    //         }
    //     }
    //     for (const type of props.selectedTypeEffectiveness.noEffect) {
    //         if(type.name === props.typeName) {
    //             return potencyList[3];
    //         }
    //     }
    //     return potencyList[0];
    // }

    // console.log("rendering type")
    // console.log(props.selectedTypeEffectiveness)
    // const correctPower = checkEffectiveness()
    // console.log(props.id)
    // console.log(props.currentQuess)
    return (
        <div className="typeBox" style={{backgroundColor: props.typeColor}} onClick={() => props.handleClick(props.typeName)}>
            <div className="typeBox--text">{props.typeName}</div>
            <div className={`typeBox--circle ${props.potencyList[props.currentQuess][0]}`}>{props.potencyList[props.currentQuess][1]}</div>
        </div>
    )
}