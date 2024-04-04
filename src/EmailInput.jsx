import {usePercentageMatch} from "./PercentageMatchContext";
import React from "react";

function EmailInput() {
    const {percentage} = usePercentageMatch()
    return (
        <>
            <div className="relative isolate max-w-full overflow-hidden mx-auto rounded-lg bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-full px-6 lg:px-8">
                    <div className="mx-auto max-w-full  lg:max-w-none lg:grid lg:grid-cols-2 gap4">
                        <div className="max-w-full lg:max-w-lg p4">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                            >Congratulations!</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">Your match score
                                is {Math.ceil(percentage) + "%"}.
                                You are an eligible candidate for our company. We would love to have you on board so
                                enter your email, and we will get in touch with you.
                            </p>
                            <form className="mt-6 flex max-w-full gap-x-4">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white
                                    shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"/>
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >Submit
                                </button>
                            </form>
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

export default EmailInput