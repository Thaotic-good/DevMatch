export const interchangeableRequirements = {
    "React.js": ["React.js", "Next.js", "Remix"],
    "TypeScript": ["TypeScript", "JavaScript"],
    "TailwindCSS": ["TailwindCSS", "MaterialUI"],
    "Git": ["Git", "GitHub"]
};
export const normalizeTech = (tech) =>{
    for (const key in interchangeableRequirements){
        if (interchangeableRequirements[key].includes(tech)){
            return key
        }
    }
    return tech
}

export const preprocessRequirements = (requirements) => {
    return requirements.map(req=> {
        if (Array.isArray(req)){
            return req.map(normalizeTech)[0]
        }
        return req
    }
)}

