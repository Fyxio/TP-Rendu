import HangmanDisplay from "./HangmanDisplay";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import { useEffect, useState } from "react";
import { LetterState } from "./Letter";

export default function Game() {
  const [word, setWord] = useState<string>("");
  const [letters, setLetters] = useState<LetterState[]>([]);

  useEffect(() => {
    const words = ["pomme", "fraise"];
    const random = words[Math.floor(Math.random() * words.length)];
    setWord(random);

    // Initialisation : toutes les lettres cachées
    const initialLetters: LetterState[] = random.split("").map((l, index) => ({
      display: l,
      state: "Hidden",
      id: index,
    }));

    setLetters(initialLetters);
  }, []);

  // Quand on clique sur une lettre du clavier
  function handleGuess(letter: string) {
    setLetters((prev) =>
      prev.map((l) =>
        l.display === letter ? { ...l, state: "Display" } : l
      )
    );
  }

  return (
    <div className="Game">
      <WordDisplay letters={letters}/>
      <Keyboard onGuess={(handleGuess) => console.log("click", handleGuess)}/>
      {/* <HangmanDisplay /> */}
    </div>
  );
}
