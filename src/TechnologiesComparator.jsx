import {useUsersStackContext} from "./UsersStackContext";
import React from "react";
function TechnologiesComparator(){
    const {stack} = useUsersStackContext();
    console.log(stack);

    return (
        <>
            <h1>Hi</h1>
        </>
    )
}

export default TechnologiesComparator
