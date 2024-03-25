/* USER INTERACTION SCENARIO:
1. now user has available an array of technologies
2. they will tick what they want
3. techs will be added to a list
4. the list will be made into a context that will be used in a TechnologiesComparator.jsx
* */
import React, {useState, useEffect} from "react";
import {useButtonsChoice} from "./ButtonsChoiceContext";

const techs = [
    {id: 1, name: "Node.js", category: "runtime", type: ["backend"]},
    {id: 2, name: "Express", category: "framework", type: ["backend"]},
    {id: 3, name: "Django", category: "framework", type: ["backend"]},
    {id: 4, name: "Flask", category: "framework", type: ["backend"]},
    {id: 5, name: "Ruby on Rails", category: "framework", type: ["backend"]},
    {id: 6, name: "Spring Boot", category: "framework", type: ["backend"]},
    {id: 7, name: "HTML", category: "language", type: ["frontend"]},
    {id: 8, name: "CSS", category: "language", type: ["frontend"]},
    {id: 9, name: "JavaScript", category: "language", type: ["frontend", "backend"]},
    {id: 10, name: "React", category: "library", type: ["frontend"]},
    {id: 11, name: "Angular", category: "framework", type: ["frontend"]},
    {id: 12, name: "Vue.js", category: "framework", type: ["frontend"]},
    {id: 13, name: "jQuery", category: "library", type: ["frontend"]},
    {id: 14, name: "TypeScript", category: "language", type: ["frontend", "backend"]},
    {id: 15, name: "Webpack", category: "tool", type: ["frontend"]},
    {id: 16, name: "SASS/SCSS", category: "language", type: ["frontend"]},
    {id: 17, name: "GraphQL", category: "language", type: ["frontend", "backend"]},
    {id: 18, name: "MongoDB", category: "database", type: ["backend"]},
    {id: 19, name: "Redis", category: "database", type: ["backend"]},
    {id: 20, name: "Redux", category: "library", type: ["frontend"]},
    {id: 21, name: "Kotlin", category: "language", type: ["backend"]}
]

function TechnologiesList() {
    const {choice} = useButtonsChoice()
    const [usersStack, setUsersStack] = useState([])

    const fullStackTechs = choice === 'fullstack' ? techs : techs.filter(tech =>
        tech.type.includes(choice));
    const handleClick= (filteredTech)=> {
        const isInStack = usersStack.includes(filteredTech.name)
        /*                      or usersStack.some(tech => tech === filteredTech)*/
        if (isInStack) {
            setUsersStack(usersStack.filter(tech=> tech !== filteredTech.name))
            /*                              = return a new array of all elements that aren't the same as current tech*/
        } else {
            setUsersStack(prevUsersStack => [...prevUsersStack, filteredTech.name])
            /*                              = if it is not isInStack, then add it to usersStack array*/
        }
    }

    useEffect(() => {
        // This code runs after `usersStack` has been updated.
        console.log(usersStack);
    }, [usersStack]); // Dependency array - Effect runs when `usersStack` changes.

    return (
        <>
            <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <fieldset>
                    <legend className="text-lg font-semibold text-gray-900 mb-4">Which tech tools are in your
                        tech-stack?
                    </legend>
                    <div className="flex flex-col gap-2 list-none">
                        {fullStackTechs.map((filteredTech) =>
                        <label key={filteredTech.id} className="inline-flex items-center">
                            <input name="tech-options" type="checkbox" onClick={()=>handleClick(filteredTech)}
                                   className="form-radio h-5 w-5 text-blue-600"
                                   value={filteredTech.name}/>
                            <span className="ml-2 text-gray-700">{filteredTech.name}
                            </span>
                        </label>)
                        }
                    </div>
                </fieldset>
            </div>
        </>
    )
}


export default TechnologiesList







