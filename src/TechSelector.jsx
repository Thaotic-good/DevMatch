import React, {useState} from "react";

/*1. manage front-end/ back-end state
* 2. list of relevant technologies
* 3. .map <li> that are clickable for each state with a ternary operator
* 4. render it out
* 5. HOW DO I COLLECT RESULTS = CREATE A LIST
* _____________________
* HOW TO COMPARE THE RESULT WITH A JOB POSTING
* 1. create a list of technologies from a particular tech posting
* 2. compare it with .filter method
* (returns a new array containing all matching elements, [] if it matches nothing) and .indexOf
* 'arr.filter(res => res.arrayWithvalue.indexOf('4') !== -1);'
* 3. if the length of the first list and second list is one shorter = "With a little bit of work, this will be a great relationship"
* 4. if the length of the first list and second list is the same = "You are a perfect match."
* */
function TechSelector() {
    const [devType, setDevType] = useState('')
    const [technologies, setTechnologies] = useState([])

    const renderTechnologies = () => {
        // let techList = devType === 'frontend' ? frontendTech : backendTech
        if (devType) {
            return (
                <>
                    <h3>Select technologies:</h3>
                    <ul>
                        {techList.map((tech, index) => (
                            <li key={index}><input type="checkbox" onChange={handleTechTick}>{tech}</input></li>))}
                    </ul>
                </>
            )
        }
    }
    const handleTechTick = () => {
        setTechnologies([...prevTechnologies => prevTechnologies + tech])
    }

    return (
        <>
            <input name="frontend" type="radio" checked={devType === 'frontend'} onClick={renderTechnologies}/>
            I'm a front-end dev
            <input name="backend" type="radio" checked={devType === 'backend'} onClick={renderTechnologies}/>
            I'm a back-end dev
            <input name="fullstack" type="radio" checked={devType === 'fullstack'} onClick={renderTechnologies}/>
            I'm a full-stack dev
        </>
    )
}
export default TechSelector