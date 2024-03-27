/*USER INTERACTION SCENARIO*/
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

