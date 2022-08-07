import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

import SelectedTypeArea from './SelectedTypeArea';
import TypeSelectionArea from './TypeSelectionArea';
import InfoBox from './InfoBox';
import fetchAllTypes, {typeBackgroundColors} from '../DataManagement';

export default function MainArea() {
    // ---------- STATES ----------
    const [allTypesData, setAllTypes] = useState({})
    const [selectedType, setSelectedType] = useState("")
    const [isAttacker, setIsAttacker] = useState(true)
    const [currentQuess, setCurrentQuess] = useState(initializeTypeList())
    const [solution, setSolution] = useState({})
    const [completed, setCompleted] = useState(false)
    // const [allTypes, setAllTypes] = useState({"bug": bug, "electric": electric})



    // ---------- EFFECT HOOKS ----------
    useEffect(() => {
        makeAPIRequest();
    }, [])

    useEffect(() => {
        if(Object.keys(allTypesData).length !== 0) {
            setSelectedType(pickRandomType())
            setCompleted(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allTypesData])

    useEffect(() => {
        if(selectedType !== "") {
            setSolution(initializeSolution())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedType, isAttacker])

    useEffect(() => {
        checkIsSolutionCorrect();
    }, [currentQuess])



    // ---------- FUNCTIONS ----------
    function makeAPIRequest() {
        console.log("API request....")
        fetchAllTypes().then(fetchedTypeData => {
            var typeData = {}; 
            fetchedTypeData.filter(type => type !== undefined).forEach(type => {
                typeData[type.name] = {
                    name: type.name,
                    icon: type.icon,
                    // color: type.backgroundColor, 
                    attack: type.attackRelations, 
                    defence: type.defenceRelations
                }
            })
            setAllTypes(typeData);
        });
    }

    function pickRandomType() {
        var keys = Object.keys(allTypesData);
        var randomType = allTypesData[keys[Math.floor(Math.random() * keys.length)]];
        return randomType;
    }

    function handleTypeSelection() {
        setSelectedType(pickRandomType())
        resetGame()
    }

    function handleRoleSwap() {
        setIsAttacker(prevRole => !prevRole)
        resetGame()
    }

    function initializeTypeList() {
        return Object.fromEntries(Object.keys(typeBackgroundColors).map(type => {
            return [type, 0]
        }))
    }

    function initializeSolution() {
        var typeList = initializeTypeList();
        var updatedTypes = {};
        var selectedTypeEffectiveness = selectedType[isAttacker ? "attack" : "defence"]
        for(const type of selectedTypeEffectiveness.superEffective) {
            updatedTypes[type.name] = 1;
        }
        for(const type of selectedTypeEffectiveness.notEffective) {
            updatedTypes[type.name] = 2;
        }
        for(const type of selectedTypeEffectiveness.noEffect) {
            updatedTypes[type.name] = 3;
        }
        return {
            ...typeList,
            ...updatedTypes
        }
    }

    function checkIsSolutionCorrect() {
        const isCorrect = JSON.stringify(solution) === JSON.stringify(currentQuess);
        if (isCorrect) {
            setCompleted(true);
            // setCurrentQuess(initializeTypeList())
        } else {
            setCompleted(false);
        }
    }

    function shuffleEffectiveness(typeName) {
        setCurrentQuess(prevQuess => {
            return {
                ...prevQuess,
                [typeName]: (prevQuess[typeName] + 1) % 4
            }
        })
    }

    function resetGame() {
        setCompleted(false)
        setCurrentQuess(initializeTypeList())
    }
    
    // ---------- RENDER ----------
    return (
        <main className='mainArea'>
            <div className='mainArea--roleSelection'>
                <div className='mainArea--roleLeft'>{isAttacker ? "Attacker" : "Defender"}</div>
                <button className='mainArea--roleSelection--swapButton' onClick={handleRoleSwap}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} 
                        className="mainArea--roleSelection--swapButton--arrows fa-3x" 
                    />
                </button>
                <div className='mainArea--roleRight'>{!isAttacker ? "Attacker" : "Defender"}</div>
            </div>
            {selectedType === "" || Object.keys(allTypesData).length === 0 ? <h2>Loading...</h2> : 
                <div className='mainArea--typeArea'>
                    <SelectedTypeArea 
                        typeColorList={typeBackgroundColors}
                        selectedType={selectedType} 
                        handleTypeSelection={handleTypeSelection}
                    />
                    <InfoBox 
                        isAttacker={isAttacker}
                        solution={solution}
                        currentQuess={currentQuess}
                        completed={completed}
                        handleTypeSelection={handleTypeSelection}
                    />
                    <TypeSelectionArea 
                        typeColorList={typeBackgroundColors} 
                        selectedTypeEffectiveness={selectedType[isAttacker ? "attack" : "defence"]}
                        currentQuess={currentQuess}
                        solution={solution}
                        shuffleEffectiveness={shuffleEffectiveness}
                    />
                </div>
            }
        </main>
    )
}