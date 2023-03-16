Require Import Coq.Logic.FunctionalExtensionality.

Inductive person :=
  | Alice
  | Bob
  | Carol.

Inductive relationship : person -> person -> Type :=
  | rel : forall p1 p2, relationship p1 p2.

Definition comp_rel {p1 p2 p3 : person} (r1 : relationship p1 p2) (r2 : relationship p2 p3) : relationship p1 p3 :=
  rel p1 p3.

Record Category := mkCategory {
  Obj : Type;
  Hom : Obj -> Obj -> Type;
  id : forall A, Hom A A;
  comp : forall {A B C}, Hom A B -> Hom B C -> Hom A C;
  comp_assoc : forall A B C D (f : Hom A B) (g : Hom B C) (h : Hom C D),
    comp (comp f g) h = comp f (comp g h);
  id_left : forall A B (f : Hom A B), comp (id A) f = f;
  id_right : forall A B (f : Hom A B), comp f (id B) = f
}.

Definition id_rel (p : person) : relationship p p := rel p p.

Definition People : Category :=
  {|
    Obj := person;
    Hom := relationship;
    id := id_rel;
    comp := @comp_rel;
    comp_assoc := fun A B C D f g h => eq_refl;
    id_left := fun A B (f : relationship A B) =>
      match f with
      | rel _ _ => eq_refl
      end;
    id_right := fun A B (f : relationship A B) =>
      match f with
      | rel _ _ => eq_refl
      end
  |}.