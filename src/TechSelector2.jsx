import React, {useState} from "react";

const options = [
    {option: "frontend", description: "..the front"},
    {option: "backend", description: "..the back"},
    {option: "fullstack", description: "..both ways"},
]

function TechSelector2(){
    const [devType, setDevType] = useState('')

    const handleChoice = (event)=> {
        setDevType(event.target.value)
        console.log(devType)
    }

    return(
        <>
            <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <fieldset>
                    <legend className="text-lg font-semibold text-gray-900 mb-4">How do you prefer to do it?
                    </legend>
                    <p className="text-gray-600 mb-4">I like it from...
                    </p>
                    <div className="flex flex-col gap-2">
                        {options.map(xxx => <label className="inline-flex items-center">
                            <input onClick={handleChoice} type="radio" className="form-radio h-5 w-5 text-blue-600"
                                   name="dev-specialization"
                                   value={xxx.option} checked={devType === xxx.option}
                            />
                            <span className="ml-2 text-gray-700">{xxx.description}
                            </span>
                        </label>)}
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default TechSelector2