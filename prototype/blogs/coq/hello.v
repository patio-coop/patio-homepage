Theorem socrates_syllogism :
  forall {O: Type}
  {P Q : O -> Prop}
  (x : O ),
  (forall y : O, P y -> Q y) ->
   P x->
   Q x.
Proof.
  intros object Man Mortal Socrates H1 H2. (* Introduce the premises and assumptions *)
  apply H1. (* Apply premise 1 (All men are mortal) to assumption 2 (Socrates is a man) to obtain Mortal Socrates *)
  apply H2. (* Apply assumption 2 (Socrates is a man) to obtain Man Socrates *)
Qed.