type KeyboardProps = {
  onGuess: (letter: string) => void;
  disabled?: boolean;
  guessed?: string[]; // lettres déjà cliquées (optionnel pour l’instant)
};

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Keyboard({ onGuess, disabled = false, guessed = [] }: KeyboardProps) {
  return (
    <div className="Keyboard">
      {ALPHABET.map((letter) => {
        const isGuessed = guessed.includes(letter);

        return (
          <button
            key={letter}
            type="button"
            className={`Key ${isGuessed ? "Key--used" : ""}`}
            onClick={() => onGuess(letter)}
            disabled={disabled || isGuessed}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
