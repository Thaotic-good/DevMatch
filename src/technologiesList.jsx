const techs = [
    {id: 1, name: "Node.js", category: "runtime", type: ["backend"]},
    {id: 2, name: "Express", category: "framework", type: ["backend"]},
    {id: 3, name: "Django", category: "framework", type: ["backend"]},
    {id: 4, name: "Flask", category: "framework", type: ["backend"]},
    {id: 5, name: "Ruby on Rails", category: "framework", type: ["backend"]},
    {id: 6, name: "Spring Boot", category: "framework", type: ["backend"]},
    {id: 7, name: "HTML", category: "language", type: ["frontend"]},
    {id: 8, name: "CSS", category: "language", type: ["frontend"]},
    {id: 9, name: "JavaScript", category: "language", type: ["frontend", "backend"]},
    {id: 10, name: "React", category: "library", type: ["frontend"]},
    {id: 11, name: "Angular", category: "framework", type: ["frontend"]},
    {id: 12, name: "Vue.js", category: "framework", type: ["frontend"]},
    {id: 13, name: "jQuery", category: "library", type: ["frontend"]},
    {id: 14, name: "TypeScript", category: "language", type: ["frontend", "backend"]},
    {id: 15, name: "Webpack", category: "tool", type: ["frontend"]},
    {id: 16, name: "SASS/SCSS", category: "language", type: ["frontend"]},
    {id: 17, name: "GraphQL", category: "language", type: ["frontend", "backend"]},
    {id: 18, name: "MongoDB", category: "database", type: ["backend"]},
    {id: 19, name: "Redis", category: "database", type: ["backend"]},
    {id: 20, name: "Redux", category: "library", type: ["frontend"]},
    {id: 21, name: "Kotlin", category: "language", type: ["backend"]}
]

function TechnologiesList() {
    const frontendTechsList = frontendTechs.map((tech) =>
        <li key={tech.id}>{tech.name}</li>
    )

    return (undefined)
}
const frontendTechs = techs.filter(tech => tech.type.includes("frontend"))
/*now that I have a list of objects that includes the value "frontend" I want to create a list of values from a key "name"
* but it's a list of objects not an object to access right away*/


console.log(frontendTechs)
// console.log(frontendTechsList)


