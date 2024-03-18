import React, {useState} from "react";

function TechSelector() {
    const [devType, setDevType] = useState('')
    const [technologies, setTechnologies] = useState([])

    const renderTechnologies = () => {
        if (devType) {
            return (
                <>
                    <h3>Select technologies:</h3>
                    {techList.map((tech, index) =>
                        (<li class="flex items-center justify-between p-4 shadow rounded-md">
                            <div class="flex items-center">
                                <img class="h-12 w-12 rounded-full" src="image_url_here" alt="">
                                    <div class="ml-4">
                                        <p class="text-lg font-semibold">Name</p>
                                        <p class="text-sm text-gray-500">email@example.com</p>)
                                    </div>
                            </div>
                        </li>)}
                </>
            )
        }
        return (
            <>

            </>
        )
        }
