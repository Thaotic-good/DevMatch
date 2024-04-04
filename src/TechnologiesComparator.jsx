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
import RejectionMessage from "./RejectionMessage";

function TechnologiesComparator() {
    const {choice} = useButtonsChoice()
    const {stack} = useUsersStackContext();
    const {setPercentage} = usePercentageMatch()
    const [matchingTech, setMatchingTech] = useState([])
    const [percentageMatch, setPercentageMatch] = useState()

    useEffect(() => {
        const matches = stack.filter(tech=> choice.includes(tech))
        /* if the current element passes the condition, it gets added to the new array*/
        setMatchingTech(matches)
    }, [choice, stack]) /*stack is an external value and also is used, so must be declared as dependency*/

    useEffect(()=>{
        setPercentage(percentageMatch)
    },[percentageMatch, setPercentage]) /*setter functions from useState or useContext do not need to be included
    in dependency (React guarantees they are static = not change between renders), ESLint's rule is overly cautious*/

    useEffect(() => {
        const lengthRequiredTechs = choice.length
        const lengthMatch = matchingTech.length
        setPercentageMatch(()=> (lengthMatch / lengthRequiredTechs)*100)
    }, [matchingTech, choice]); /*if a variable is used, it also has to be declared as a dependency*/
    console.log(typeof Math.ceil(percentageMatch))

    return (
        <>
            {percentageMatch>=80? <EmailInput/> : <RejectionMessage/>}
        </>
    )
}

export default TechnologiesComparator

