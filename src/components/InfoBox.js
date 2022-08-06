import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function InfoBox(props) {
    const [showHint, setShowHint] = useState(false)

    const hintElement = showHint ? <div className='infoBox--hint--show'>
        Correct: {rightAnswers()}
    </div> : "";

    function rightAnswers() {
        var currentlyCorrect = 0;
        var answer = getTypes(props.solution);
        var currentlyQuessed = getTypes(props.currentQuess);
        for (const type of currentlyQuessed) {
            if(answer.includes(type)) {
                currentlyCorrect++;
            }
        }
        return `${currentlyCorrect} / ${answer.length}`;
    }

    function getTypes(typeList) {
        return Object.entries(typeList).filter(type => type[1] !== 0).map(type => {
            return `${type[0]}${type[1]}`
        })
    }

    function toggleHint() {
        setShowHint(prevShowHint => !prevShowHint)
    }

    return (
        <div className="infoBox">
            <p>Select all the types from the list on the right side, that are:</p>
            {props.isAttacker ? <ul>
                <li>weak</li>
                <li>resistant</li>
                <li>or immune</li>
            </ul> : 
            <ul>
                <li>super effective</li>
                <li>not very effective</li>
                <li>or ineffective</li>
            </ul>}
            <p>against the {props.isAttacker ? "attacking" : "defending"} type shown on the left side. 
                You can suffle between the different options by clicking the type icon several times.
            </p>
            {props.completed ?
                <div className="infoBox--correct">
                    <FontAwesomeIcon icon={faCheck} className="fa-3x"/>
                </div> :
                <div className="infoBox--wrong">
                    <FontAwesomeIcon icon={faXmark} className="fa-3x"/>
                </div>
            }
            {props.completed ? 
                <div className='infoBox--hint'>
                    <button className='infoBox--hint--button' onClick={props.handleTypeSelection}>
                        Next Type
                    </button>
                </div>
            : 
                <div className='infoBox--hint'>
                    <button className="infoBox--hint--button" onClick={toggleHint}>
                        Hint
                    </button>
                    {showHint ? hintElement : ""}
                </div>
            }
            
        </div>
    )
}