/*BACKLOG
* 5. after submit, the email does not go anywhere
* 6. if they tick a framework, it will automatically fill JavaScript as well
* 7. optional techs (either one of the choice ticked is considered as a match)
*/
import {useUsersStackContext} from "./UsersStackContext";
import React, {useEffect, useMemo, useState} from "react";
import {useButtonsChoice} from "./ButtonsChoiceContext";
import {usePercentageMatch} from "./PercentageMatchContext";
import EmailInput from "./EmailInput";
import RejectionMessage from "./RejectionMessage";
import {normalizeTech} from "./utilities"

function TechnologiesComparator() {
    const {choice, companyName} = useButtonsChoice()
    const {stack} = useUsersStackContext();
    const {setPercentage} = usePercentageMatch()
    const [percentageMatch, setPercentageMatch] = useState()

    const isFlexible = companyName === "NFCtron"

    const normalizedStack= (isFlexible? stack.map(normalizeTech) : stack)
    const normalizedChoice = (isFlexible? choice.map(normalizeTech) : choice)

    const matches = useMemo(() => {
        return normalizedStack.filter(tech=> normalizedChoice.includes(tech))
    }, [normalizedStack, normalizedChoice])

    // DEBUGGING:
    // console.log("Company Name: ", companyName);
    // console.log("Is Flexible: ", isFlexible);
    // console.log("Original Stack: ", stack);
    // console.log("Normalized Stack: ", normalizedStack);


    useEffect(() => {
        setPercentage(percentageMatch)
    }, [percentageMatch, setPercentage])

    useEffect(() => {
        const lengthRequiredTechs = normalizedChoice.length
        const lengthMatch = matches.length
        setPercentageMatch(() => (lengthMatch / lengthRequiredTechs) * 100)
    }, [matches, normalizedChoice]);

    return (
        <>
            {percentageMatch >= 80 ? <EmailInput/> : <RejectionMessage/>}
        </>
    )
}

export default TechnologiesComparator

