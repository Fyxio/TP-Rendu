import Letter, { LetterState } from "./Letter"

export default function WordDisplay({ letters }: { letters: LetterState[] }) {
  return (
    <div className="WordDisplay">
      {letters.map((letter) => (
        <Letter key={letter.id} letter={letter} />
      ))}
    </div>
  );
}
