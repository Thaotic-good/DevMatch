import React from "react";
import {usePercentageMatch} from "./PercentageMatchContext";

function RejectionMessage(){
    const {percentage} = usePercentageMatch()
    return(
        <>
            <div className="relative isolate overflow-hidden max-w-7xl rounded-lg bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl  lg:max-w-none lg:grid lg:grid-cols-2 gap4">
                        <div className="max-w-xl lg:max-w-lg p4">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                            >Feedback!</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">Your match score
                                is {Math.ceil(percentage) + "%"}.
                                Your tech-stack is notable. However, it is not a match with this particular job posting.
                                There are plenty companies in the sea, try another one.
                            </p>
                        </div>
                        <div className="p-4 flex flex-col justify-center">
                            <div className="flex flex-col justify-center text-lg leading-8 text-gray-300">
                                Your tech-stack match result:
                            </div>
                            <div className="bg-white rounded-lg w-full border shadow mt-4">
                                <div className="h-4 bg-gray-400 rounded-full">
                                    <div
                                        className="h-full text-center text-xs text-white bg-blue-500 rounded-full"
                                        style={{width: `${Math.ceil(percentage)}%`}}
                                    >
                                        <p>{Math.ceil(percentage) + "%"}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                     aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
                </div>
            </div>
        </>
    )
}

export default RejectionMessage