import HangmanDisplay from "./HangmanDisplay";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import { use, useEffect, useState } from "react";
import { LetterState } from "./Letter";

export default function Game() {
    const [word, setWord] = useState<string>("");
    const [letters, setLetters] = useState<LetterState[]>([]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const MAX_ERRORS = 6;
    const [errors, setErrors] = useState<number>(0);
    const isWin = letters.length > 0 && letters.every(l => l.state === "Display");
    const isLose = errors >= MAX_ERRORS;
    const isGameOver = isWin || isLose;

    function initGame() {
        const words = ["pomme", "fraise"];
        const random = words[Math.floor(Math.random() * words.length)];
    setWord(random);

    const initialLetters: LetterState[] = random.split("").map((l, index) => ({display: l, state: "Hidden", id: index,}));

    setLetters(initialLetters);
    setGuessedLetters([]);
    setErrors(0);
}


    useEffect(() => {
        initGame();
        const words = ["pomme", "fraise"];
        const random = words[Math.floor(Math.random() * words.length)];
        setWord(random);

        // Initialisation : toutes les lettres cachées
        const initialLetters: LetterState[] = random.split("").map((l, index) => ({
            display: l,
            state: index === 0 ? "Display" : "Hidden",
            id: index,
        }));

    setLetters(initialLetters);
        }, []);

    // Quand on clique sur une lettre du clavier
    function handleGuess(letter: string) {
    if (isGameOver) return;
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(prev => [...prev, letter]);

    const isCorrect = letters.some(l => l.display === letter);

    if (!isCorrect) {
        setErrors(prev => prev + 1);
    return;
  }
    setLetters(prev =>
        prev.map(l =>
            l.display === letter ? { ...l, state: "Display" } : l
    )
  );
}

    return (
        <div className="Game">
            <p>Erreurs : {errors} / {MAX_ERRORS}</p>

            <HangmanDisplay errors={errors} />

            {isWin && <p style={{ color: "green", fontWeight: "bold" }}>🎉 Victoire !</p>}

            {isLose && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                    💀 Défaite ! Le mot était : <b>{word}</b>
                </p>
            )}

            {isGameOver && (
                <button onClick={initGame} className="ReplayButton">
                    🔄 Rejouer
                </button>
            )}


            <WordDisplay letters={letters}/>

            <Keyboard onGuess={handleGuess} guessed={guessedLetters} disabled={isGameOver} />
            {/* <HangmanDisplay /> */}
        </div>
    );
}