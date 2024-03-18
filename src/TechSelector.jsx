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
                    {/*<ul>*/}
                    {/*    {techList.map((tech, index) => (*/}
                    {/*        <li key={index}><input type="checkbox" onChange={handleTechTick}>{tech}</input></li>))}*/}
                    {/*</ul>*/}
                </>
            )
        }
    }
    // const handleTechTick = () => {
    //     setTechnologies([...prevTechnologies => prevTechnologies + tech])
    // }

    return (
        <>
            <input className="mt-2 text-gray-600" name="frontend" type="radio" checked={devType === 'frontend'}
                   onClick={renderTechnologies}/>
            I'm a front-end dev
            <input name="backend" type="radio" checked={devType === 'backend'} onClick={renderTechnologies}/>
            I'm a back-end dev
            <input name="fullstack" type="radio" checked={devType === 'fullstack'} onClick={renderTechnologies}/>
            I'm a full-stack dev
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Buy now
            </button>
            <div className="bg-blue-500 text-red p-4">
                This is an example using Tailwind CSS classes.
            </div>
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                        address</label>
                    <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password"
                               className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                                password?</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input id="password" name="password" type="password" autoComplete="current-password" required
                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>

                <div>
                    <button type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in
                    </button>
                </div>
            </form>
        </>
    )
}

export default TechSelector