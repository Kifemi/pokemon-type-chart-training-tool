import Type from './Type'

export default function TypeSelectionArea(props) {
    const potencyList = [
        ["neutral", ""],
        ["superEffective", "2"],
        ["notEffective", "1/2"],
        ["noEffect", "0"],
    ]

    const typeElements = Object.entries(props.typeColorList).map(([name, color], index) => 
        <Type 
            key={index} 
            id={index}
            typeName={name} 
            typeColor={color}
            handleClick={props.shuffleEffectiveness}
            currentQuess={props.currentQuess[name]}
            potencyList={potencyList}
        />
    )

    return (
        <div>
            {typeElements.length === 0 ? <h2>Loading...</h2> :
                <div className="typeSelectionArea">{typeElements}</div>
            }
        </div>
    )
}