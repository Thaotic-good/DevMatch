const techs = [
    {name: "Node.js", category: "runtime", type: "backend"},
    {name: "Express", category: "framework", type: ["backend"]},
    {name: "Django", category: "framework", type: ["backend"]},
    {name: "Flask", category: "framework", type: ["backend"]},
    {name: "Ruby on Rails", category: "framework", type: ["backend"]},
    {name: "Spring Boot", category: "framework", type: ["backend"]},
    {name: "HTML", category: "language", type: ["frontend"]},
    {name: "CSS", category: "language", type: ["frontend"]},
    {name: "JavaScript", category: "language", type: ["frontend", "backend"]},
    {name: "React", category: "library", type: ["frontend"]},
    {name: "Angular", category: "framework", type: ["frontend"]},
    {name: "Vue.js", category: "framework", type: ["frontend"]},
    {name: "jQuery", category: "library", type: ["frontend"]},
    {name: "TypeScript", category: "language", type: ["frontend", "backend"]},
    {name: "Webpack", category: "tool", type: ["frontend"]},
    {name: "SASS/SCSS", category: "language", type: ["frontend"]},
    {name: "GraphQL", category: "language", type: ["frontend", "backend"]},
    {name: "MongoDB", category: "database", type: ["backend"]},
    {name: "Redis", category: "database", type: ["backend"]},
    {name: "Redux", category: "library", type: ["frontend"]},
    {name: "Kotlin", category: "language", type: ["backend"]}
]

const frontendTechs = techs.filter(tech => tech.type.includes("frontend"))
/*now that I have a list of objects that includes the value "frontend" I want to create a list of values from a key "name"
* but its a list of objects not an object to access right away*/
const frontendTechsList = frontendTechs.name

// console.log(frontendTechs)
console.log(frontendTechsList)