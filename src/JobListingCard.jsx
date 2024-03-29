/*1. I need to create a new component JobListingCard
- form of an input to input a job listing requirements
- already created card, from a real job listing (should include a link)
- or the card of job listings should appear after making the first DevChoice
- iframe
- paste the job description, and DevMatch instantly highlights key tech requirements*/

import React from "react";

const jobListings= [
    {positionName: "Frontend Developer", company:"Make it Run",
        requiredQualifications:["ES6", "SASS/LESS", "HTML5","CSS3", "GIT", "Typescript", "VueJS", "React"],
        logo: "https://assets-global.website-files.com/63ee59edd1380726dd5586cf/63ef5ca3a6752067932fbd4e_Logo.svg",
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

    return(
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wellcome to DevMatch
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Welcome to DevMatch, where it's just you,
                            me — Thao, and the chance for the perfect tech match-up. I say NMG: No More Guess Work and
                            dive straight into what matters: finding out if we're a fit. Click on your company,
                            and let's see if we click!
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {/*{jobListings.map()<li>*/}
                        {/*    <div className="flex items-center gap-x-6">*/}
                        {/*        <img className="h-16 w-16 rounded-full"*/}
                        {/*             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                        {/*             alt=""/>*/}
                        {/*            <div>*/}
                        {/*                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie*/}
                        {/*                    Alexander*/}
                        {/*                </h3>*/}
                        {/*                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder /*/}
                        {/*                    CEO*/}
                        {/*                </p>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}
                        {/*</li>}*/}
                    </ul>
                </div>
            </div>
        </>
    )
}