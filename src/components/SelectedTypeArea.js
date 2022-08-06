export default function SelectedTypeArea(props) {
    // console.log("Selected Type Area")
    return (
        <div className="selectedTypeArea" style={{backgroundColor: props.typeColorList[props.selectedType.name]}}>
            <div className="selectedTypeArea--typeName" style={{backgroundColor: props.typeColorList[props.selectedType.name]}}>{props.selectedType.name}</div>
            <img className="selectedTypeArea--typeIcon" src={props.selectedType.icon} />
            <button className="selectedTypeArea--button" onClick={props.handleTypeSelection}>Random Type</button>
        </div>
    )
}