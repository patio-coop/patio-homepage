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

Record Functor (C D : Category) : Type := {
  FObj : Obj C -> Obj D;
  FHom : forall {X Y : Obj C}, Hom C X Y -> Hom D (FObj X) (FObj Y);
  F_id : forall (X : Obj C), FHom (id C X) = id D (FObj X);
  F_comp : forall {X Y Z : Obj C} (f : Hom C X Y) (g : Hom C Y Z),
             FHom (comp C f g) = comp D (FHom f) (FHom g)
}.
(* Definition L_morphism {A B : person} (r : relationship A B) : relationship A B := r.

Definition F_morphism {A B : person} (r : relationship A B) : relationship A B := r.

Definition L_functor : Functor People People :=
  {|
    FObj := fun p => p;
    FHom := fun (A B : Obj People) (r : relationship A B) => L_morphism r;
    F_id := fun p => eq_refl;
    F_comp := fun _ _ _ (f : relationship _ _) (g : relationship _ _) => eq_refl
  |}.

Definition F_functor : Functor People People :=
  {|
    FObj := fun p => p;
    FHom := fun (A B : Obj People) (r : relationship A B) => F_morphism r;
    F_id := fun p => eq_refl;
    F_comp := fun _ _ _ (f : relationship _ _) (g : relationship _ _) => eq_refl
  |}. *)
  (* Functor Instance *)
Definition people_identity_functor : Functor People People :=
  {|
    FObj := fun p => p;
    FHom := fun _ _ r => r;
    F_id := fun X => eq_refl;
    F_comp := fun _ _ _ f g => eq_refl
  |}.

(* Test for Functor Object *)
Lemma test_functor_object : FObj People People people_identity_functor Alice = Alice.
  Proof.
    reflexivity.
  Qed.

(* Test for Functor Morphism *)
Lemma test_functor_morphism : FHom People People people_identity_functor (rel Alice Bob) = rel Alice Bob.
Proof.
  reflexivity.
Qed.

(* Test for Functor Preservation of Identity *)
Lemma test_functor_preservation_identity : FHom People People people_identity_functor (id_rel Alice) = id_rel Alice.
Proof.
  reflexivity.
Qed.

(* Test for Functor Preservation of Composition *)
Lemma test_functor_preservation_composition :
  FHom People People people_identity_functor (comp_rel (rel Alice Bob) (rel Bob Carol)) = comp_rel (rel Alice Bob) (rel Bob Carol).
Proof.
  reflexivity.
Qed.

Lemma test_FObj_Alice : FObj People People people_identity_functor Alice = Alice.
Proof.
  reflexivity.
Qed.
Lemma test_Hom_rel : Hom People Alice Bob.
Proof.
  apply rel.
Qed.

Record NaturalTransformation {C D : Category} (F G : Functor C D) := {
  components : forall X : Obj C, @Hom D (@FObj C D F X) (@FObj C D G X);
  naturality : forall {X Y : Obj C} (f : Hom C X Y),
    @comp D _ _ _ (@FHom C D F _ _ f) (components Y) = @comp D _ _ _ (components X) (@FHom C D G _ _ f)
}.
