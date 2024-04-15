/*BACKLOG
* 5. after submit, the email does not go anywhere
* 6. if they tick a framework, it will automatically fill JavaScript as well
* 7. !!! optional techs (either one of the choice ticked is considered as a match)
*/
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
    }, [choice, stack])

    useEffect(()=>{
        setPercentage(percentageMatch)
    },[percentageMatch, setPercentage])

    useEffect(() => {
        const lengthRequiredTechs = choice.length
        const lengthMatch = matchingTech.length
        setPercentageMatch(()=> (lengthMatch / lengthRequiredTechs)*100)
    }, [matchingTech, choice]);

    return (
        <>
            {percentageMatch>=80? <EmailInput/> : <RejectionMessage/>}
        </>
    )
}

export default TechnologiesComparator

