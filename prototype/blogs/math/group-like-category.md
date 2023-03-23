# Category C
We define our Category of C, consisting of 2 groups.

Consider the objects and morphisms in the source category C:

(Z is the set of integers and Z>0 is the set of positive integers.)

## Objects
    Object A := (Z, +)
    Object B := (Z>0, *)

## Identify Morphisms
    id_A := 0+
    which satisfies the group requirement:
        0+(x+y)=(0+x)+(0+y)

    id_B := 1x
    which satisfies the group requirement:
        1*(x*y)=(1*x)*(1*y)
## Other Morphisms
    Morphism f := 2^ : A -> B,
        where f is the function 2^ : Z -> Z defined by f(x) = 2^x for
        any integer x.

    f (x + y) = f(x) * f(y)
    e.g., f(3 + 4) = f(3) * f(4) = 2^3 * 2^4


    Morphism g := log2 : B -> A,
        where g is the function log2 : Z>0 -> Z defined by g(x) = log2(x)
        for any positive integer x.

    g (x * y) = g(x) + g(y)
    e.g., g(4 * 8) = g(4) + g(8) = log2(4) + log2(8) = 2 + 3

## Isomorphism
Although not a requirement for our C to be a proper category, we wil show that f
and g are isomorphic, because it will be useful for our proof of associativitity
below. To prove that morphisms f and g are isomorphisms, we need to show that
they are inverse to each other. That is, for every x in A and y in B, we need to
show that:

    g(f(x)) = x
    f(g(y)) = y

Let's first demonstrate that g(f(x)) = x for every integer x in A:

    g(f(x)) = g(2^x) = log2(2^x)
    Since log2 is the inverse function of 2^, we have:
    g(2^x) = x

Now, let's demonstrate that f(g(y)) = y for every positive integer y in B:

    f(g(y)) = f(log2(y)) = 2^(log2(y))
    Since 2^ is the inverse function of log2, we have:
    2^(log2(y)) = y

Therefore, morphisms f and g are isomorphisms in Category C, as they are inverse to each other.
## Associativity of composition:
Let's verify the associativity of the composition for morphisms f, g, and f in that order:

Pattern 1

    f: A -> B
    g: B -> A
    f: A -> B

Pattern 2

    g: B -> A
    f: A -> B
    g: B -> A


In both cases, thanks to the fact that g and f are isomorphic:
    f . g . f = f, regardless of the grouping of composition
    g . f . g = g, regardless of the grouping of composition

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
## Functor F

Our Functor F will be defined with source being Category C we defined above
and target the Category of Sets.

Now we can verify that F is a functor that preserves the structure of C:

### F preserves objects:
For any object X in C, F(X) is the corresponding set, which is also a set in
Set. This condition is automatically satisfied.

### F preserves morphisms:
For any morphism f: A -> B or g: B -> A in C, the functor F maps f or g to its
corresponding function F(f) or F(g): F(A) -> F(B) or F(B) -> F(A), respectively,
which is defined by F(f)(x) = f(x) or F(g)(x) = g(x) for any element x in A or
B, respectively. This condition is satisfied for f and g, since F(f) = f and
F(g) = g.

### F preserves composition:
For any composable morphisms f: A -> B and g: B -> A in C, the functor F maps
the composite morphism g o f to the composite function F(g) o F(f), i.e., F(g o
f) = F(g) o F(f). This condition is satisfied for f and g, since F(g o f) = g o
f and F(g) o F(f) = g o f.

### F preserves identity morphisms:
For any object X in C, the functor F maps the
identity morphism id_X to the identity function id_F(X), i.e., F(id_X) = id_F(X).
This condition is satisfied for A and B, since F(id_A) = id_Z and F(id_B) = id_Z>0.

## Functor G
Let G be a functor from the Category C to the Category of Set. We will
define G in a way that it maps the objects and morphisms of C differently
than F.

    Objects in C are mapped to:

    G(A) := Z
    G(B) := Z>0

    For morphisms in C are mapped to:

    For morphism f:= 3^
        e.g.
        G(f)(3 + 5)       = G(f)(8) = 3^8      = 6561
        G(f)(3) * G(f)(5) =           27 * 243 = 6561

    For morphism g: log3

        e.g.
        G(g)(27 * 81)       = G(g)(2187) = log3(2187) = 7
        G(g)(27) + G(g)(81) =              3 + 4      = 7

### G preserves objects:
For any object X in the category C, G(X) is the corresponding set in the category of sets. This condition is automatically satisfied.

### G preserves morphisms:
For any morphism f: A -> B or g: B -> A in the category C, the functor G maps f
or g to its corresponding function G(f) or G(g): G(A) -> G(B) or G(B) -> G(A),
respectively, which is defined by G(f)(x) = 3^x or G(g)(x) = log3(x) for any
element x in G(A) or G(B), respectively.

This condition is satisfied for f and g, since G(f)(x+y) = G(f)(x) * G(f)(y) and G(g)(x*y) = G(g)(x) + G(g)(y), as we have defined G(f) and G(g) to have these properties for any integer x in G(A) or any power of 3 x in G(B), respectively.

### G preserves composition:
For any composable morphisms f: A -> B and g: B -> A in the category C, the functor G maps the composite morphism g o f to the composite function G(g) o G(f), i.e., G(g o f)(x) = log3(3^x) and G(g) o G(f)(x) = log3(3^x) for any integer x in G(A).

### G preserves identity morphisms:
For any object X in the category C, the functor G maps the identity morphism
id_X to the identity function id_G(X), i.e., G(id_X) = id_G(X). This condition
is satisfied for A and B, since G(id_A)(x) = x and G(id_B)(x) = x for any
integer x in G(A) or any power of 3 x in G(B), respectively.


# Natural Transformation

A natural transformation is a way to relate two functors, say F and G, that map
between the same categories. In this case, both functors map from Category C to
the Category of Sets. To demonstrate a natural transformation around morphism f
of Category C, we need to find a family of morphisms (called natural
transformations) that satisfy certain conditions.

Let's consider the morphisms in Category C, particularly f: A -> B, where A =
(Z, +) and B = (Z>0, *). Functor F maps f to F(f) and Functor G maps f to G(f),
so F(f): F(A) -> F(B) and G(f): G(A) -> G(B).

We need to define natural transformations α_A: F(A) -> G(A) and α_B: F(B) ->
G(B) in such a way that they satisfy the naturality condition:

α_B ∘ F(f) = G(f) ∘ α_A

Let's define α_A and α_B as follows:

    α_A := id
    α_B := lambda x : 3 ^ (log2 x)

Calculate α_B ∘ F(f)(x):

    F(f)(x) = 2^x
    α_B(F(f)(x)) = α_B(2^x) = 3^(log2(2^x)) = 3^x

Calculate G(f) ∘ α_A(x):

    α_A(x) = id(x) = x
    G(f)(α_A(x)) = G(f)(x) = 3^x

Now, let's compare the results:

    α_B ∘ F(f)(x) = 3^x
    G(f) ∘ α_A(x) = 3^x

Since α_B ∘ F(f)(x) = G(f) ∘ α_A(x) for all x in F(A), the naturality condition is satisfied. Therefore, α_A and α_B form a natural transformation between functors F and G.