/*1. I need to create a new component JobListingCard
- already created card, from a real job listing (should include a link)
(a form to input job listing requirements)
(or the card of job listings should appear after making the first DevChoice)
(paste the job description, and DevMatch instantly highlights key tech requirements)
2. user chooses the company with which he will compare his tech-stack
3.
4. the requiredQualifications of that becomes a state which gets passes to TechnologiesComparator
*/

import React, {useEffect, useState} from "react";
import MakeItRun from "./img/makeItRunLogo.jpeg"
import {useButtonsChoice} from "./ButtonsChoiceContext";
import TechnologiesList from "./technologiesList";

const jobListings= [
    {positionName: "Frontend Developer", company:"Make it Run",
        requiredQualifications:["ES6", "SASS/LESS", "HTML5","CSS3", "GIT", "Typescript", "VueJS", "React"],
        logo: MakeItRun,
        link:"https://www.jobstack.it/it-job/developer-other/5fabe3fe8c0be"},
    {positionName: "Junior Frontend Developer", company:"Koala42", requiredQualifications:["React.js", "TypeScript", "Redux", "Git"],
        logo: "https://koala42.com/_next/static/media/koalaLogo.9762b7c2.svg",
        link:"https://www.startupjobs.cz/nabidka/48603/junior-frontend-developer-zlin-praha"},
    {positionName: "Frontend Developer", company:"Cleevio",
        requiredQualifications:["React", "NextJS", "TypeScript", "CSS", "GraphQL", "VueJS", "Svelte"],
        logo: "https://www.jobstack.it/uploads/images/b4c3e380d256ec1882b7b80c943afdc5.png",
        link:"https://www.jobstack.it/it-job/react-developer/60473552b3cf1"},
    ]
function JobListingCard(){
    const [chosenCompaniesRequirements, setChosenCompaniesRequirements]= useState([])
    const {setChoice} = useButtonsChoice()
    const [showList, setShowList] = useState(false)

    const handleClick =(position)=>{
        setChosenCompaniesRequirements(position.requiredQualifications)
        setShowList(true)
    }

    useEffect(() =>{
        setChoice(chosenCompaniesRequirements)
    },[chosenCompaniesRequirements])

    return(
        <>
            <div className="bg-white rounded-lg py-24 sm:py-26">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to DevMatch
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Welcome to DevMatch, where we bridge the gap
                            between tech professionals and their ideal job positions, and that means you and me.
                            No More Guess Work and dive straight into what matters: finding out if your tech-stack matches required qualifications.
                            Choose your desired company, and let's see if we click!
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 items-center">
                        {jobListings.map((position)=>
                            <li key={position.company}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full"
                                     src={position.logo}
                                     alt=""
                                     onClick={()=> handleClick(position)}
                                />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900"
                                            onClick={()=> handleClick(position)}>
                                            {position.company}
                                        </h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600"><a href={position.link}>{position.positionName}</a>
                                        </p>
                                    </div>
                            </div>
                        </li>)}
                    </ul>
                    <div>{showList  && <TechnologiesList/>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobListingCard