We will create categories:

Category C:
    - 4 objects, D(i) , D(j) and R and X

Category I
    - 2 objects called i and j
    - there are only 2 arrows, id of i and id of j.
    - no other arrow in this category

Functor D from I to C
    - D sends i to D(i)
    - D sends j to D(j)

Constant Functor DeltaSubscriptR from I to C
    - D sends every object to R
    - D sends every morphism to R

Constant Functor DeltaSubscriptX from I to C
    - D sends every object to X
    - D sends every morphism to X


Natural Transformation PI from DeltaSubscriptR to D
    - Ith component of PI-Subscript-i is DeltaSubscriptR(i) -> D(i)
    or simply:
    - Ith component of PI-Subscript-i is R -> D(i)

So that candidates of our universal property are:
    - Pi-subscript-i
    - Pi-subscript-j

We have a cone of D, which has
    - Apex at Object X
    - All the rest as a natural transformation Beta : Delta-Subscript-X -> D
    - This cone consists f numerous arrows from the apex

There is a unique arrow h from X to R such that
    Beta-subscript-i = pi-subscript-i . h
    Beta-subscript-j = pi-subscript-j . h

A limit is a cone R, PI such that
    for any cone X, Beta, there exists
    a unique h: X -> R such that
        Beta-subscript-i = PI-subscript-i . h for all i in I