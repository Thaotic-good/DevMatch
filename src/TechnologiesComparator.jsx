/*BACKLOG
* 5. after submit, the email does not go anywhere
* 6. if they tick a framework, it will automatically fill JavaScript as well
* 7. !!! optional techs (either one of the choice ticked is considered as a match)
*/
import {useUsersStackContext} from "./UsersStackContext";
import React, {useEffect, useMemo, useState} from "react";
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

    const matches = useMemo(() => {
        return stack.filter(tech => {
            return choice.some(req => {
                if (Array.isArray(req)) {
                    return req.includes(tech)
                }
                return tech === req;
            })
        })
    }, [stack, choice])

    console.log(stack) /*['JavaScript', 'Next.js', 'GitHub', 'REST API', 'MaterialUI']*/
    console.log(choice) /*['React.js', 'TypeScript', 'TailwindCSS', 'Git', 'REST API']*/
    console.log(typeof matches)

    // const matches = stack.filter(tech => {
    //     return choice.some(req => {
    //         const isMatch = Array.isArray(req) ? req.includes(tech) : tech === req;
    //         console.log(`Checking tech: ${tech} against req: ${req} - Match: ${isMatch}`);
    //         return isMatch;
    //     });
    // });

    // console.log(`Total Requirements: ${choice.length}`);
    // console.log(`Matched Requirements: ${matches.length}`);
    // console.log(`Match Percentage: ${(matches.length / choice.length) * 100}%`);


    useEffect(() => {
        setMatchingTech(matches)
    }, [matches])

    useEffect(() => {
        setPercentage(percentageMatch)
    }, [percentageMatch])

    useEffect(() => {
        const lengthRequiredTechs = choice.length
        const lengthMatch = matchingTech.length
        setPercentageMatch(() => (lengthMatch / lengthRequiredTechs) * 100)
    }, [matchingTech, choice]);

    return (
        <>
            {percentageMatch >= 80 ? <EmailInput/> : <RejectionMessage/>}
        </>
    )
}

export default TechnologiesComparator

