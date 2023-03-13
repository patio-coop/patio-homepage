#!/bin/bash

# Define the Markdown code for the table
TABLE_MARKDOWN=$(cat <<'END_MD'
| Style of Object Construction | Universal Construction | Non-Universal Construction |
| --- | --- | --- |
| Defined in Terms of Other Objects | Yes, objects are defined in terms of their relationship to other objects in the category, often via universal properties or limits/colimits. | No, objects are defined independently of their relationship to other objects in the category, often in terms of their internal structure or properties. |
| Morphisms Used in Definition | Yes, morphisms play a crucial role in defining objects via universal properties, limits, and colimits. | No, morphisms are not typically used in defining objects, which are defined based on their internal structure or properties. |
| Description | Objects are constructed as the most general object that satisfies a certain property or set of properties. | Objects are defined independently of their relationship to other objects in the category, often in terms of their internal structure or properties. |
| Example | A pullback of two morphisms is defined as an object that satisfies a certain universal property, namely that it is the most general object equipped with two morphisms to other objects that satisfy a certain commutativity condition. | The Cartesian product of two sets is defined as a set of ordered pairs, where the first element of each pair comes from the first set and the second element comes from the second set. |
| Mathematical Semantics | A pullback represents a common domain of two functions, such that the pullback's projections are the restrictions of those functions to the domain. | The Cartesian product represents all possible pairings of elements from the two sets, and is used to define binary operations on tuples of elements. |
| Exact Definition | Given two morphisms f: X → Z and g: Y → Z in a category C, a pullback of f and g is an object P together with morphisms p₁: P → X and p₂: P → Y that satisfy the following universal property: for any object Q in C and morphisms q₁: Q → X and q₂: Q → Y such that f ○ q₁ = g ○ q₂, there exists a unique morphism u: Q → P such that p₁ ○ u = q₁ and p₂ ○ u = q₂. | Given two sets A and B, their Cartesian product A × B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B. |
END_MD
)

# Output the table to the terminal
echo "$TABLE_MARKDOWN"
