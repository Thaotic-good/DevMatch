/*COME TO A RESULT ALGORITHM
* 5. add condition if the % is over 80 there will be an input to write down your email\'
* 6. ADD ON: if they tick a framework, it will automatically till JavaScript as well
* ??? ADDING STEPS
// <div id="app">
//     <div className="alm">
//         <div className="gx ua aqu">
//             <nav aria-label="Progress">
//                 <ol role="list" className="abw cle cnr cns">
//                     <li className="cmd"><a href="#" className="bqe lx yr afj agh aru atm bhn cny cob cov cox cpi"><span
//                         className="avz awd ayg brs">Step 1</span><span className="avz awd">Job details</span></a></li>
//                     <li className="cmd"><a href="#" className="lx yr afj agh aru atm cny cob cov cox cpi"
//                                            aria-current="step"><span className="avz awd ayg">Step 2</span><span
//                         className="avz awd">Application form</span></a></li>
//                     <li className="cmd"><a href="#" className="bqe lx yr afj afu aru atm bhl cny cob cov cox cpi"><span
//                         className="avz awd axq brm">Step 3</span><span className="avz awd">Preview</span></a></li>
//                 </ol>
//             </nav>
//         </div>
//     </div>
// </div>*/
import {useUsersStackContext} from "./UsersStackContext";
import React, {useEffect, useState} from "react";
import {useButtonsChoice} from "./ButtonsChoiceContext";
import {usePercentageMatch} from "./PercentageMatchContext";
import EmailInput from "./EmailInput";

function TechnologiesComparator() {
    const {choice} = useButtonsChoice()
    const {stack} = useUsersStackContext();
    const {setPercentage} = usePercentageMatch()
    const [matchingTech, setMatchingTech] = useState([])
    const [percentageMatch, setPercentageMatch] = useState()
    const [showEmailInput, setShowEmailInput] = useState(false)

    useEffect(() => {
        const matches = stack.filter(tech=> choice.includes(tech))
        /* if the current element passes the condition, it gets added to the new array*/
        setMatchingTech(matches)
    }, [choice])

    useEffect(()=>{
        setPercentage(percentageMatch)
    },[percentageMatch])

    useEffect(() => {
        const lengthRequiredTechs = choice.length
        const lengthMatch = matchingTech.length
        setPercentageMatch(()=> (lengthMatch / lengthRequiredTechs)*100)
        // if (percentageMatch > 80){
        //     setShowEmailInput(true)
        // } else {
        //     return (
        //
        //     )
        // }
    }, [matchingTech]);
    console.log(typeof Math.ceil(percentageMatch))

    useEffect((percentageMatch)=>{
        if (percentageMatch > 80){
            setShowEmailInput(true)
        }
    })


    return (
        <>
            <div className=" flex justify-center p-4 max-w-screen-lg mx-auto bg-white rounded-lg shadow-md">
                <fieldset>
                    <div className="flex justify-center text-lg font-semibold text-gray-900 mb-4">Your tech-stack match result:
                    </div>
                    <div className="bg-white rounded-lg w-96 border shadow block p-4">
                        <div className="h-4 bg-gray-400 rounded-full">
                            <div className="flex justify-center h-full text-center text-xs text-white bg-blue-500 rounded-full"
                            style={{width: `${Math.ceil(percentageMatch)}%`}}>
                                <p>{Math.ceil(percentageMatch) + "%"}</p>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            {showEmailInput && <EmailInput/>}

        </>
    )
}

export default TechnologiesComparator

