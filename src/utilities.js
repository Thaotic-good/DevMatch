export const interchangeableRequirements = {
    "React.js": ["React.js", "Next.js", "Remix"],
    "TypeScript": ["TypeScript", "JavaScript"],
    "TailwindCSS": ["TailwindCSS", "MaterialUI"],
    "Git": ["Git", "GitHub"]
};
/*const `normalizeTech`, holds an arrow function that takes `tech` argument, we
 are looping `for` each `key` in `interchangeableRequirements` object we call a
 callback function which for each `key` we check `if` the `tech` is inside the group,
  if yes, we return the `key`, with which we effectively normalise all values to
  their canonical representation, if it is false and the groups don't include `tech`
  we just return it ,

  now how it works with the flag for flexible companies is that
  1. during `handleClick` in `JobListingCard` we state that if `position.company`
  matches `NFCtron` it is flexible, we then put this flag as an argument in calling of `preprocessedRequirements`
  inside `normalizeTech` function

  2. modify `normalizeTech` by passing another argument `shouldNormalize = false`
  and in the body we add a condition that if the*/
export
