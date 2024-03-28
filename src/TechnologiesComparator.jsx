/*USER INTERACTION SCENARIO
* ! logic isn't flowing
* ? in which step do I show the job listing
* 1. I need to create a new component JobListingCard
* - form of an input to input a job listing requirements
* - already created card, from a real job listing (should include a link)
* - or the card of job listings should appear after making the first DevChoice
* - iframe
* 2. adding steps
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
import React from "react";

const requiredQualifications = [{}]
function TechnologiesComparator() {
    const {stack} = useUsersStackContext();
    console.log(stack);

    return (
        <>
            <div className=" flex justify-center p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <fieldset>
                    <div className="text-lg font-semibold text-gray-900 mb-4">Your tech-stack match result:
                    </div>
                    <div className="bg-white rounded-lg w-72 border shadow block p-4">
                        <div className="w-full h-4 bg-gray-400 rounded-full">
                            <div className="w-3/4 h-full text-center text-xs text-white bg-blue-500 rounded-full">
                                <p>75%</p>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default TechnologiesComparator

