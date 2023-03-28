# Exploring Category Theory: Sets, Functors, and Natural Transformations
# Category of Sets
We define our Category of Sets
## Objects
Each object is a Set

## Identify Morphisms
Identity morphisms for each object A is id: A -> A
## Other Morphisms
Each morphism is a function from set A to set B

## Composition of Morphisms
A morphism is defined for each combination of morphisms that share the target
and source domain:

    f: A->B
    g: B->C

defined as as:
    h: A->C
    h:= g . f = g(f(x))

## Associativity of composition:
f . g . h : A -> B -> C -> D reduce to f(g(h(x))) regardless of the grouping of
composition.
    f . (g . h) = f (g ( h x))
    (f . g) . h = (f . g) (h (x)) = f(g(h(x)))

# Functors

Functors are mappings between categories that preserve the structure of the
categories, by way of mapping objects, morphisms and other laws of category
theory. There can be additional properties but the original properties are
preserved.

Or in other words, it is a way to inherit all properties of the original
(source) category and create a new (target) category.

In order to define a functor, we need to have two categories, a source category
and a target category, and a mapping between the objects and morphisms of the
source category to the objects and morphisms of the target category.

We will define 2 endofunctors, F and G of category Set.

## Functor F
For objects, the functor maps X to a the tuple that start with F:

    F(X) := (F, X)

For Morphisms, the result of function f will be wrapped in a tuple
    F(f) := lambda x: (F, f(x))

Now we can verify that F is a functor that preserves the structure of Category
of Set:

### F preserves objects:
(This preservation is not required for functors)
For any object X in C, F(X) is the corresponding set wrapped in the tuple (F, ).
This condition is automatically satisfied.

### F preserves morphisms:
(This preservation is not required for functors)
For any morphism f in C: F(f) is corresponding function wrapped in the tuple(F,
f(x)). This condition is automatically satisfied.

### F preserves composition:
(This preservation is required for functors)
For any pair of morphisms in C, f and g:

    let h := g . f

Then we have:

    F(h) = (F, h(x))
    F(f) = (F, f(x))
    F(g) = (F, g(x))

    F(g) . F(f) = (F, g.f(x))
                = (F, h(x))

    F(h) = F(g) . F(f)

### F preserves identity morphisms:
(This preservation is required for functors)
For any object X in C, the functor F maps the
identity morphism id_X by wrapping it as (F, id_X)
Thus, the condition is automatically satisfied.

## Functor G
Functor G is defined in exactly the same way as F, except that the tuples are
defined with (G,...) instead of (F, ...)


# Natural Transformation

A natural transformation is a way to relate two functors, say F and G, that map
between the same categories. In this case, both functors map from Category C to
the Category of Sets. To demonstrate a natural transformation around morphism f
of Category C, we need to find a family of morphisms (called natural
transformations) that satisfy certain conditions.

Let's consider any morphism f : A->B in Category C.

We need to define natural transformations α_A: F(A) -> G(A) and α_B: F(B) ->
G(B) in such a way that they satisfy the naturality condition:

α_B ∘ F(f) = G(f) ∘ α_A

Let's define α_A and α_B as follows:

    α_A := lambda (F, x) : (G, x)
    α_B := lambda (F, x) : (G, f(x))

Calculate α_B ∘ F(f)(x):

    F(f)(x) = (F, f(x))
    α_B(F(f)(x)) = α_B(F, f(x)) = (G, f(x))

Calculate G(f) ∘ α_A(x):

    α_A(x) = α_A(F, x) = (G, x)
    G(f)(α_A(x)) = G(f)(x) = (G, f(x))

Now, let's compare the results:

    α_B ∘ F(f)(x) =  (G, f(x))
    G(f) ∘ α_A(x) =  (G, f(x))

Since α_B ∘ F(f)(x) = G(f) ∘ α_A(x) for all x in F(A), the naturality condition
is satisfied. Therefore, α_A and α_B form a natural transformation between
functors F and G.

# Hom-Functors

## Rough Idea

Hom-Functors map a category, say C, to a Hom-Set category, say D.

Although D may have all sorts of objects that are each Hom-Set (say, HomC(A,B)),
and morphisms between them, HomC(A,B)->HomC(C,D), then kind of morphisms created
by our functor our very specific.

> The reason HomC(A,B), instead of Hom(A,B), is for clarity.  Although Hom(A,B)
> is defined as an object in D, the A,B part comes from C!  We make it clear by
> calling our Homset, HomC

> Let me also mention that our morphism Hom(A,B)->Hom(C,D) is just like Int ->
> String in Haskell. It is a function that takes a morphism from A to B and
> returns a new morphism from C to D.

First, pick an object we will use as an anchor in C, say X. Then for every
map f:A->B in C, we map it to what we call HomC(X, f) in D.

HomC(X,f) is a shorthand for HomC(X,A) -> HomC(X,B), a morphism in D, defined as a function
taking morphism X->A of C and producing morphism X->B of C.

## Definition of our Hom-Functor

Our Functor maps:

Using X as a chosen anchor object in C,

    Any Object A in C to HomC(X, A) in D.
    Any morphism f:A->B in C to HomC(X, f), or HomC(X,A)->HomC(X,B) in D.
        h : X -> A
        F(f):=lambda h, f . h

## Definitions of D

In D, the identity morphism for HomC(X,A) is defined as:

id_HomC(X,A) : HomC(X,A)->HomC(X,A)
id_HomC(X,A) := lambda h: h

Composition of morphisms in D is defined as:

f:A->B
g:B->C
h:X->A
HomC(X,g) . HomC(X,f) : X -> C
HomC(X,g) . HomC(X,f) := lambda h, g . f . h

## Preservation of Identity
Let f:B->A.
We need to show that F(id_A . f) = id_HomC(X,A) . HomC(X,f)

Recall that F(f) = HomC(X,f) = lambda h, f . h.

    LHS = F(id_A . f) = F(f) = lambda h, f . h
    RHS = id_HomC(X,A) . HomC(X,f) = (lambda h: h) . (lambda h, f . h)

To prove that the LHS and RHS are equal, we need to show that their action on an arbitrary morphism h:X->A is the same:

    LHS(h) = (lambda h, f . h)(h) = f . h
    RHS(h) = (lambda h: h)(f . h) = f . h

Since LHS(h) = RHS(h) for any morphism h:X->A, the preservation of identity is proven.

## Preservation of Composition
We need to prove that F(gf) = F(g) . F(f)
LHS = lambda h. gf . h =  lambda .h, g . f . h
RHS = lambda h. g . f. h by definition



