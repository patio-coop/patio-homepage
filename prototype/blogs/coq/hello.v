Theorem socrates_syllogism : forall {object : Type}
  {Man Mortal : object -> Prop}
  (Socrates : object),
  (forall y : object, Man y -> Mortal y) ->
   Man Socrates ->
   Mortal Socrates.
Proof.
  intros object Man Mortal Socrates H1 H2. (* Introduce the premises and assumptions *)
  apply H1. (* Apply premise 1 (All men are mortal) to assumption 2 (Socrates is a man) to obtain Mortal Socrates *)
  apply H2. (* Apply assumption 2 (Socrates is a man) to obtain Man Socrates *)
Qed.