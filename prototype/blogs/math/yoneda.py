import unittest
from graphviz import Digraph

# Objects and Morphisms in the source category
objects = ["A", "B", "C"]

def identity(x):
    """Identity function: returns the input value unchanged."""
    return x

def f(x):
    return x + 1


def g(x):
    """Example function g: multiplies the input value by 2."""
    return x * 2

morphisms = {
    "A": {"B": [f], "A": [identity]},
    "B": {"C": [g], "B": [identity]},
    "C": {"C": [identity]}
}

def alpha(x):
    """Example natural transformation alpha."""
    if x == "A":
        return f
    elif x == "B":
        return g
    else:
        return None

def beta(x):
    """Example natural transformation beta."""
    if x == "A":
        return lambda x: x - 1
    elif x == "B":
        return lambda x: x / 2
    else:
        return None

natural_transformations = {
    "alpha": alpha,
    "beta": beta
}

hom_functor_objects = {
    "A": "X",
    "B": "Y",
    "C": "Z"
}
def hom_functor_morphism(morphism):
    def hom_functor_morphism_impl(x):
        return (morphism(x),)
    return hom_functor_morphism_impl


def hom_functor(x):
    """Returns the object mapping of the hom functor."""
    return hom_functor_objects.get(x)

def hom_functor_morphism(m):
    """Returns the morphism mapping of the hom functor."""
    return hom_functor_morphisms.get(m.__name__)

def composition(f, g):
    """Returns the composition of two functions."""
    return lambda x: f(g(x))

def hom_sets(a, b):
    """Returns the hom-set between objects a and b."""
    return morphisms.get(a, {}).get(b, [])

def yoneda(source_object, natural_transformation):
    lhs_results = {}
    rhs_results = {}
    for target_object in objects:
        if source_object == target_object:
            continue
        lhs_hom = hom_sets(source_object, target_object)
        rhs_hom = hom_sets(natural_transformation(source_object), target_object)

        lhs_results[target_object] = lhs_hom
        rhs_results[target_object] = rhs_hom

    return rhs_results, lhs_results  # Corrected the order of results

def generate_yoneda_diagram_v3():
    dot = Digraph(comment="Yoneda Lemma Diagram", graph_attr={"splines": "ortho"})
    dot.format = "png"

    # Add nodes for objects
    for obj in objects:
        dot.node(obj, obj)

    # Iterate through source objects and natural transformations
    for source_object in objects:
        for nt_name, nt in natural_transformations.items():
            # Create a subgraph for each natural transformation and source object
            with dot.subgraph(name=f"cluster_{source_object}_{nt_name}") as sg:
                sg.attr(style="invis")

                # Add a node for the natural transformation
                sg.node(nt_name, nt_name, shape="diamond")

                # Iterate through target objects
                lhs_results, rhs_results = yoneda(source_object, nt)
                for target_object in objects:
                    if target_object in lhs_results and target_object in rhs_results:
                        # Add nodes for LHS and RHS morphisms, and connect them to the source object
                        print(lhs_results)
                        for i, (lhs, rhs) in enumerate(
                            zip(lhs_results[target_object], rhs_results[target_object])
                        ):
                            morphism = hom_sets(source_object, target_object)[i]
                            lhs_node = f"lhs_{source_object}_{target_object}_{morphism.__name__}"
                            rhs_node = f"rhs_{source_object}_{target_object}_{morphism.__name__}"
                            sg.node(lhs_node, f"LHS {morphism.__name__}")
                            sg.node(rhs_node, f"RHS {morphism.__name__}")
                            sg.edge(source_object, lhs_node)
                            sg.edge(nt_name, rhs_node)

                            # Connect LHS and RHS morphisms to the target object, and add an equality arrow between them
                            sg.edge(lhs_node, target_object)
                            sg.edge(rhs_node, target_object)
                            sg.edge(lhs_node, rhs_node, style="dashed", constraint="false")

    # Save the generated diagram as a file
    dot.render("yoneda_diagram_v3", view=True)

# Unit tests

class TestIdentity(unittest.TestCase):
    def test_identity(self):
        self.assertEqual(identity(1), 1)
        self.assertEqual(identity(42), 42)
        self.assertEqual(identity(-1), -1)

class TestF(unittest.TestCase):
    def test_f(self):
        self.assertEqual(f(0), 1)
        self.assertEqual(f(1), 2)
        self.assertEqual(f(-1), 0)

class TestG(unittest.TestCase):
    def test_g(self):
        self.assertEqual(g(0), 0)
        self.assertEqual(g(1), 2)
        self.assertEqual(g(-1), -2)
class TestAlpha(unittest.TestCase):
    def test_alpha(self):
        self.assertEqual(alpha("A"), f)
        self.assertEqual(alpha("B"), g)
        self.assertIsNone(alpha("C"))

class TestBeta(unittest.TestCase):
    def test_beta(self):
        self.assertEqual(beta("A")(1), 0)
        self.assertEqual(beta("B")(2), 1)
        self.assertIsNone(beta("C"))

class TestHomFunctor(unittest.TestCase):
    def test_hom_functor(self):
        self.assertEqual(hom_functor("A"), "X")
        self.assertEqual(hom_functor("B"), "Y")
        self.assertEqual(hom_functor("C"), "Z")

class TestHomFunctorMorphism(unittest.TestCase):
    def test_hom_functor_morphism(self):
        self.assertEqual(hom_functor_morphism(identity), identity)
        self.assertEqual(hom_functor_morphism(f)(1), (2,))
        self.assertEqual(hom_functor_morphism(g)(1), (2,))

class TestComposition(unittest.TestCase):
    def test_composition(self):
        h = composition(f, g)
        self.assertEqual(h(1), 3)
        self.assertEqual(h(2), 5)
        self.assertEqual(h(0), 1)

class TestHomSets(unittest.TestCase):
    def test_hom_sets(self):
        self.assertEqual(hom_sets("A", "B"), [f])
        self.assertEqual(hom_sets("A", "A"), [identity])
        self.assertEqual(hom_sets("B", "C"), [g])
        self.assertEqual(hom_sets("B", "B"), [identity])
        self.assertEqual(hom_sets("C", "C"), [identity])
class TestYoneda(unittest.TestCase):
    def test_yoneda(self):
        for source_object in objects:
            for target_object in objects:
                for nt_name, nt in natural_transformations.items():
                    lhs_results, rhs_results = yoneda(source_object, nt)

                    # Check if lhs_results and rhs_results contain empty hom sets
                    if any(len(hom_set) == 0 for hom_set in lhs_results.values()):
                        print(f"Empty hom set(s) found in LHS for {source_object} -> {target_object}, {nt_name}")
                    if any(len(hom_set) == 0 for hom_set in rhs_results.values()):
                        print(f"Empty hom set(s) found in RHS for {source_object} -> {target_object}, {nt_name}")

                    for morphism in hom_sets(source_object, target_object):
                        input_value = morphism
                        expected_value = nt(target_object)(morphism)

                        # Test LHS
                        lhs = lhs_results[target_object][morphism]
                        expected = hom_functor_morphisms[morphism](input_value)
                        expected = expected_value if expected == () else expected
                        if expected_value is not None:
                            self.assertEqual(lhs(input_value), expected_value,
                                                f"Failed for {source_object} -> {target_object}, {nt_name}, morphism {morphism.__name__} (LHS)")

                        # Test RHS
                        rhs = rhs_results[target_object][morphism]
                        if expected_value is not None:
                            self.assertEqual(rhs(input_value), expected_value,
                                                f"Failed for {source_object} -> {target_object}, {nt_name}, morphism {morphism.__name__} (RHS)")

    def test_yoneda2(self):
        for source_object in objects:
            for nt_name, nt in natural_transformations.items():
                lhs_results, rhs_results = yoneda(source_object, nt)

                for target_object in objects:
                    if target_object in lhs_results and target_object in rhs_results:
                        for i, (lhs, rhs) in enumerate(zip(lhs_results[target_object], rhs_results[target_object])):
                            morphism = hom_sets(source_object, target_object)[i]
                            input_value = 1
                            expected_value = None

                            if morphism == identity:
                                expected_value = input_value
                            elif nt_name == "alpha" and morphism == f:
                                expected_value = input_value + 1
                            elif nt_name == "alpha" and morphism == g:
                                expected_value = input_value * 2
                            elif nt_name == "beta" and morphism == f:
                                expected_value = input_value - 1
                            elif nt_name == "beta" and morphism == g:
                                expected_value = input_value / 2

                            if expected_value is not None:
                                self.assertEqual(lhs(input_value), expected_value, f"Failed for {source_object} -> {target_object}, {nt_name}, morphism {morphism.__name__} (LHS)")
                                self.assertEqual(rhs(input_value), expected_value, f"Failed for {source_object} -> {target_object}, {nt_name}, morphism {morphism.__name__} (RHS)")

# ...

if __name__ == "__main__":
    suite = unittest.TestLoader().discover(start_dir=".", pattern="*.py")
    runner = unittest.TextTestRunner()
    runner.run(suite)